// ===============================
// Healthy Little Minds Service Worker
// Lean precache (no big media) + runtime image cache
// ===============================

const PRECACHE_NAME = 'hlm-precache-v81'; // bump here for new release
const RUNTIME_NAME  = 'hlm-runtime-v20';   // leave if strategy unchanged
const IMAGE_CACHE   = 'hlm-img-v15';       // leave if image rules unchanged

const IMAGE_MAX_ENTRIES = 60;                   // limit image count
const IMAGE_MAX_AGE_MS  = 1000 * 60 * 60 * 24 * 30; // ~30 days

// Keep precache small & critical (NO big images/videos/PDFs)
const ASSETS_TO_PRECACHE = [
  // Shell & core pages
  '/', '/index.html', '/home.html', '/dashboard.html', '/interactive-tools.html',
  '/bulletin.html', '/offline.html', '/more-feelings.html',
  '/teacher-life.html', '/about_me.html',

  // Emotional pages (HTML only)
  '/anger.html', '/calm.html', '/confused.html', '/curious.html', '/disappointed.html',
  '/embarrassed.html', '/fear.html', '/frustrated.html', '/grateful.html', '/hopeful.html',
  '/jealous.html', '/joy.html', '/lonely.html', '/love.html', '/nervous.html', '/proud.html',
  '/sadness.html', '/shy.html', '/silly.html', '/story-sad.html', '/bored.html',

  // Parents section (HTML only)
  '/parents.html', '/parents-tips.html', '/parents-guides.html', '/parents-downloads.html',

  // Audiobook section (HTML only)
  '/audiobook_section.html', '/audiobook_section_index.html',

  // Localized pages (HTML only)
  '/zh-tw/home.html', '/zh-cn/home.html', '/ja/home.html', '/ko/home.html',
  '/zh-tw/dashboard.html', '/zh-tw/interactive-tools.html', '/zh-tw/parents.html',
  '/zh-cn/dashboard.html', '/zh-cn/interactive-tools.html', '/zh-cn/parents.html',
  '/ko/dashboard.html', '/ko/interactive-tools.html', '/ko/parents.html',
  '/ja/dashboard.html', '/ja/interactive-tools.html', '/ja/parents.html',

  // Static assets (small)
  '/style.css', '/style-index.css', '/member-preview.js',
  '/manifest.json',
  '/icon-192.webp', '/icon-512.webp', '/favicon.ico',
  '/fonts/Nunito.woff2',

  // ✅ Logo (tiny, critical for UI)
  '/logo-icon.webp',
  '/logo-icon.png'
  // ❌ deliberately NOT precaching large images/characters/videos/PDFs
];

// -------------------------------
// Install: precache critical assets
// -------------------------------
self.addEventListener('install', (event) => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(PRECACHE_NAME).then(async (cache) => {
      for (const url of ASSETS_TO_PRECACHE) {
        try {
          await cache.add(url);
        } catch (err) {
          console.warn('❌ Precache failed:', url, err);
        }
      }
    })
  );
  // Do NOT skipWaiting here (we want "click to refresh" UX)
});

// -------------------------------
// Activate: clean old caches + enable nav preload + claim
// -------------------------------
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate');
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const allow = new Set([PRECACHE_NAME, RUNTIME_NAME, IMAGE_CACHE]);
    await Promise.all(
      keys.map((k) => (!allow.has(k) ? caches.delete(k) : Promise.resolve()))
    );

    // Enable Navigation Preload if available
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }

    await self.clients.claim();
  })());
});

// -------------------------------
// Message: allow page to request immediate activation
// -------------------------------
self.addEventListener('message', (event) => {
  if (event?.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// -------------------------------
// Fetch strategy
// - Navigations: network-first with preload, fallback to cache/offline
// - Images: cache-first with background refresh + limits
// - Other GET: stale-while-revalidate in a runtime cache
// -------------------------------
self.addEventListener('fetch', (event) => {
  // Only handle same-origin
  if (!event.request.url.startsWith(self.location.origin)) return;

  // 1) Page navigations (address bar / reload / SPA deep-links)
  if (event.request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(event));
    return;
  }

  // 2) Images (runtime cache with trimming)
  if (event.request.destination === 'image') {
    event.respondWith(cacheFirstImage(event));
    return;
  }

  // 3) Everything else (GET only): SWR in runtime cache
  if (event.request.method === 'GET') {
    event.respondWith(staleWhileRevalidate(event));
  }
});

// -------------------------------
// Handlers
// -------------------------------
async function handleNavigationRequest(event) {
  try {
    // Use preload if available for faster response
    const preload = await event.preloadResponse;
    if (preload) return preload;

    // Network-first for HTML
    const net = await fetch(event.request);
    // Optionally: put into runtime cache for navigations too
    const runtime = await caches.open(RUNTIME_NAME);
    runtime.put(event.request, net.clone());
    return net;
  } catch (err) {
    // Fallback: cached page or offline shell
    const cache = await caches.open(PRECACHE_NAME);
    const cached = await cache.match(event.request);
    return cached || cache.match('/offline.html');
  }
}

async function cacheFirstImage(event) {
  const cache = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(event.request);

  const fetchPromise = (async () => {
    try {
      const net = await fetch(event.request, { cache: 'no-store' });
      if (net.ok) {
        await cache.put(event.request, net.clone());
        await trimImageCache(cache, IMAGE_MAX_ENTRIES, IMAGE_MAX_AGE_MS);
      }
      return net;
    } catch {
      return cached || (await caches.match('/offline.html'));
    }
  })();

  // Return cached immediately if present; otherwise wait for network
  return cached || fetchPromise;
}

async function staleWhileRevalidate(event) {
  const cache = await caches.open(RUNTIME_NAME);
  const cached = await cache.match(event.request);

  const fetchPromise = (async () => {
    try {
      const net = await fetch(event.request);
      if (net.ok) {
        cache.put(event.request, net.clone());
      }
      return net;
    } catch {
      // If network fails, return whatever we have
      return cached || (await caches.match('/offline.html'));
    }
  })();

  return cached || fetchPromise;
}

// Trim image cache by max age and max entries
async function trimImageCache(cache, maxEntries, maxAgeMs) {
  const now = Date.now();
  const keys = await cache.keys();

  // Age-based pruning
  for (const req of keys) {
    const res = await cache.match(req);
    const dateHeader = res?.headers?.get?.('date');
    const fresh = dateHeader ? (now - new Date(dateHeader).getTime()) < maxAgeMs : true;
    if (!fresh) {
      await cache.delete(req);
    }
  }

  // Count-based pruning (FIFO)
  const keysAfter = await cache.keys();
  while (keysAfter.length > maxEntries) {
    await cache.delete(keysAfter.shift());
  }
}

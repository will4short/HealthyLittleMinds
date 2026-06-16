// ===============================
// Healthy Little Minds Service Worker
// Lean precache (no big media) + runtime image cache
// ===============================

const PRECACHE_NAME = 'hlm-precache-v143'; // bump here for new release/update toast
const RUNTIME_NAME  = 'hlm-runtime-v23';   // leave if strategy unchanged
const IMAGE_CACHE   = 'hlm-img-v17';       // leave if image rules unchanged

const IMAGE_MAX_ENTRIES = 60;                   // limit image count
const IMAGE_MAX_AGE_MS  = 1000 * 60 * 60 * 24 * 30; // ~30 days

// Keep precache small & critical (NO big images/videos/PDFs)
const ASSETS_TO_PRECACHE = [
  // Shell & core pages
  '/', '/index.html', '/home.html', '/dashboard.html', '/interactive-tools.html',
  '/growth-plan.html',
  '/audiobook.html',
  '/bulletin.html', '/inspire_page.html', '/offline.html', '/more-feelings.html',
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
  '/ko/audiobook_section.html', '/ja/audiobook_section.html',
  '/zh-cn/audiobook_section.html', '/zh-tw/audiobook_section.html',
  '/ko/audiobook_section_index.html', '/ja/audiobook_section_index.html',
  '/zh-cn/audiobook_section_index.html', '/zh-tw/audiobook_section_index.html',

  // Bella interactive story (HTML only)
  '/interactive-stories/scene_1_bella_story.html',
  '/interactive-stories/scene2-standup.html',
  '/interactive-stories/scene2-hide.html',
  '/interactive-stories/scene2-pretend.html',
  '/interactive-stories/scene_3_proud.html',
  '/interactive-stories/scene3-runout.html',
  '/interactive-stories/scene3-joke.html',
  '/interactive-stories/scene3-missed.html',
  '/interactive-stories/scene3-bottled.html',
  '/interactive-stories/scene4-share.html',
  '/interactive-stories/scene_5_calm.html',
  '/interactive-stories/scene5-regret.html',
  '/interactive-stories/scene_6_reflection.html',
  '/interactive-stories/scene6-end.html',
  '/ja/interactive-stories/scene_1_bella_story.html',
  '/ja/interactive-stories/scene2-standup.html',
  '/ja/interactive-stories/scene2-hide.html',
  '/ja/interactive-stories/scene2-pretend.html',
  '/ja/interactive-stories/scene_3_proud.html',
  '/ja/interactive-stories/scene3-runout.html',
  '/ja/interactive-stories/scene3-joke.html',
  '/ja/interactive-stories/scene3-missed.html',
  '/ja/interactive-stories/scene3-bottled.html',
  '/ja/interactive-stories/scene4-share.html',
  '/ja/interactive-stories/scene_5_calm.html',
  '/ja/interactive-stories/scene5-regret.html',
  '/ja/interactive-stories/scene_6_reflection.html',
  '/ja/interactive-stories/scene6-end.html',
  '/ko/interactive-stories/scene_1_bella_story.html',
  '/ko/interactive-stories/scene2-standup.html',
  '/ko/interactive-stories/scene2-hide.html',
  '/ko/interactive-stories/scene2-pretend.html',
  '/ko/interactive-stories/scene_3_proud.html',
  '/ko/interactive-stories/scene3-runout.html',
  '/ko/interactive-stories/scene3-joke.html',
  '/ko/interactive-stories/scene3-missed.html',
  '/ko/interactive-stories/scene3-bottled.html',
  '/ko/interactive-stories/scene4-share.html',
  '/ko/interactive-stories/scene_5_calm.html',
  '/ko/interactive-stories/scene5-regret.html',
  '/ko/interactive-stories/scene_6_reflection.html',
  '/ko/interactive-stories/scene6-end.html',
  '/zh-cn/interactive-stories/scene_1_bella_story.html',
  '/zh-cn/interactive-stories/scene2-standup.html',
  '/zh-cn/interactive-stories/scene2-hide.html',
  '/zh-cn/interactive-stories/scene2-pretend.html',
  '/zh-cn/interactive-stories/scene_3_proud.html',
  '/zh-cn/interactive-stories/scene3-runout.html',
  '/zh-cn/interactive-stories/scene3-joke.html',
  '/zh-cn/interactive-stories/scene3-missed.html',
  '/zh-cn/interactive-stories/scene3-bottled.html',
  '/zh-cn/interactive-stories/scene4-share.html',
  '/zh-cn/interactive-stories/scene_5_calm.html',
  '/zh-cn/interactive-stories/scene5-regret.html',
  '/zh-cn/interactive-stories/scene_6_reflection.html',
  '/zh-cn/interactive-stories/scene6-end.html',
  '/zh-tw/interactive-stories/scene_1_bella_story.html',
  '/zh-tw/interactive-stories/scene2-standup.html',
  '/zh-tw/interactive-stories/scene2-hide.html',
  '/zh-tw/interactive-stories/scene2-pretend.html',
  '/zh-tw/interactive-stories/scene_3_proud.html',
  '/zh-tw/interactive-stories/scene3-runout.html',
  '/zh-tw/interactive-stories/scene3-joke.html',
  '/zh-tw/interactive-stories/scene3-missed.html',
  '/zh-tw/interactive-stories/scene3-bottled.html',
  '/zh-tw/interactive-stories/scene4-share.html',
  '/zh-tw/interactive-stories/scene_5_calm.html',
  '/zh-tw/interactive-stories/scene5-regret.html',
  '/zh-tw/interactive-stories/scene_6_reflection.html',
  '/zh-tw/interactive-stories/scene6-end.html',

  // Localized pages (HTML only)
  '/zh-tw/home.html', '/zh-cn/home.html', '/ja/home.html', '/ko/home.html',
  '/ja/index.html', '/ko/index.html', '/zh-tw/index.html', '/zh-cn/index.html',
  '/ja/story-sad.html', '/ko/story-sad.html', '/zh-tw/story-sad.html', '/zh-cn/story-sad.html',
  '/ja/growth-plan.html', '/ko/growth-plan.html', '/zh-tw/growth-plan.html', '/zh-cn/growth-plan.html',
  '/zh-tw/dashboard.html', '/zh-tw/interactive-tools.html', '/zh-tw/parents.html',
  '/zh-tw/parents-tips.html', '/zh-tw/parents-guides.html', '/zh-tw/parents-downloads.html',
  '/zh-cn/dashboard.html', '/zh-cn/interactive-tools.html', '/zh-cn/parents.html',
  '/zh-cn/parents-tips.html', '/zh-cn/parents-guides.html', '/zh-cn/parents-downloads.html',
  '/ko/dashboard.html', '/ko/interactive-tools.html', '/ko/parents.html',
  '/ko/parents-tips.html', '/ko/parents-guides.html', '/ko/parents-downloads.html',
  '/ja/dashboard.html', '/ja/interactive-tools.html', '/ja/parents.html',
  '/ja/parents-tips.html', '/ja/parents-guides.html', '/ja/parents-downloads.html',

  // Static assets (small)
  '/style.css', '/style-index.css', '/feelings-guide.css',
  '/interactive-tools.css',
  '/story-sad.css',
  '/story-sad-player.js',
  '/interactive-stories/bella-story.css',
  '/interactive-stories/bella-story.js',
  '/interactive-stories/bella-story-locales.js',
  '/parents-hub.css',
  '/parents-hub.js',
  '/growth-plan.css',
  '/growth-plan.js',
  '/button-loader.js',
  '/worldcup-theme.js',
  '/member-preview.js',
  '/feeling-support.css',
  '/feeling-support.js',
  '/audiobook.css',
  '/audiobook.js',
  '/localized-home.css',
  '/localized-audiobook.css',
  '/localized-home-polish.js',
  '/shared-language-switcher.css',
  '/shared-language-switcher.js',
  '/manifest.json',
  '/icon-192.webp', '/icon-512.webp', '/favicon.ico',

  // ✅ Logo (tiny, critical for UI)
  '/images/logo-icon.webp',
  '/images/logo-icon.png'
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

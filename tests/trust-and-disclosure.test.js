"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { repoRoot } = require("./helpers/browser-sandbox");

const read = (file) => fs.readFileSync(path.join(repoRoot, file), "utf8");
const exists = (file) => fs.existsSync(path.join(repoRoot, file));
const locales = ["ja", "ko", "zh-cn", "zh-tw"];

function listHtml(dir, out = []) {
  for (const entry of fs.readdirSync(path.join(repoRoot, dir), { withFileTypes: true })) {
    const rel = dir === "." ? entry.name : dir + "/" + entry.name;
    if (entry.isDirectory()) {
      if (["node_modules", ".git", "docs", "scripts", "supabase", "tmp", "tests"].includes(entry.name)) continue;
      listHtml(rel, out);
    } else if (entry.name.endsWith(".html")) out.push(rel);
  }
  return out;
}

// Runs trust-footer.js against a tiny DOM and returns the links it creates.
function renderFooter(lang) {
  const created = [];
  const makeElement = (tag) => {
    const el = { tag, attrs: {}, children: [], textContent: "", className: "" };
    el.setAttribute = (k, v) => { el.attrs[k] = v; };
    el.appendChild = (child) => { el.children.push(child); return child; };
    return el;
  };
  const body = makeElement("body");
  const document = {
    documentElement: { lang },
    head: makeElement("head"),
    body,
    querySelector: () => null,
    createElement: (tag) => { const el = makeElement(tag); created.push(el); return el; }
  };
  const window = {};
  vm.runInNewContext(read("trust-footer.js"), { document, window });
  const nav = body.children[0];
  const anchors = created.filter((el) => el.tag === "a");
  return { nav, anchors, window };
}

test("trust links point to files that exist", () => {
  for (const lang of ["en", ...locales]) {
    const { anchors } = renderFooter(lang);
    assert.equal(anchors.length, 4, lang);
    for (const a of anchors) {
      // Footer links are used from pages in any folder, so they must be root-relative.
      assert.ok(a.href.startsWith("/"), `${lang}: ${a.href} is not root-relative`);
      assert.ok(exists(a.href.slice(1)), `${lang}: ${a.href} does not exist`);
    }
  }
});

test("translated pages say the policy pages are in English and declare it", () => {
  const en = renderFooter("en");
  assert.ok(en.anchors.every((a) => !a.attrs.hreflang), "English labels need no hreflang");
  for (const lang of locales) {
    const { anchors } = renderFooter(lang);
    const english = anchors.filter((a) => ["/contact.html", "/privacy.html", "/terms.html"].includes(a.href));
    assert.equal(english.length, 3, lang);
    for (const a of english) assert.equal(a.attrs.hreflang, "en", `${lang} ${a.href}`);
    // About stays in the visitor's language.
    assert.ok(anchors.find((a) => a.href === `/${lang}/about_me.html`), lang);
  }
});

test("privacy and terms pages are real, titled pages with the footer and skip link", () => {
  for (const page of ["privacy.html", "terms.html"]) {
    const html = read(page);
    assert.match(html, /<html lang="en">/);
    assert.match(html, /<h1>/);
    assert.match(html, /class="legal-skip"/);
    assert.match(html, /<main id="main-content"/);
    assert.match(html, /trust-footer\.js/);
  }
  assert.match(read("terms.html"), /id="refunds"/, "purchase note links to #refunds");
});

test("the key public entry points load the trust footer", () => {
  const pages = ["index", "about_me", "teachers", "will-talks", "worksheets", "interactive-tools", "growth-plan", "contact", "get-started"];
  for (const p of pages) assert.match(read(p + ".html"), /\/trust-footer\.js/, p);
  for (const l of locales) for (const p of ["index", "about_me", "teachers", "interactive-tools"]) {
    assert.match(read(`${l}/${p}.html`), /\/trust-footer\.js/, `${l}/${p}`);
  }
  // Topic and feeling pages get it from their shared scripts.
  assert.match(read("feeling-page-standard.js"), /trust-footer\.js/);
  assert.match(read("resources/resource-language-switcher.js"), /trust-footer\.js/);
  // The account page links the HTML Terms and the Privacy Policy directly.
  assert.match(read("account.html"), /href="terms\.html"/);
  assert.match(read("account.html"), /href="privacy\.html"/);
});

test("Google Analytics is loaded only on the pages the privacy policy lists", () => {
  const gaPages = listHtml(".").filter((f) => read(f).includes("googletagmanager.com")).sort();
  const allowed = ["index.html", "home.html", "parents-tips.html"].flatMap((f) => [f, ...locales.map((l) => `${l}/${f}`)]);
  const documented = new Set(["index.html", ...["home.html", "parents-tips.html"].flatMap((f) => [f, ...locales.map((l) => `${l}/${f}`)])]);
  for (const f of gaPages) assert.ok(documented.has(f) && allowed.includes(f), `${f} loads analytics but is not disclosed in the Privacy Policy`);
  const policy = read("privacy.html");
  assert.match(policy, /Google Analytics 4/);
  assert.match(policy, /English home page/);
  // The Will Talks page loads a Spotify player, which sets cookies; the policy must say so.
  assert.match(policy, /Spotify sets its own cookies/);
});

test("every outside service used by the site's pages is named in the Privacy Policy", () => {
  const policy = read("privacy.html");
  const used = {
    "fonts.googleapis.com": "Google Fonts",
    "cdn.jsdelivr.net": "jsDelivr",
    "formspree.io": "Formspree",
    "payhip.com": "Payhip",
    "elevenlabs.io": "ElevenLabs",
    "heyzine.com": "Heyzine",
    "googletagmanager.com": "Google Analytics"
  };
  const files = listHtml(".").filter((f) => !["privacy.html", "terms.html"].includes(f));
  const corpus = files.map(read).join("\n");
  for (const [host, name] of Object.entries(used)) {
    if (corpus.includes(host)) assert.ok(policy.includes(name), `${host} is used on the site but ${name} is not in the Privacy Policy`);
  }
  // Services that appear only in code or deployment notes.
  for (const name of ["Supabase", "Netlify", "Resend", "Spotify", "YouTube"]) assert.ok(policy.includes(name), name);
});

test("unverified testimonials and unsupported credential claims stay removed", () => {
  for (const f of listHtml(".")) {
    const html = read(f);
    assert.doesNotMatch(html, /Maria T\.|Jake B\.|Aisha R\.|testimonial__rating/, `${f} shows unverified testimonials`);
    assert.doesNotMatch(html, /500\+\s*<\/strong>\s*<span>(Children impacted|受益(儿童|兒童)|함께한 어린이|関わった子どもたち)/, `${f} shows the unsupported 500+ claim`);
  }
  for (const f of ["about_me.html", ...locales.map((l) => `${l}/about_me.html`)]) {
    assert.doesNotMatch(read(f), /Adolescent cases analyzed|青少年案例分析|分析した青年期ケース|분석한 청소년 사례/, f);
    assert.match(read(f), /about-hero__credentials/, `${f} should show the MA is in progress in the hero`);
  }
});

test("the safeguarding note on sensitive topics links to a stable global directory", () => {
  const script = read("resources/resource-page-standard.js");
  assert.match(script, /childhelplineinternational\.org\/helplines\//);
  for (const topic of ["bullying", "grief", "relationships", "substance-use", "trauma"]) assert.ok(script.includes(`"${topic}"`), topic);
  assert.doesNotMatch(read("contact.html") + script, /findahelpline\.com/, "Find a Helpline's terms forbid commercial reference");
  // No page hard-codes a single country's emergency number as if it applied everywhere.
  assert.doesNotMatch(script, /\b(911|999|112|988|000)\b/);
});

test("the English landing page explains the purchase without changing the offer", () => {
  const html = read("index.html");
  assert.match(html, /One payment of US\$10, with no subscription or renewal/);
  assert.match(html, /Checkout is handled by Payhip/);
  assert.match(html, /same email address you used at checkout/);
  assert.match(html, /href="terms\.html#refunds"/);
  // The checkout link itself is unchanged.
  assert.match(html, /https:\/\/payhip\.com\/b\/j6uL8/);
});

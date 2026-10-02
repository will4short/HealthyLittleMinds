"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { repoRoot } = require("./helpers/browser-sandbox");

// Load the worker's top-level helpers without starting it.
const origin = "https://healthylittleminds.club";
const listeners = {};
const networkFetches = [];
const context = vm.createContext({
  self: { addEventListener: (type, fn) => { listeners[type] = fn; }, location: { origin } },
  fetch: async (request, init) => { networkFetches.push({ request, init }); return { status: 200, type: "basic", source: "network" }; },
  URL,
  console
});
vm.runInContext(fs.readFileSync(path.join(repoRoot, "service-worker.js"), "utf8"), context);
const { toHtmlPath, isProtectedHtmlPath, isMediaRequest } = context;

// Dispatches a fake fetch event to the worker and returns what it responded with.
async function dispatchFetch(pathname, { mode = "navigate", preloadResponse } = {}) {
  networkFetches.length = 0;
  let responded;
  listeners.fetch({
    request: { url: origin + pathname, mode, method: "GET", destination: mode === "navigate" ? "document" : "", headers: new Map() },
    preloadResponse: Promise.resolve(preloadResponse),
    respondWith: (value) => { responded = value; }
  });
  return { response: await responded, networkFetches: networkFetches.slice() };
}

function request(destination, headers = {}) {
  return { destination, headers: new Map(Object.entries(headers)) };
}

test("extensionless and folder routes map to their .html files", () => {
  assert.equal(toHtmlPath("/home"), "/home.html");
  assert.equal(toHtmlPath("/home.html"), "/home.html");
  assert.equal(toHtmlPath("/"), "/index.html");
  assert.equal(toHtmlPath("/ja/"), "/ja/index.html");
  assert.equal(toHtmlPath("/ja/parents"), "/ja/parents.html");
  assert.equal(toHtmlPath("/style.css"), "/style.css");
});

test("member routes are protected with or without the extension", () => {
  for (const route of ["/home", "/home.html", "/parents", "/parents.html", "/dashboard", "/ja/home", "/zh-tw/parents.html", "/account"]) {
    assert.equal(isProtectedHtmlPath(route), true, route);
  }
});

test("public routes stay cacheable with or without the extension", () => {
  for (const route of ["/", "/index.html", "/about_me", "/about_me.html", "/teachers", "/ja/", "/ko/index.html", "/offline.html"]) {
    assert.equal(isProtectedHtmlPath(route), false, route);
  }
  assert.equal(isProtectedHtmlPath("/style.css"), false);
});

test("audio, video, PDFs and range requests bypass the worker", () => {
  assert.equal(isMediaRequest(request("audio"), "/audio/ocean.mp3"), true);
  assert.equal(isMediaRequest(request("video"), "/video/trailer.mp4"), true);
  assert.equal(isMediaRequest(request(""), "/worksheets/worksheet1.pdf"), true);
  assert.equal(isMediaRequest(request("", { range: "bytes=0-" }), "/audiobooks/ella/page01.mp3"), true);
  assert.equal(isMediaRequest(request("script"), "/index.js"), false);
  assert.equal(isMediaRequest(request("image"), "/images/logo-icon.webp"), false);
});

test("auth-sensitive navigations reuse the navigation preload instead of fetching twice", async () => {
  const preload = { status: 200, type: "basic", source: "preload" };
  for (const route of ["/home", "/account", "/account.html", "/parents"]) {
    const result = await dispatchFetch(route, { preloadResponse: preload });
    assert.equal(result.response.source, "preload", route);
    assert.equal(result.networkFetches.length, 0, route);
  }
});

test("auth-sensitive requests without a preload go straight to the network, uncached", async () => {
  const result = await dispatchFetch("/home", { preloadResponse: undefined });
  assert.equal(result.response.source, "network");
  assert.equal(result.networkFetches.length, 1);
  assert.equal(result.networkFetches[0].init.cache, "no-store");
});

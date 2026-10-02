"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createSandbox } = require("./helpers/browser-sandbox");

const key = "hlmHomePreviewUntil";
const previewMs = 3 * 60 * 1000;

function preview(stored) {
  const storage = stored === undefined ? {} : { [key]: String(stored) };
  const sandbox = createSandbox({ href: "https://healthylittleminds.club/home.html", storage });
  sandbox.run("member-preview.js");
  return { api: sandbox.window.HLMPreview, storage: sandbox.localStorage };
}

test("member-preview accepts a normal, unexpired preview", () => {
  const { api, storage } = preview(Date.now() + previewMs - 1000);
  assert.equal(api.isActive(), true);
  assert.ok(api.remainingMs() <= previewMs);
  assert.equal(storage.has(key), true);
});

test("member-preview rejects and removes far-future or invalid timestamps", () => {
  for (const stored of [Date.now() + previewMs + 60000, Date.now() + 365 * 24 * 3600 * 1000, 9e15, "Infinity", "abc"]) {
    const { api, storage } = preview(stored);
    assert.equal(api.isActive(), false, String(stored));
    assert.equal(api.remainingMs(), 0, String(stored));
    assert.equal(storage.has(key), false, String(stored));
  }
});

test("member-preview treats expired and missing previews as inactive", () => {
  assert.equal(preview(Date.now() - 1000).api.isActive(), false);
  assert.equal(preview(undefined).api.isActive(), false);
});

// The member home guard reads the same key before any Supabase check.
async function homeGuard(stored) {
  const storage = stored === undefined ? {} : { [key]: String(stored) };
  let accountChecks = 0;
  const sandbox = createSandbox({
    href: "https://healthylittleminds.club/home.html",
    storage,
    extra: {
      HLMAuth: { accessStatus: async () => { accountChecks += 1; return { state: "signed-out", allowed: false }; } }
    }
  });
  sandbox.run("auth/home-transition-guard.js");
  await new Promise((resolve) => setImmediate(resolve));
  return {
    granted: sandbox.document.documentElement.dataset.hlmAccessGranted === "true",
    source: sandbox.document.documentElement.dataset.hlmAccessSource,
    accountChecks,
    redirects: sandbox.replaced,
    stored: sandbox.localStorage.has(key)
  };
}

test("home guard still honours a legitimate short preview", async () => {
  const result = await homeGuard(Date.now() + previewMs - 1000);
  assert.equal(result.granted, true);
  assert.equal(result.source, "preview");
  assert.equal(result.accountChecks, 0);
});

test("home guard ignores a far-future preview and falls through to the account check", async () => {
  const result = await homeGuard(Date.now() + 30 * 24 * 3600 * 1000);
  assert.equal(result.granted, false);
  assert.equal(result.accountChecks, 1);
  assert.equal(result.stored, false);
  assert.deepEqual(result.redirects, ["/account.html?reason=signed-out"]);
});

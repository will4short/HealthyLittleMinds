"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createSandbox } = require("./helpers/browser-sandbox");

// Runs the real reader script and reports which URL it fetched, if any.
async function openReader(search) {
  const fetched = [];
  const sandbox = createSandbox({
    href: "https://healthylittleminds.club/audiobook.html" + search,
    extra: {
      fetch: async (url) => {
        fetched.push(String(url));
        return { ok: false, status: 404, json: async () => ({}) };
      }
    }
  });
  sandbox.run("audiobook.js");
  sandbox.fire("DOMContentLoaded");
  await new Promise((resolve) => setImmediate(resolve));
  return { fetched, errorShown: sandbox.elements.get("readerError").hidden === false };
}

test("loads the default and existing book links", async () => {
  const origin = "https://healthylittleminds.club";
  assert.deepEqual((await openReader("")).fetched, [origin + "/audiobooks/ella/book.json"]);
  assert.deepEqual((await openReader("?book=audiobooks/ella/book.json")).fetched, [origin + "/audiobooks/ella/book.json"]);
  // Used by the localized pages that link to ../audiobook.html.
  assert.deepEqual((await openReader("?book=../audiobooks/ella/book.json")).fetched, [origin + "/audiobooks/ella/book.json"]);
  assert.deepEqual((await openReader("?book=/audiobooks/ella/book.json")).fetched, [origin + "/audiobooks/ella/book.json"]);
});

test("rejects external, malformed and escaping book sources", async () => {
  const rejected = [
    "https://evil.example/audiobooks/book.json",
    "//evil.example/audiobooks/ella/book.json",
    "/\\evil.example/audiobooks/ella/book.json",
    "http://healthylittleminds.club/audiobooks/ella/book.json",
    "javascript:alert(1)",
    "data:application/json,{}",
    "audiobooks/../config/supabase-config.json",
    "audiobooks/%2e%2e/config/x.json",
    "audiobooks/ella%2f..%2f..%2fconfig.json",
    "audiobooks/ella/book.js",
    "config/book.json",
    "/audiobooksx/book.json",
    "http://[::1"
  ];
  for (const book of rejected) {
    const result = await openReader("?book=" + encodeURIComponent(book));
    assert.deepEqual(result.fetched, [], book);
    assert.equal(result.errorShown, true, book);
  }
});

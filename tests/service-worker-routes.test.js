"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { repoRoot } = require("./helpers/browser-sandbox");

// Load the worker's top-level helpers without starting it.
const context = vm.createContext({
  self: { addEventListener() {}, location: { origin: "https://healthylittleminds.club" } },
  URL,
  console
});
vm.runInContext(fs.readFileSync(path.join(repoRoot, "service-worker.js"), "utf8"), context);
const { toHtmlPath, isProtectedHtmlPath, isMediaRequest } = context;

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

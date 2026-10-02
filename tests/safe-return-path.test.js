"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createSandbox } = require("./helpers/browser-sandbox");

function routing() {
  const sandbox = createSandbox({ href: "https://healthylittleminds.club/account.html?reason=signed-out" });
  sandbox.run("auth/locale-routing.js");
  return sandbox.window.HLMRouting;
}

test("keeps legitimate same-origin return paths, including query and hash", () => {
  const { safeReturnPath } = routing();
  assert.equal(safeReturnPath("/home.html"), "/home.html");
  assert.equal(safeReturnPath("/parents"), "/parents");
  assert.equal(safeReturnPath("/ja/home.html?account=1#books"), "/ja/home.html?account=1#books");
  assert.equal(safeReturnPath("/zh-tw/dashboard.html"), "/zh-tw/dashboard.html");
  assert.equal(safeReturnPath("/home.html?q=a%20b"), "/home.html?q=a%20b");
});

test("rejects destinations that leave the site", () => {
  const { safeReturnPath } = routing();
  const attacks = [
    "//evil.example",
    "//evil.example/home.html",
    "/\\evil.example",
    "/\\/evil.example",
    "\\\\evil.example",
    "/\t/evil.example",
    "/\n/evil.example",
    "/%0A/evil.example",
    "https://evil.example/home.html",
    "http://healthylittleminds.club/home.html",
    "javascript:alert(1)",
    "data:text/html,hi",
    "evil.example",
    "home.html",
    " /home.html"
  ];
  for (const value of attacks) {
    const result = safeReturnPath(value);
    if (result) {
      // Anything accepted must still resolve to this site.
      assert.equal(new URL(result, "https://healthylittleminds.club").origin, "https://healthylittleminds.club", value);
    }
  }
  assert.equal(safeReturnPath("//evil.example"), "");
  assert.equal(safeReturnPath("/\\evil.example"), "");
  assert.equal(safeReturnPath("/\t/evil.example"), "");
  assert.equal(safeReturnPath("https://evil.example/home.html"), "");
  assert.equal(safeReturnPath("javascript:alert(1)"), "");
});

test("rejects empty and non-string values", () => {
  const { safeReturnPath } = routing();
  assert.equal(safeReturnPath(""), "");
  assert.equal(safeReturnPath(null), "");
  assert.equal(safeReturnPath(undefined), "");
  assert.equal(safeReturnPath(42), "");
});

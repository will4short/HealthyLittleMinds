"use strict";

// Minimal browser stand-ins for running the site's classic scripts in Node's
// vm module. Nothing here is shipped to the website.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const repoRoot = path.resolve(__dirname, "..", "..");

// An element that accepts any property read, write or method call.
function fakeElement() {
  const store = { style: {}, dataset: {}, hidden: false };
  store.classList = { add() {}, remove() {}, toggle() {}, contains() { return false; } };
  return new Proxy(store, {
    get(target, key) {
      if (key in target) return target[key];
      if (typeof key === "symbol") return undefined;
      return () => fakeElement();
    },
    set(target, key, value) {
      target[key] = value;
      return true;
    }
  });
}

function memoryStorage(initial) {
  const data = new Map(Object.entries(initial || {}));
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: (key) => data.delete(key),
    has: (key) => data.has(key)
  };
}

function createSandbox({ href = "https://healthylittleminds.club/", storage = {}, extra = {} } = {}) {
  const url = new URL(href);
  const listeners = {};
  const elements = new Map();
  const replaced = [];
  const location = {
    href: url.href,
    origin: url.origin,
    protocol: url.protocol,
    pathname: url.pathname,
    search: url.search,
    hash: url.hash,
    replace: (target) => replaced.push(target),
    reload() {}
  };
  const document = {
    documentElement: Object.assign(fakeElement(), { lang: "en" }),
    head: fakeElement(),
    body: fakeElement(),
    addEventListener: (type, fn) => { (listeners[type] = listeners[type] || []).push(fn); },
    getElementById: (id) => {
      if (!elements.has(id)) elements.set(id, fakeElement());
      return elements.get(id);
    },
    querySelector: (selector) => {
      if (!elements.has(selector)) elements.set(selector, fakeElement());
      return elements.get(selector);
    },
    querySelectorAll: () => [],
    createElement: () => fakeElement(),
    createTextNode: () => fakeElement()
  };
  const localStorage = memoryStorage(storage);
  const window = {
    location,
    localStorage,
    document,
    addEventListener() {},
    dispatchEvent() {},
    setTimeout: () => 0,
    clearTimeout() {},
    setInterval: () => 0,
    clearInterval() {},
    matchMedia: () => ({ matches: false }),
    CustomEvent: function CustomEvent(type, init) { this.type = type; this.detail = init && init.detail; }
  };
  Object.assign(window, extra);
  const context = vm.createContext(Object.assign({}, window, {
    window,
    URL,
    URLSearchParams,
    console,
    Promise,
    Audio: function Audio() { return fakeElement(); }
  }));
  window.self = window;

  return {
    window,
    document,
    elements,
    localStorage,
    replaced,
    run(relativePath) {
      const file = path.join(repoRoot, relativePath);
      vm.runInContext(fs.readFileSync(file, "utf8"), context, { filename: file });
    },
    fire(type) {
      (listeners[type] || []).forEach((fn) => fn());
    },
    context
  };
}

module.exports = { createSandbox, repoRoot };

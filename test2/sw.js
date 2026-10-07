// Test 2 lives under the same github.io origin as Test 1, so both service
// workers share one CacheStorage. Only ever touch caches with our own prefix.
const PREFIX = "test2-";
const CACHE = PREFIX + "v6";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return; // let TTS requests pass straight through
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});

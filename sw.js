const CACHE_NAME = 'zpink';
const urlsToCache = [
  '/zpink/',
  '/zpink/index.html',
  '/zpink/manifest.json',
  '/zpink/sw.js',
  '/zpink/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

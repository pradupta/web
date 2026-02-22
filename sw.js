const CACHE_NAME = 'pradupta-cache-v1';
const urlsToCache = [
  '/',
  'app.html',
  'https://pradupta.github.io/web/web/style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

const CACHE = 'saifwiyar-portfolio-v3-1-2';
const scope = self.registration.scope;
const url = (path) => new URL(path.replace(/^\/+/, ''), scope).toString();
const CORE = [
  '',
  'manifest.webmanifest?v=3.1.2',
  'favicon.svg?v=3.1.2',
  'favicon.ico?v=3.1.2',
  'apple-touch-icon.png?v=3.1.2',
  'icons/icon-192.png?v=3.1.2',
  'icons/icon-512.png?v=3.1.2',
  'assets/profile.webp',
].map(url);

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);

  if (requestUrl.pathname.toLowerCase().endsWith('.pdf')) {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(url(''), copy));
          return response;
        })
        .catch(() => caches.match(url(''))),
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(
      (cached) => cached || fetch(event.request).then((response) => {
        if (response.ok && requestUrl.origin === location.origin) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }),
    ),
  );
});

const CACHE_NAME = 'tac-revise-cache-v32';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './notes_extra.js',
  './supabase_client.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          console.log('Nuking cache:', cache);
          return caches.delete(cache);
        })
      );
    }).then(() => {
      return self.registration.unregister();
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Pass through all requests to network
  event.respondWith(fetch(event.request));
});

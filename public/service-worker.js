const CACHE_NAME = 'ruah-v1';

// Al instalar, activa el nuevo SW inmediatamente sin esperar
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Al activar, borra todos los cachés antiguos y toma control
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Network first: siempre intenta la red primero para tener la versión más reciente
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() =>
        caches.match(event.request).then(cached =>
          cached || caches.match('/index.html')
        )
      )
  );
});

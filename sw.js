/* ThuyHuong Digital — service worker
   Cache-first cho toàn bộ cổng game: cài một lần, chơi ngoại tuyến. */
'use strict';
const VERSION = 'thd-v3';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './van-don/index.html',
  './bac-hai-dao/index.html',
  './bac-hai-dao-3d/index.html',
  './lib/three.min.js',
  './bac-hai-dao/assets/do-doc-phuong-hoa.jpg',
  './bac-hai-dao/assets/do-doc-phuong-hoa-chibi.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      // addAll từng cái một để 1 file lỗi (vd ảnh đổi tên) không phá cả bản cài
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;   // không đụng tài nguyên ngoài
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(cached => {
      // cache-first, đồng thời tải bản mới về cập nhật cho lần sau
      const fresh = fetch(e.request).then(res => {
        if (res && res.ok) {
          const clone = res.clone();
          caches.open(VERSION).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});

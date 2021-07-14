const css = ['padding: 0.25rem 1rem;',
'background: #263af3;',
'font: 1rem;',
'color: white;'].join('');

const staticCacheName = 'static-cache-v0.02';
const dynamicCacheName = 'dynamic-cache-v0';

const staticAssets = [
    './',
    './index.html',
    './img/android-chrome-192x192.png',
    './img/android-chrome-512x512.png',
];

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(staticAssets);
    console.log('%c%s', css, 'Service worker has been installed');
});


self.addEventListener('activate', async event => {
    const cachesKeys = await caches.keys();
    console.log('%c%s', css, `cachesKeys: ${cachesKeys}`)
    await Promise.all(
        cachesKeys
            .filter(key => ![staticCacheName, dynamicCacheName].includes(key))
            .map(async key => caches.delete(key))
    );
    console.log('%c%s', css, 'Service worker has been activated');
});

self.addEventListener('fetch', event => {
    console.log(`Trying to fetch: ${event.request.url}`);
    console.log('Fetch event: ', event);
    event.respondWith(checkCache(event.request));
});

async function checkCache(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || checkOnline(req);
}

async function checkOnline(req) {
    const cache = await caches.open(dynamicCacheName);
    try {
        const res = await fetch(req);
        await cache.put(req, res.clone());
        return res;
    } catch (error) {
        const cachedRes = await cache.match(req);
        if (cachedRes) {
            return cachedRes;
        } else if (req.url.indexOf('.html') !== -1) {
            return caches.match('./offline.html');
        } else {
            return caches.match('./images/no-image.jpg');
        }
    }
}
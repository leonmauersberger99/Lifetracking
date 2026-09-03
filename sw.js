// Minimaler Service Worker – nötig, damit Chrome/Android die App als
// installierbare PWA (mit eigenem Icon, ohne Adressleiste) erkennt.
// Er greift bewusst nicht in Netzwerk-Anfragen ein (kein Offline-Caching),
// da die App live mit der Google-Kalender-API sprechen muss.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* bewusst leer: normale Netzwerk-Anfragen durchlassen */ });

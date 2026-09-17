/* 微出国·学 · BC 地产牌照（Trading Services） · 离线缓存。版本＝内容哈希，新发布自动汰旧。 */
const CACHE_PREFIX = 'vv-realtor-';
const VERSION = CACHE_PREFIX + '0b646f2647d5';
const PRECACHE = ["./assets/app.js", "./assets/decks/ch01-legal-foundations.json", "./assets/decks/ch02-resa.json", "./assets/decks/ch03-estates-interests.json", "./assets/decks/ch04-subdivision-title-registration.json", "./assets/decks/ch05-professional-liability.json", "./assets/decks/ch06-tenancies.json", "./assets/decks/ch07-strata-cooperatives.json", "./assets/decks/ch07-strata-rental-age.json", "./assets/decks/ch08-financial-statements.json", "./assets/decks/ch09-professional-ethics.json", "./assets/decks/ch10-contract-law.json", "./assets/decks/ch11-real-estate-contracts.json", "./assets/decks/ch12-agency-law.json", "./assets/decks/ch13-mortgage-finance-intro.json", "./assets/decks/ch14-interest-rates-mortgages.json", "./assets/decks/ch15-mortgage-law.json", "./assets/decks/ch16-mortgage-analysis.json", "./assets/decks/ch17-underwriting-qualification.json", "./assets/decks/ch18-local-government-law.json", "./assets/decks/ch19-home-flipping-tax.json", "./assets/decks/ch19-property-taxes.json", "./assets/decks/ch20-building-construction.json", "./assets/decks/ch21-appraisal-intro.json", "./assets/decks/ch22-direct-comparison-cost.json", "./assets/decks/ch23-income-approach.json", "./assets/decks/ch24-contract-to-completion.json", "./assets/decks/ch25-marketing.json", "./assets/decks/ch26-technology-licensee.json", "./assets/decks.json", "./assets/fsrs.mjs", "./assets/learning-data.mjs", "./assets/manifest.json", "./assets/questions.json", "./assets/search-index.json", "./assets/slides.js", "./assets/style.css", "./docs/ch01-legal-foundations.html", "./docs/ch02-resa.html", "./docs/ch03-estates-interests.html", "./docs/ch04-subdivision-title-registration.html", "./docs/ch05-professional-liability.html", "./docs/ch06-tenancies.html", "./docs/ch07-strata-cooperatives.html", "./docs/ch07-strata-rental-age.html", "./docs/ch08-financial-statements.html", "./docs/ch09-professional-ethics.html", "./docs/ch10-contract-law.html", "./docs/ch11-real-estate-contracts.html", "./docs/ch12-agency-law.html", "./docs/ch13-mortgage-finance-intro.html", "./docs/ch14-interest-rates-mortgages.html", "./docs/ch15-mortgage-law.html", "./docs/ch16-mortgage-analysis.html", "./docs/ch17-underwriting-qualification.html", "./docs/ch18-local-government-law.html", "./docs/ch19-home-flipping-tax.html", "./docs/ch19-property-taxes.html", "./docs/ch20-building-construction.html", "./docs/ch21-appraisal-intro.html", "./docs/ch22-direct-comparison-cost.html", "./docs/ch23-income-approach.html", "./docs/ch24-contract-to-completion.html", "./docs/ch25-marketing.html", "./docs/ch26-technology-licensee.html", "./docs/index.html", "./drill.html", "./exam.html", "./index.html", "./progress.html", "./slides.html", "./assets/img/1dbb352bd7bb.webp", "./assets/img/30866d939847.webp", "./assets/img/3d19ab95a70a.webp", "./assets/img/3e906dfb64a3.webp", "./assets/img/3ed14dcadbf6.webp", "./assets/img/427a1b8e3382.webp", "./assets/img/57b09a97e813.webp", "./assets/img/77ad40bed352.webp", "./assets/img/8b4286176dcc.webp", "./assets/img/8b99e3fdb087.webp", "./assets/img/92e6eb0f51e2.webp", "./assets/img/98f6ce633683.webp", "./assets/img/9f275919edcc.webp", "./assets/img/b13c38dfa484.webp", "./assets/img/bf14dd70c002.webp", "./assets/img/ce0f69929e7c.webp", "./assets/img/ef85548e7cb7.webp", "./assets/img/f1ccb99b8c97.webp", "./manifest.webmanifest"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then(async (c) => {
    for (const u of PRECACHE) { try { await c.add(new Request(u, {cache: 'reload'})); } catch (_) {} }
  }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith(CACHE_PREFIX) && k !== VERSION).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (isHTML) {
    e.respondWith(fetch(req).then((r) => { const cp = r.clone(); caches.open(VERSION).then((c) => c.put(req, cp)); return r; })
      .catch(() => caches.match(req).then((r) => r || caches.match('./index.html'))));
  } else {
    e.respondWith(caches.match(req).then((r) => r || fetch(req).then((res) => {
      const cp = res.clone(); caches.open(VERSION).then((c) => c.put(req, cp)); return res; })));
  }
});

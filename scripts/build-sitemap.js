const fs = require('fs');
const path = require('path');

const BASE_URL = "https://e-sim.nilesupplies.com";

const GUIDE_SLUGS = [
  "best-esim-maldives-2026",
  "bali-indonesia-esim-imei-guide",
  "southeast-asia-regional-esim-comparison",
  "ooredoo-vs-dhiraagu-maldives-tourist-sim",
  "male-airport-via-sim-card-vs-esim",
  "best-esim-maafushi-maldives",
  "best-esim-himmafushi-north-male-atoll",
  "best-esim-thulusdhoo-dhigurah",
  "best-esim-canggu-ubud-bali",
  "best-esim-nusa-penida-uluwatu",
  "telkomsel-vs-xl-axiata-bali-esim",
  "best-esim-singapore-changi-airport",
  "best-esim-kuala-lumpur-langkawi-malaysia",
  "best-esim-phuket-phi-phi-thailand",
  "best-esim-bangkok-chiang-mai",
  "airalo-vs-saily-vs-yesim-asia",
  "airalo-vs-holafly-maldives-unlimited",
  "how-to-install-esim-before-flying",
  "keep-whatsapp-number-with-travel-esim",
  "iphone-16-15-14-esim-setup-guide",
  "samsung-galaxy-s24-s23-esim-guide",
  "fix-slow-esim-data-5g-roaming",
  "how-much-data-needed-for-1-week-trip",
  "esim-hotspot-tethering-rules-asia",
  "maldives-honeymoon-connectivity-checklist"
];

const URLS = [
  { loc: `${BASE_URL}/`, priority: "1.0", changefreq: "daily" },
  { loc: `${BASE_URL}/index.html`, priority: "0.9", changefreq: "weekly" },
  { loc: `${BASE_URL}/about.html`, priority: "0.8", changefreq: "monthly" },
  { loc: `${BASE_URL}/privacy.html`, priority: "0.5", changefreq: "monthly" },
  { loc: `${BASE_URL}/terms.html`, priority: "0.5", changefreq: "monthly" },
  { loc: `${BASE_URL}/affiliate-disclosure.html`, priority: "0.7", changefreq: "monthly" },
  { loc: `${BASE_URL}/guides/index.html`, priority: "0.9", changefreq: "weekly" },
  ...GUIDE_SLUGS.map(slug => ({
    loc: `${BASE_URL}/guides/${slug}.html`,
    priority: "0.85",
    changefreq: "weekly"
  }))
];

const today = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://e-sim.nilesupplies.com/sitemap.xml
`;

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXml);
fs.writeFileSync(path.join(__dirname, '../sitemap.xml'), sitemapXml);
fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt);
fs.writeFileSync(path.join(__dirname, '../robots.txt'), robotsTxt);

console.log(`Generated sitemap.xml with ${URLS.length} URLs and robots.txt`);

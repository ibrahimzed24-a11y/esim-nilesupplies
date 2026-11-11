const fs = require('fs');
const path = require('path');

// Global site metadata
const SITE_URL = "https://e-sim.nilesupplies.com";
const BRAND_NAME = "NileRoam";
const OPERATOR_NAME = "Nile Supplies";
const CONTACT_EMAIL = "contact@nilesupplies.com";

// Common Header HTML
function getHeaderHTML(activeNav = "") {
  return `
    <div class="top-trust-bar">
      <span>⚡ Instant QR Delivery • Tier-1 Local 5G Networks • Zero Roaming Fees</span>
    </div>
    <header class="site-header">
      <div class="header-inner">
        <a href="/" class="brand-logo">
          <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 20h.01"/>
            <path d="M7 20v-4"/>
            <path d="M12 20v-8"/>
            <path d="M17 20V4"/>
            <circle cx="12" cy="12" r="10" stroke-opacity="0.3"/>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
            <path d="M2 12h20"/>
          </svg>
          <div class="brand-text">
            <span class="brand-title">NileRoam</span>
            <span class="brand-sub">by NileSupplies</span>
          </div>
        </a>
        <nav class="main-nav">
          <a href="/#plans" class="${activeNav === 'plans' ? 'active' : ''}">Destinations</a>
          <a href="/#calculator" class="${activeNav === 'calc' ? 'active' : ''}">Data Calculator</a>
          <a href="/#compatibility" class="${activeNav === 'devices' ? 'active' : ''}">Device Check</a>
          <a href="/guides/index.html" class="${activeNav === 'guides' ? 'active' : ''}">Travel Guides</a>
          <a href="/#essentials" class="${activeNav === 'essentials' ? 'active' : ''}">Trip Essentials</a>
          <a href="/about.html" class="${activeNav === 'about' ? 'active' : ''}">About</a>
        </nav>
        <div class="header-cta">
          <a href="/#plans" class="btn-primary-sm">Browse Plans</a>
        </div>
      </div>
    </header>
  `;
}

// Common Footer HTML
function getFooterHTML() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <div class="footer-logo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-cyan-400">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                <path d="M2 12h20"/>
              </svg>
              <span>NileRoam (by Nile Supplies)</span>
            </div>
            <p class="footer-desc">
              Independent digital connectivity and prepaid travel eSIM comparison portal for the Maldives, Bali (Indonesia), Malaysia, Singapore, Thailand, and pan-Asia destinations. Compare Tier-1 local carriers, skip airport SIM kiosks, and stay connected seamlessly.
            </p>
            <div class="footer-contact">
              <span>Official Support:</span>
              <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
            </div>
          </div>
          
          <div class="footer-col">
            <h4>Popular Destinations</h4>
            <ul>
              <li><a href="/#plans-maldives">🇲🇻 Maldives eSIM (Ooredoo / Dhiraagu)</a></li>
              <li><a href="/#plans-indonesia">🇮🇩 Bali & Indonesia eSIM (Telkomsel)</a></li>
              <li><a href="/#plans-malaysia">🇲🇾 Malaysia eSIM (CelcomDigi / Maxis)</a></li>
              <li><a href="/#plans-singapore">🇸🇬 Singapore eSIM (Singtel)</a></li>
              <li><a href="/#plans-thailand">🇹🇭 Thailand eSIM (AIS / TrueMove)</a></li>
              <li><a href="/#plans-asia">🌏 All-Asia 18-Country Regional eSIM</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4>Flagship Guides</h4>
            <ul>
              <li><a href="/guides/best-esim-maldives-2026.html">Best Maldives eSIM 2026</a></li>
              <li><a href="/guides/bali-indonesia-esim-imei-guide.html">Bali eSIM & IMEI Bypass Guide</a></li>
              <li><a href="/guides/southeast-asia-regional-esim-comparison.html">Southeast Asia Regional eSIM Pass</a></li>
              <li><a href="/guides/male-airport-via-sim-card-vs-esim.html">Male Airport SIM vs eSIM</a></li>
              <li><a href="/guides/airalo-vs-saily-vs-yesim-asia.html">Airalo vs Saily vs Yesim</a></li>
              <li><a href="/guides/how-to-install-esim-before-flying.html">How to Install eSIM Before Flying</a></li>
            </ul>
          </div>
          
          <div class="footer-col">
            <h4>Compliance & Legal</h4>
            <ul>
              <li><a href="/about.html">About NileRoam</a></li>
              <li><a href="/privacy.html">Privacy Policy</a></li>
              <li><a href="/terms.html">Terms of Service</a></li>
              <li><a href="/affiliate-disclosure.html">Affiliate Disclosure</a></li>
              <li><a href="/sitemap.xml">XML Sitemap</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="disclosure-box">
            <strong>FTC Affiliate Disclosure:</strong> NileRoam (e-sim.nilesupplies.com) is operated by Nile Supplies. We independently review and compare mobile connectivity providers. When you click links on our site and purchase an eSIM or travel service from Airalo, Saily, Yesim, Travelpayouts, Impact.com, Klook, SafetyWing, or Skyscanner, we may earn an affiliate commission at zero additional cost to you. All prices, promo codes, and network details are verified regularly.
          </div>
          <div class="copyright-row">
            <span>© 2026 Nile Supplies. All rights reserved.</span>
            <span>Operated from contact@nilesupplies.com</span>
          </div>
        </div>
      </div>
    </footer>
    <script src="/js/affiliate-config.js"></script>
  `;
}

// Common Head CSS and Meta
function getHeadTags(title, description, canonicalUrl, jsonLdArray = []) {
  const schemaTags = jsonLdArray.map(item => `
    <script type="application/ld+json">
      ${JSON.stringify(item, null, 2)}
    </script>
  `).join('\n');

  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonicalUrl}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="NileRoam">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/site.css">
    ${schemaTags}
  `;
}

console.log("Helper templates prepared.");

const fs = require('fs');
const path = require('path');

const DESTINATIONS_DATA = [
  {
    key: "maldives",
    name: "Maldives",
    flag: "🇲🇻",
    carrier: "Ooredoo Maldives & Dhiraagu 5G",
    providers: [
      {
        provider: "airalo",
        name: "Airalo (Mahiye)",
        data: "10 GB",
        validity: "30 Days",
        price: "$30.00",
        pricePerGb: "$3.00/GB",
        carrier: "Ooredoo 5G",
        promo: "NEWTOAIRALO15",
        features: ["Native Ooredoo 5G", "Full Hotspot Sharing", "Instant QR Setup"]
      },
      {
        provider: "saily",
        name: "Saily Maldives",
        data: "10 GB",
        validity: "30 Days",
        price: "$27.99",
        pricePerGb: "$2.80/GB",
        carrier: "Tier-1 Partner",
        promo: "NILEROAM10",
        features: ["Nord Security Core", "Auto APN Config", "24/7 Live Support"]
      },
      {
        provider: "yesim",
        name: "Yesim Maldives",
        data: "10 GB",
        validity: "30 Days",
        price: "$29.00",
        pricePerGb: "$2.90/GB",
        carrier: "Multi-Network 5G",
        promo: "YESIM15",
        features: ["Dynamic Fallback", "Pay-as-you-go Option", "No Passport Req."]
      }
    ]
  },
  {
    key: "indonesia",
    name: "Bali & Indonesia",
    flag: "🇮🇩",
    carrier: "Telkomsel 5G (No IMEI Tax)",
    providers: [
      {
        provider: "airalo",
        name: "Airalo (Indotel)",
        data: "10 GB",
        validity: "30 Days",
        price: "$21.00",
        pricePerGb: "$2.10/GB",
        carrier: "Telkomsel 5G",
        promo: "NEWTOAIRALO15",
        features: ["Bypasses Bea Cukai IMEI", "Covers Bali & Gili", "Unthrottled 5G"]
      },
      {
        provider: "saily",
        name: "Saily Indonesia",
        data: "10 GB",
        validity: "30 Days",
        price: "$19.99",
        pricePerGb: "$2.00/GB",
        carrier: "Telkomsel / Indosat",
        promo: "NILEROAM10",
        features: ["Zero Airport Lines", "Secure DNS Tunnel", "Instant Top-Up"]
      },
      {
        provider: "yesim",
        name: "Yesim Indonesia",
        data: "10 GB",
        validity: "30 Days",
        price: "$20.50",
        pricePerGb: "$2.05/GB",
        carrier: "Multi-Carrier 5G",
        promo: "YESIM15",
        features: ["Fast Boat Signal", "Hotspot Enabled", "Flexible Days"]
      }
    ]
  },
  {
    key: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    carrier: "CelcomDigi & Maxis (DNB 5G)",
    providers: [
      {
        provider: "airalo",
        name: "Airalo (Celebcom)",
        data: "10 GB",
        validity: "30 Days",
        price: "$18.00",
        pricePerGb: "$1.80/GB",
        carrier: "Maxis / CelcomDigi",
        promo: "NEWTOAIRALO15",
        features: ["KL & Langkawi 5G", "Grab Friendly", "Tethering Allowed"]
      },
      {
        provider: "saily",
        name: "Saily Malaysia",
        data: "10 GB",
        validity: "30 Days",
        price: "$16.50",
        pricePerGb: "$1.65/GB",
        carrier: "DNB Wholesale 5G",
        promo: "NILEROAM10",
        features: ["Clean Dashboard", "Fast Activation", "No In-Person KYC"]
      },
      {
        provider: "yesim",
        name: "Yesim Malaysia",
        data: "10 GB",
        validity: "30 Days",
        price: "$17.00",
        pricePerGb: "$1.70/GB",
        carrier: "CelcomDigi 5G",
        promo: "YESIM15",
        features: ["Penang to Borneo", "Hotspot Friendly", "Instant QR"]
      }
    ]
  },
  {
    key: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    carrier: "Singtel 5G Standalone",
    providers: [
      {
        provider: "airalo",
        name: "Airalo (Connect Lah)",
        data: "10 GB",
        validity: "30 Days",
        price: "$15.00",
        pricePerGb: "$1.50/GB",
        carrier: "Singtel 5G SA",
        promo: "NEWTOAIRALO15",
        features: ["Changi Airport Ready", "MRT Underground 5G", "Sub-20ms Latency"]
      },
      {
        provider: "saily",
        name: "Saily Singapore",
        data: "10 GB",
        validity: "30 Days",
        price: "$14.00",
        pricePerGb: "$1.40/GB",
        carrier: "Singtel Core",
        promo: "NILEROAM10",
        features: ["Zero Queueing", "Low Battery Drain", "No IMDA KYC Queue"]
      },
      {
        provider: "yesim",
        name: "Yesim Singapore",
        data: "10 GB",
        validity: "30 Days",
        price: "$14.50",
        pricePerGb: "$1.45/GB",
        carrier: "Singtel / StarHub",
        promo: "YESIM15",
        features: ["Multi-Net Roaming", "Marina Bay 5G", "Full Hotspot"]
      }
    ]
  },
  {
    key: "thailand",
    name: "Thailand",
    flag: "🇹🇭",
    carrier: "AIS & TrueMove H 5G",
    providers: [
      {
        provider: "airalo",
        name: "Airalo (Dtac/AIS)",
        data: "15 GB",
        validity: "15 Days",
        price: "$19.95",
        pricePerGb: "$1.33/GB",
        carrier: "AIS 5G",
        promo: "NEWTOAIRALO15",
        features: ["Phuket to Bangkok", "Speedboat Coverage", "BTS Skytrain 5G"]
      },
      {
        provider: "saily",
        name: "Saily Thailand",
        data: "10 GB",
        validity: "30 Days",
        price: "$17.99",
        pricePerGb: "$1.80/GB",
        carrier: "AIS / TrueMove",
        promo: "NILEROAM10",
        features: ["Suvarnabhumi Skip", "Fast Speed", "Nord Security"]
      },
      {
        provider: "yesim",
        name: "Yesim Thailand",
        data: "10 GB",
        validity: "30 Days",
        price: "$18.50",
        pricePerGb: "$1.85/GB",
        carrier: "AIS 5G",
        promo: "YESIM15",
        features: ["Island Hopping 5G", "Full Hotspot", "Instant Setup"]
      }
    ]
  },
  {
    key: "asia",
    name: "All-Asia 18-Country Regional",
    flag: "🌏",
    carrier: "Singtel, AIS, Telkomsel, Maxis & More",
    providers: [
      {
        provider: "airalo",
        name: "Airalo (Asialink)",
        data: "10 GB",
        validity: "30 Days",
        price: "$37.00",
        pricePerGb: "$3.70/GB",
        carrier: "18-Country Tier-1",
        promo: "NEWTOAIRALO15",
        features: ["Seamless Border Handoff", "Single QR Code", "No Data Wastage"]
      },
      {
        provider: "saily",
        name: "Saily Asia Regional",
        data: "10 GB",
        validity: "30 Days",
        price: "$35.99",
        pricePerGb: "$3.60/GB",
        carrier: "Pan-Asia Roaming",
        promo: "NILEROAM10",
        features: ["Auto-Network Switch", "Encrypted Tunnel", "Unrestricted Hotspot"]
      },
      {
        provider: "yesim",
        name: "Yesim Asia Multi-Trip",
        data: "10 GB",
        validity: "30 Days",
        price: "$36.50",
        pricePerGb: "$3.65/GB",
        carrier: "Multi-Carrier",
        promo: "YESIM15",
        features: ["Flexible Day Passes", "High Reliability", "Pay As You Go"]
      }
    ]
  }
];

const DESTINATION_IMAGES = {
  maldives: "/images/destinations/maldives.jpg",
  indonesia: "/images/destinations/bali.jpg",
  malaysia: "/images/destinations/malaysia.jpg",
  singapore: "/images/destinations/singapore.jpg",
  thailand: "/images/destinations/thailand.jpg",
  asia: "/images/destinations/asia-regional.jpg"
};

function buildDestinationBlocks() {
  return DESTINATIONS_DATA.map(d => {
    const cards = d.providers.map((p, idx) => `
      <div class="provider-card ${idx === 0 ? 'featured' : ''}">
        ${idx === 0 ? '<div class="badge-featured">Editor Choice</div>' : ''}
        <div class="provider-brand">
          <span class="provider-name">${p.name}</span>
          <span class="promo-badge">${p.promo}</span>
        </div>
        <div class="card-carrier">📡 Network: <strong>${p.carrier}</strong></div>
        <div class="card-pricing">
          <div class="card-price-main">
            <span class="price-amount">${p.price}</span>
            <span class="price-period">/ ${p.data} (${p.validity})</span>
          </div>
          <span class="price-per-gb-badge">${p.pricePerGb}</span>
        </div>
        <ul class="card-specs">
          ${p.features.map(f => `<li><span style="color: var(--emerald-500); font-weight: 800;">✓</span> ${f}</li>`).join('')}
        </ul>
        <a href="#" data-aff-provider="${p.provider}" data-aff-dest="${d.key}" class="card-cta-btn">
          Get eSIM →
        </a>
      </div>
    `).join('\n');

    const imgUrl = DESTINATION_IMAGES[d.key] || "/images/destinations/maldives.jpg";

    return `
      <div id="plans-${d.key}" class="dest-block" style="overflow: hidden;">
        <div style="position: relative; height: 160px; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem;">
          <img src="${imgUrl}" alt="${d.name} travel eSIM" style="width: 100%; height: 100%; object-fit: cover;">
          <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.45), transparent); display: flex; align-items: center; padding: 1.5rem;">
            <div style="color: #fff;">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                <span style="font-size: 1.5rem;">${d.flag}</span>
                <h3 style="font-size: 1.35rem; font-weight: 800; margin: 0; color: #fff;">${d.name}</h3>
              </div>
              <div style="font-size: 0.75rem; color: #67e8f9; font-weight: 600;">
                <span style="background: rgba(6, 182, 212, 0.2); border: 1px solid rgba(6, 182, 212, 0.4); padding: 2px 8px; border-radius: 4px;">Tier-1 5G: ${d.carrier}</span>
                <span style="margin-left: 0.5rem; color: #cbd5e1;">• Instant QR Delivery</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dest-block-header">
          <span style="font-size: 0.875rem; color: #64748b; font-weight: 600;">Recommended Competing Data Plans:</span>
          <a href="/guides/index.html" style="font-size: 0.875rem; font-weight: 700; color: var(--primary-dark);">
            View ${d.name} Guides & Benchmarks →
          </a>
        </div>
        <div class="comparison-columns">
          ${cards}
        </div>
      </div>
    `;
  }).join('\n');
}

function buildIndexHTML() {
  const destBlocksHtml = buildDestinationBlocks();

  const generalFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an eSIM and how does it work for international travel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An eSIM (embedded SIM) is a digital microchip built into your smartphone that allows you to activate cellular data plans without inserting a physical plastic SIM card. You scan a QR code before departure, and your phone connects to local 5G networks immediately upon landing."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to remove my home physical SIM card?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Modern smartphones support Dual SIM functionality. You can keep your primary home SIM active to receive SMS verification codes and bank 2FA, while setting your travel eSIM as the primary line for mobile cellular data."
        }
      },
      {
        "@type": "Question",
        "name": "How does an eSIM bypass Indonesia's airport IMEI customs tax in Bali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indonesia's Bea Cukai IMEI registration law applies only to devices using local Indonesian physical SIM cards. Travel eSIMs operate via international roaming agreements with Telkomsel, making them 100% legally exempt from customs IMEI declarations."
        }
      },
      {
        "@type": "Question",
        "name": "Can I tether my laptop via Personal Hotspot with these eSIMs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Airalo, Saily, and Yesim all allow unrestricted personal hotspot tethering on their standard packages."
        }
      }
    ]
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NileRoam",
    "legalName": "Nile Supplies",
    "url": "https://e-sim.nilesupplies.com",
    "logo": "https://e-sim.nilesupplies.com/images/logo.png",
    "email": "contact@nilesupplies.com",
    "sameAs": [
      "https://nilesupplies.com",
      "https://github.com/ibrahimzed24-a11y/esim-nilesupplies"
    ]
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NileRoam | Asia & Maldives Travel eSIM Comparison (Airalo vs Saily vs Yesim)</title>
  <meta name="description" content="Compare prepaid travel eSIMs for Maldives, Bali, Malaysia, Singapore, and Thailand. 3 competing providers side-by-side (Airalo, Saily, Yesim) with instant QR delivery, local 5G networks, and zero roaming fees.">
  <link rel="canonical" href="https://e-sim.nilesupplies.com/">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <meta name="google-site-verification" content="rV1RZXThL3QraO9ulwKay-9HBhmmfVKkvUgPwYMDRMQ">
  <meta property="og:title" content="NileRoam | Asia & Maldives Travel eSIM Comparison">
  <meta property="og:description" content="Instant QR delivery on Tier-1 local 5G networks. Compare Airalo, Saily, and Yesim side-by-side for Maldives, Bali, Singapore, Malaysia, and Thailand.">
  <meta property="og:url" content="https://e-sim.nilesupplies.com/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="NileRoam">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/site.css">
  <script nowprocket data-noptimize="1" data-cfasync="false" data-wpfc-render="false" seraph-accel-crit="1" data-no-defer="1" data-cmp-ab="2">
    (function () {
        var script = document.createElement("script");
        script.async = 1;
        script.setAttribute("data-cmp-ab","2");
        script.src = 'https://tp-em.com/NTk5MDQ1.js?t=599045';
        document.head.appendChild(script);
    })();
  </script>
  <script type="application/ld+json">
    ${JSON.stringify(orgJsonLd, null, 2)}
  </script>
  <script type="application/ld+json">
    ${JSON.stringify(generalFaqJsonLd, null, 2)}
  </script>
</head>
<body>
  <!-- TOP TRUST BAR -->
  <div class="top-trust-bar">
    <span>⚡ Instant QR Delivery • Tier-1 Local 5G Networks • Zero Roaming Fees</span>
  </div>

  <!-- REBRANDED NILEROAM HEADER -->
  <header class="site-header">
    <div class="header-inner">
      <a href="/" class="brand-logo" style="display: flex; align-items: center;">
        <img src="/images/logo-horizontal.png" alt="NileRoam by NileSupplies" style="height: 40px; width: auto; object-fit: contain;">
      </a>
      <nav class="main-nav">
        <a href="#plans" class="active">Destinations</a>
        <a href="#calculator">Data Calculator</a>
        <a href="#compatibility">Device Check</a>
        <a href="/guides/index.html">Travel Guides</a>
        <a href="#essentials">Trip Essentials</a>
        <a href="/about.html">About</a>
      </nav>
      <div class="header-cta">
        <a href="#plans" class="btn-primary-sm">Browse Plans</a>
      </div>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="hero-section" style="position: relative; overflow: hidden; padding: 4rem 1rem;">
    <div class="hero-inner" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 3rem; align-items: center; max-width: 1200px; margin: 0 auto;">
      <div style="text-align: left;">
        <div class="hero-pill">
          <span>⚡ Instant QR Delivery • Zero Roaming Surcharges</span>
        </div>
        <h1 class="hero-title" style="text-align: left; font-size: clamp(2.2rem, 5vw, 3.5rem); line-height: 1.15; margin-top: 1rem;">
          Prepaid Travel eSIMs for the Maldives, Bali & Across Asia
        </h1>
        <p class="hero-subtitle" style="text-align: left; margin: 1.5rem 0 2rem 0; font-size: 1.15rem; color: #cbd5e1;">
          Compare <strong>Airalo</strong>, <strong>Saily</strong>, and <strong>Yesim</strong> side-by-side on Tier-1 local carriers: Ooredoo, Dhiraagu, Telkomsel, Singtel, CelcomDigi, and AIS. Install before takeoff, connect the instant you land.
        </p>
        <div class="hero-actions" style="justify-content: flex-start;">
          <a href="#plans" class="btn-hero-primary">Compare All Plans Side-by-Side ↓</a>
          <a href="#calculator" class="btn-hero-outline">Calculate My Data Need</a>
        </div>
      </div>
      <div style="position: relative;">
        <div style="position: relative; border-radius: 1.25rem; overflow: hidden; border: 1px solid rgba(6, 182, 212, 0.3); box-shadow: 0 25px 50px -12px rgba(8, 145, 178, 0.25);">
          <img src="/images/hero-traveler-esim.jpg" alt="Traveler with 5G eSIM connectivity on tropical beach" style="width: 100%; height: 380px; object-fit: cover; display: block;">
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 60%);"></div>
          <div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem; background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(12px); padding: 0.875rem 1rem; border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background: #34d399; box-shadow: 0 0 10px #34d399; display: inline-block;"></span>
              <div>
                <div style="font-size: 0.8125rem; font-weight: 700; color: #fff;">Tier-1 5G Connected</div>
                <div style="font-size: 0.6875rem; color: #94a3b8;">Zero latency • Instant QR Activation</div>
              </div>
            </div>
            <span style="font-size: 0.75rem; font-weight: 800; color: #22d3ee;">5G Fast</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3 COMPETING PROVIDERS SIDE-BY-SIDE PLANS SECTION -->
  <section id="plans" class="section-wrapper">
    <div class="section-header">
      <span class="section-badge">Side-by-Side Comparison</span>
      <h2 class="section-title">Compare Competing eSIM Providers by Destination</h2>
      <p class="section-desc">
        Transparent cost-per-GB breakdowns, carrier network tiers, verified discount promo codes, and unthrottled high-speed connectivity.
      </p>
    </div>

    ${destBlocksHtml}
  </section>

  <!-- INTERACTIVE DATA CALCULATOR -->
  <section id="calculator" class="section-wrapper" style="padding-top: 1rem;">
    <div class="section-header">
      <span class="section-badge">Interactive Planning Tool</span>
      <h2 class="section-title">Trip Data Bandwidth Calculator</h2>
      <p class="section-desc">
        Calculate your exact data consumption so you never run out mid-trip or pay for wasted gigabytes.
      </p>
    </div>

    <div class="calculator-box">
      <div class="calc-grid">
        <div class="calc-inputs">
          <div class="calc-field">
            <label for="calc-dest">Destination</label>
            <select id="calc-dest">
              <option value="maldives">🇲🇻 Maldives (Speedboats & Resorts)</option>
              <option value="indonesia">🇮🇩 Bali & Indonesia (Nomad & Island)</option>
              <option value="malaysia">🇲🇾 Malaysia (KL & Langkawi)</option>
              <option value="singapore">🇸🇬 Singapore (City & MRT)</option>
              <option value="thailand">🇹🇭 Thailand (Bangkok & Islands)</option>
              <option value="asia">🌏 Multi-Country Asia Regional</option>
            </select>
          </div>

          <div class="calc-field">
            <label for="calc-days">Trip Duration: <strong id="calc-days-display">10</strong> Days</label>
            <input type="range" id="calc-days" min="3" max="30" value="10">
          </div>

          <div class="calc-field">
            <label for="calc-profile">Traveler Persona</label>
            <select id="calc-profile">
              <option value="1">Light Explorer (Maps, WhatsApp, Occasional Photos)</option>
              <option value="2" selected>Active Creator (Instagram Reels, TikTok, Daily Photos)</option>
              <option value="3">Digital Nomad (Slack, Zoom Calls, Hotspot Tethering)</option>
            </select>
          </div>

          <div class="calc-field">
            <label for="calc-video">Video Streaming / Social Hours per Day: <strong id="calc-video-display">2</strong> hrs</label>
            <input type="range" id="calc-video" min="0" max="8" value="2">
          </div>
        </div>

        <div class="calc-result-panel">
          <div class="calc-estimate-label">Estimated Data Required</div>
          <div id="calc-total-gb" class="calc-estimate-number">12.5 GB</div>
          <div id="calc-recommendation-text" class="calc-recommendation-text">
            Recommended Plan: <strong>10 GB - 20 GB Package</strong> with 30-day validity.
          </div>
          <div>
            <a id="calc-cta-btn" href="#plans-maldives" class="btn-calc-cta">View Recommended Plan →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LIVE DEVICE COMPATIBILITY CHECK -->
  <section id="compatibility" class="section-wrapper" style="padding-top: 1rem;">
    <div class="section-header">
      <span class="section-badge">Hardware Readiness</span>
      <h2 class="section-title">Live Device Compatibility Checker</h2>
      <p class="section-desc">
        Confirm whether your smartphone supports digital eSIM profiles before booking.
      </p>
    </div>

    <div class="device-check-box">
      <input type="text" id="device-search" class="device-search-input" placeholder="Type your model (e.g. iPhone 15, Galaxy S24, Pixel 8, Xiaomi)...">
      <div id="device-list" class="device-list-grid">
        <!-- Rendered by client JS -->
      </div>
    </div>
  </section>

  <!-- COMPLETE YOUR TRIP ESSENTIALS (UPSELLS) -->
  <section id="essentials" class="section-wrapper" style="padding-top: 1rem;">
    <div class="section-header">
      <span class="section-badge">Travel Logistics</span>
      <h2 class="section-title">Complete Your Trip Essentials</h2>
      <p class="section-desc">
        Pre-booked airport pickups, reliable travel medical protection, and multi-city route fares.
      </p>
    </div>

    <div class="essentials-grid">
      <div class="essential-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div style="height: 180px; overflow: hidden; position: relative;">
          <img src="/images/essentials/airport-transfer.jpg" alt="Speedboat transfers" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(15, 23, 42, 0.9); color: #67e8f9; font-size: 0.6875rem; font-weight: 800; text-transform: uppercase; padding: 3px 8px; border-radius: 9999px;">Klook Partner</span>
        </div>
        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
          <div class="essential-title">Airport & Island Speedboat Transfers</div>
          <div class="essential-desc">
            Skip airport taxi haggling and long queues. Pre-book private Male airport speedboats, Bali Denpasar airport pickups, and inter-island ferry passes.
          </div>
          <a href="#" data-upsell="klookTransfers" class="btn-essential" style="margin-top: auto;">Book Transfers on Klook →</a>
        </div>
      </div>

      <div class="essential-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div style="height: 180px; overflow: hidden; position: relative;">
          <img src="/images/essentials/travel-insurance.jpg" alt="Nomad travel insurance" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(15, 23, 42, 0.9); color: #67e8f9; font-size: 0.6875rem; font-weight: 800; text-transform: uppercase; padding: 3px 8px; border-radius: 9999px;">SafetyWing</span>
        </div>
        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
          <div class="essential-title">Nomad Travel Medical Insurance</div>
          <div class="essential-desc">
            Global medical protection for island travelers and digital nomads. Covers unexpected illnesses, emergency transport, lost luggage, and trip delays.
          </div>
          <a href="#" data-upsell="safetyWing" class="btn-essential" style="margin-top: auto;">Get Nomad Insurance →</a>
        </div>
      </div>

      <div class="essential-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div style="height: 180px; overflow: hidden; position: relative;">
          <img src="/images/essentials/flight-search.jpg" alt="Flight search" style="width: 100%; height: 100%; object-fit: cover;">
          <span style="position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(15, 23, 42, 0.9); color: #67e8f9; font-size: 0.6875rem; font-weight: 800; text-transform: uppercase; padding: 3px 8px; border-radius: 9999px;">Skyscanner</span>
        </div>
        <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
          <div class="essential-title">Multi-City Regional Flights</div>
          <div class="essential-desc">
            Compare multi-stop flight fares between Singapore, Kuala Lumpur, Bangkok, Bali, and Male. Find open-jaw route bargains with zero extra fees.
          </div>
          <a href="#" data-upsell="skyscanner" class="btn-essential" style="margin-top: auto;">Compare Flights on Skyscanner →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- GENERAL FAQ SECTION -->
  <section class="section-wrapper" style="padding-top: 1rem;">
    <div class="section-header">
      <span class="section-badge">Got Questions?</span>
      <h2 class="section-title">Frequently Asked Questions</h2>
    </div>

    <div class="faq-card">
      <div class="faq-q">What is an eSIM and how does it work for international travel?</div>
      <div class="faq-a">An eSIM is a digital microchip built into modern smartphones that allows you to activate cellular data packages without physical SIM cards. You purchase online, scan a QR code, and connect immediately upon landing in Asia.</div>
    </div>

    <div class="faq-card">
      <div class="faq-q">Do I have to remove my home physical SIM card?</div>
      <div class="faq-a">No. You can leave your home SIM active for incoming phone calls and bank SMS two-factor authentication, while designating the travel eSIM exclusively for mobile cellular data roaming.</div>
    </div>

    <div class="faq-card">
      <div class="faq-q">How does an eSIM bypass Indonesia's airport IMEI customs tax in Bali?</div>
      <div class="faq-a">Indonesia's customs (Bea Cukai) IMEI registration rule applies strictly to local physical SIM cards. Travel eSIMs utilize international roaming agreements on Telkomsel, which are completely exempt from IMEI registration and tax declarations.</div>
    </div>

    <div class="faq-card">
      <div class="faq-q">Can I tether my laptop via Personal Hotspot with these eSIMs?</div>
      <div class="faq-a">Yes. Airalo, Saily, and Yesim all permit unrestricted personal hotspot sharing across laptops, tablets, and secondary devices.</div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <div class="footer-logo" style="margin-bottom: 1rem;">
            <img src="/images/logo-horizontal-white.png" alt="NileRoam by Nile Supplies" style="height: 38px; width: auto; object-fit: contain;">
          </div>
          <p class="footer-desc">
            Independent digital connectivity and prepaid travel eSIM comparison portal for the Maldives, Bali (Indonesia), Malaysia, Singapore, Thailand, and pan-Asia destinations. Compare Tier-1 local carriers, skip airport SIM kiosks, and stay connected seamlessly.
          </p>
          <div class="footer-contact">
            <span>Official Support:</span>
            <a href="mailto:contact@nilesupplies.com">contact@nilesupplies.com</a>
          </div>
        </div>
        
        <div class="footer-col">
          <h4>Popular Destinations</h4>
          <ul>
            <li><a href="#plans-maldives">🇲🇻 Maldives eSIM</a></li>
            <li><a href="#plans-indonesia">🇮🇩 Bali & Indonesia eSIM</a></li>
            <li><a href="#plans-malaysia">🇲🇾 Malaysia eSIM</a></li>
            <li><a href="#plans-singapore">🇸🇬 Singapore eSIM</a></li>
            <li><a href="#plans-thailand">🇹🇭 Thailand eSIM</a></li>
            <li><a href="#plans-asia">🌏 Regional Asia eSIM</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Flagship Guides</h4>
          <ul>
            <li><a href="/guides/best-esim-maldives-2026.html">Best Maldives eSIM 2026</a></li>
            <li><a href="/guides/bali-indonesia-esim-imei-guide.html">Bali eSIM & IMEI Guide</a></li>
            <li><a href="/guides/southeast-asia-regional-esim-comparison.html">Southeast Asia Regional eSIM</a></li>
            <li><a href="/guides/male-airport-via-sim-card-vs-esim.html">Male Airport SIM vs eSIM</a></li>
            <li><a href="/guides/airalo-vs-saily-vs-yesim-asia.html">Airalo vs Saily vs Yesim</a></li>
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
          <strong>FTC Affiliate Disclosure:</strong> NileRoam (e-sim.nilesupplies.com) is operated by Nile Supplies. We independently review and compare mobile connectivity providers. When you click links on our site and purchase an eSIM or travel service from Airalo, Saily, Yesim, Travelpayouts, Impact.com, Klook, SafetyWing, or Skyscanner, we may earn an affiliate commission at zero additional cost to you.
        </div>
        <div class="copyright-row">
          <span>© 2026 Nile Supplies. All rights reserved.</span>
          <span>contact@nilesupplies.com</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- CLIENT-SIDE SCRIPTS FOR DATA CALCULATOR & DEVICE CHECK -->
  <script>
    // DEVICE COMPATIBILITY LIST & SEARCH
    const DEVICES = [
      "iPhone 16 / 16 Plus / 16 Pro / 16 Pro Max",
      "iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max",
      "iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max",
      "iPhone 13 / 13 Mini / 13 Pro / 13 Pro Max",
      "iPhone 12 / 12 Mini / 12 Pro / 12 Pro Max",
      "iPhone 11 / 11 Pro / 11 Pro Max",
      "iPhone SE (2nd & 3rd Generation)",
      "iPhone XS / XS Max / XR",
      "Samsung Galaxy S24 / S24+ / S24 Ultra",
      "Samsung Galaxy S23 / S23+ / S23 Ultra",
      "Samsung Galaxy S22 / S22+ / S22 Ultra",
      "Samsung Galaxy S21 / S21+ / S21 Ultra",
      "Samsung Galaxy S20 / S20 5G",
      "Samsung Galaxy Z Fold 6 / 5 / 4 / 3 / 2",
      "Samsung Galaxy Z Flip 6 / 5 / 4 / 3",
      "Google Pixel 9 / 9 Pro / 9 Pro XL / 9 Fold",
      "Google Pixel 8 / 8 Pro / 8a",
      "Google Pixel 7 / 7 Pro / 7a",
      "Google Pixel 6 / 6 Pro / 6a",
      "Xiaomi 14 / 14 Pro / 14 Ultra",
      "Xiaomi 13 / 13 Pro / 13T / 13T Pro",
      "Xiaomi 12T Pro",
      "Oppo Find X7 / X6 / X5 Pro",
      "Oppo Find N3 / N2 Flip",
      "iPad Pro 11-inch & 12.9-inch (Cellular)",
      "iPad Air 4th & 5th Gen (Cellular)"
    ];

    function renderDevices(filter = "") {
      const container = document.getElementById("device-list");
      const filtered = DEVICES.filter(d => d.toLowerCase().includes(filter.toLowerCase()));
      if (filtered.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; padding: 1rem; color: var(--slate-500);">No matching device found. Please verify your settings or contact your phone manufacturer.</div>';
        return;
      }
      container.innerHTML = filtered.map(d => \`
        <div class="device-item">
          <span class="device-icon-check">✓</span>
          <span>\${d}</span>
        </div>
      \`).join('');
    }

    document.getElementById("device-search").addEventListener("input", (e) => {
      renderDevices(e.target.value);
    });
    renderDevices();

    // INTERACTIVE DATA CALCULATOR
    const calcDest = document.getElementById("calc-dest");
    const calcDays = document.getElementById("calc-days");
    const calcDaysDisplay = document.getElementById("calc-days-display");
    const calcProfile = document.getElementById("calc-profile");
    const calcVideo = document.getElementById("calc-video");
    const calcVideoDisplay = document.getElementById("calc-video-display");
    const calcTotalGb = document.getElementById("calc-total-gb");
    const calcRecText = document.getElementById("calc-recommendation-text");
    const calcCtaBtn = document.getElementById("calc-cta-btn");

    function updateCalculator() {
      const days = parseInt(calcDays.value, 10);
      const profileRate = parseFloat(calcProfile.value); // 1, 2, or 3
      const videoHrs = parseInt(calcVideo.value, 10);
      calcDaysDisplay.innerText = days;
      calcVideoDisplay.innerText = videoHrs;

      // Base usage per day based on profile + video hours
      const baseDailyGb = profileRate === 1 ? 0.35 : (profileRate === 2 ? 0.75 : 1.5);
      const videoDailyGb = videoHrs * 0.45;
      const totalGb = (days * (baseDailyGb + videoDailyGb)).toFixed(1);

      calcTotalGb.innerText = \`\${totalGb} GB\`;

      let planRec = "5 GB Package";
      if (totalGb > 15) {
        planRec = "20 GB or Unlimited Package";
      } else if (totalGb > 7) {
        planRec = "10 GB - 15 GB Package";
      }

      const dest = calcDest.value;
      calcRecText.innerHTML = \`Recommended Plan for \${days} days: <strong>\${planRec}</strong>.\`;
      calcCtaBtn.setAttribute("href", \`#plans-\${dest}\`);
    }

    calcDest.addEventListener("change", updateCalculator);
    calcDays.addEventListener("input", updateCalculator);
    calcProfile.addEventListener("change", updateCalculator);
    calcVideo.addEventListener("input", updateCalculator);
    updateCalculator();
  </script>
  <!-- AFFILIATE DYNAMIC RESOLVER SCRIPT -->
  <script src="/js/affiliate-config.js"></script>
</body>
</html>`;
}

const publicIndexPath = path.join(__dirname, '../public/index.html');
const rootIndexPath = path.join(__dirname, '../index.html');

const indexHtml = buildIndexHTML();
fs.writeFileSync(publicIndexPath, indexHtml);
fs.writeFileSync(rootIndexPath, indexHtml);
console.log('Generated: public/index.html and index.html');

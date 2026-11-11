const AFFILIATE_CONFIG = {
  trackingIds: {
    travelpayoutsMarker: "803946",
    travelpayoutsSourceId: "599045",
    impactMediaPartnerId: "8175466",
    impactAiraloId: "8175466",
    impactSailyId: "803946",
    yesimPartnerCode: "803946",
    klookAid: "803946",
    safetyWingRef: "YOUR_SAFETYWING_ID",
    skyscannerId: "803946"
  },
  promoCodes: {
    airalo: "NEWTOAIRALO15",
    saily: "NILEROAM10",
    yesim: "YESIM15",
    amigoEsim: "NILEROAM20",
    esim4s: "NILEROAM15"
  },
  providers: {
    airalo: {
      name: "Airalo",
      commission: "10-12%",
      trackingUrl: "https://airalo.tpk.mx/NCgvmv0k",
      destinations: {
        maldives: "https://airalo.tpk.mx/NCgvmv0k",
        indonesia: "https://airalo.tpk.mx/NCgvmv0k",
        malaysia: "https://airalo.tpk.mx/NCgvmv0k",
        singapore: "https://airalo.tpk.mx/NCgvmv0k",
        thailand: "https://airalo.tpk.mx/NCgvmv0k",
        asia: "https://airalo.tpk.mx/NCgvmv0k"
      }
    },
    saily: {
      name: "Saily",
      commission: "15%",
      trackingUrl: "https://saily.tpk.mx/JTnWj9NU",
      destinations: {
        maldives: "https://saily.tpk.mx/JTnWj9NU",
        indonesia: "https://saily.tpk.mx/JTnWj9NU",
        malaysia: "https://saily.tpk.mx/JTnWj9NU",
        singapore: "https://saily.tpk.mx/JTnWj9NU",
        thailand: "https://saily.tpk.mx/JTnWj9NU",
        asia: "https://saily.tpk.mx/JTnWj9NU"
      }
    },
    yesim: {
      name: "Yesim",
      commission: "18%",
      trackingUrl: "https://yesim.tpk.mx/kxiQAa4j",
      destinations: {
        maldives: "https://yesim.tpk.mx/kxiQAa4j",
        indonesia: "https://yesim.tpk.mx/kxiQAa4j",
        malaysia: "https://yesim.tpk.mx/kxiQAa4j",
        singapore: "https://yesim.tpk.mx/kxiQAa4j",
        thailand: "https://yesim.tpk.mx/kxiQAa4j",
        asia: "https://yesim.tpk.mx/kxiQAa4j"
      }
    }
  },
  upsells: {
    klookTransfers: "https://klook.tpk.mx/zYOaqbX7",
    safetyWing: "https://safetywing.com",
    skyscanner: "https://skyscanner.net"
  },
  highYieldPrograms: {
    skyscanner: {
      name: "Skyscanner",
      category: "Travel search engine",
      cpa: "20% redirect / 40% booking",
      cookieDuration: "30 days",
      url: "https://skyscanner.net"
    },
    pelago: {
      name: "Pelago by Singapore Airlines",
      category: "Experiences & Activities",
      cpa: "3–10%",
      cookieDuration: "30 days",
      url: "https://pelago.co"
    },
    laCompagnie: {
      name: "La Compagnie Airlines",
      category: "Luxury all-business airline",
      cpa: "7%",
      cookieDuration: "30 days",
      url: "https://lacompagnie.com"
    },
    tahitiVillage: {
      name: "Tahiti Village Resort & Spa",
      category: "Hotels & Island Resorts",
      cpa: "10%",
      cookieDuration: "28 days",
      url: "https://tahitivillage.com"
    },
    extraHolidays: {
      name: "Extra Holidays",
      category: "Hotels & Vacation Rentals",
      cpa: "10%",
      cookieDuration: "30 days",
      url: "https://extraholidays.com"
    },
    pointsYeah: {
      name: "PointsYeah",
      category: "Travel rewards & award flight search",
      cpa: "30%",
      cookieDuration: "30 days",
      url: "https://pointsyeah.com"
    },
    tinggly: {
      name: "Tinggly",
      category: "Experience gifting & honeymoon boxes",
      cpa: "10–20%",
      cookieDuration: "30 days",
      url: "https://tinggly.com"
    },
    esim4s: {
      name: "4S eSIM",
      category: "eSIM / mobile connectivity",
      cpa: "25%",
      cookieDuration: "30 days",
      url: "https://4sesim.com"
    },
    amigoEsim: {
      name: "Amigo eSIM",
      category: "eSIM / mobile connectivity",
      cpa: "20–28%",
      cookieDuration: "60 days",
      url: "https://amigoesim.com"
    },
    elifeTransfer: {
      name: "Elife Transfer",
      category: "Airport & intercity transfers",
      cpa: "5–7%",
      cookieDuration: "30 days",
      url: "https://elifetransfer.com"
    },
    easirent: {
      name: "Easirent",
      category: "Airport car rental",
      cpa: "7%",
      cookieDuration: "15 days",
      url: "https://easirent.com"
    },
    backpack: {
      name: "Backpack",
      category: "Nomad travel insurance",
      cpa: "10%",
      cookieDuration: "30 days",
      url: "https://backpack.travel"
    }
  }
};

function getAffiliateLink(providerKey, destinationKey) {
  const provider = AFFILIATE_CONFIG.providers[providerKey];
  if (!provider) return "#";
  if (provider.trackingUrl) return provider.trackingUrl;
  const baseUrl = provider.destinations[destinationKey] || provider.destinations.asia;
  const tpMarker = AFFILIATE_CONFIG.trackingIds.travelpayoutsMarker;
  if (tpMarker && tpMarker !== "YOUR_TP_MARKER_ID") {
    return `https://tp.media/r?marker=${encodeURIComponent(tpMarker)}&u=${encodeURIComponent(baseUrl)}`;
  }
  return baseUrl;
}

function getHighYieldLink(programKey) {
  const program = AFFILIATE_CONFIG.highYieldPrograms[programKey];
  if (!program) return "#";
  const tpMarker = AFFILIATE_CONFIG.trackingIds.travelpayoutsMarker;
  if (tpMarker && tpMarker !== "YOUR_TP_MARKER_ID") {
    return `https://tp.media/r?marker=${encodeURIComponent(tpMarker)}&u=${encodeURIComponent(program.url)}`;
  }
  return program.url;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-aff-provider]").forEach((btn) => {
    const provider = btn.getAttribute("data-aff-provider");
    const destination = btn.getAttribute("data-aff-dest") || "asia";
    btn.setAttribute("href", getAffiliateLink(provider, destination));
    btn.setAttribute("rel", "nofollow sponsored noopener");
    btn.setAttribute("target", "_blank");
  });
  document.querySelectorAll("[data-upsell]").forEach((btn) => {
    const key = btn.getAttribute("data-upsell");
    if (AFFILIATE_CONFIG.upsells[key]) {
      btn.setAttribute("href", AFFILIATE_CONFIG.upsells[key]);
      btn.setAttribute("rel", "nofollow sponsored noopener");
      btn.setAttribute("target", "_blank");
    }
  });
  document.querySelectorAll("[data-high-yield]").forEach((btn) => {
    const key = btn.getAttribute("data-high-yield");
    btn.setAttribute("href", getHighYieldLink(key));
    btn.setAttribute("rel", "nofollow sponsored noopener");
    btn.setAttribute("target", "_blank");
  });
});

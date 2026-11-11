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
    yesim: "YESIM15"
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
});

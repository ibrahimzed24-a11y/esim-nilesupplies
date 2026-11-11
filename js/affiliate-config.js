const AFFILIATE_CONFIG = {
  trackingIds: {
    travelpayoutsMarker: "599045",
    impactAiraloId: "YOUR_IMPACT_AIRALO_ID",
    impactSailyId: "YOUR_IMPACT_SAILY_ID",
    yesimPartnerCode: "YOUR_YESIM_CODE",
    klookAid: "YOUR_KLOOK_AID",
    safetyWingRef: "YOUR_SAFETYWING_ID",
    skyscannerId: "YOUR_SKYSCANNER_ID"
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
      destinations: {
        maldives: "https://airalo.com",
        indonesia: "https://airalo.com",
        malaysia: "https://airalo.com",
        singapore: "https://airalo.com",
        thailand: "https://airalo.com",
        asia: "https://airalo.com"
      }
    },
    saily: {
      name: "Saily",
      commission: "15%",
      destinations: {
        maldives: "https://saily.com",
        indonesia: "https://saily.com",
        malaysia: "https://saily.com",
        singapore: "https://saily.com",
        thailand: "https://saily.com",
        asia: "https://saily.com"
      }
    },
    yesim: {
      name: "Yesim",
      commission: "18%",
      destinations: {
        maldives: "https://yesim.app",
        indonesia: "https://yesim.app",
        malaysia: "https://yesim.app",
        singapore: "https://yesim.app",
        thailand: "https://yesim.app",
        asia: "https://yesim.app"
      }
    }
  },
  upsells: {
    klookTransfers: "https://klook.com",
    safetyWing: "https://safetywing.com",
    skyscanner: "https://skyscanner.net"
  }
};

function getAffiliateLink(providerKey, destinationKey) {
  const provider = AFFILIATE_CONFIG.providers[providerKey];
  if (!provider) return "#";
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

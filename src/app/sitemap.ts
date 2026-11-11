import { MetadataRoute } from "next";

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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://e-sim.nilesupplies.com";

  const guideUrls = GUIDE_SLUGS.map((slug) => ({
    url: `${baseUrl}/guides/${slug}.html`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/index.html`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/affiliate-disclosure.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides/index.html`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...guideUrls,
  ];
}

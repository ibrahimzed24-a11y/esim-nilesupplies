export interface EsimPlan {
  id: string;
  countryCode: string;
  countryName: string;
  flag: string;
  region: "Maldives" | "Southeast Asia" | "East Asia" | "Regional";
  planName: string;
  provider: "Airalo" | "Nomad" | "Maya Mobile";
  localNetwork: string;
  dataGB: number | "Unlimited";
  validityDays: number;
  priceUSD: number;
  speed: "4G / 5G" | "4G LTE";
  hotspot: boolean;
  popular?: boolean;
  affiliateTargetUrl: string;
}

export interface TravelGuide {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  country: string;
  publishedAt: string;
  content: string[];
}

// Live Travelpayouts / Airalo tracking link
const AIRALO_AFFILIATE_BASE =
  process.env.NEXT_PUBLIC_AFFILIATE_BASE_URL || "https://airalo.tpk.mx/NCgvmv0k";

export const OFFICIAL_EMAIL = "contact@nilesupplies.com";
export const OFFICIAL_DOMAIN = "https://e-sim.nilesupplies.com";

export const ESIM_PLANS: EsimPlan[] = [
  // MALDIVES
  {
    id: "mv-10gb",
    countryCode: "MV",
    countryName: "Maldives",
    flag: "🇲🇻",
    region: "Maldives",
    planName: "Mahiye Resort & Local Islands",
    provider: "Airalo",
    localNetwork: "Ooredoo Maldives 5G",
    dataGB: 10,
    validityDays: 30,
    priceUSD: 30.0,
    speed: "4G / 5G",
    hotspot: true,
    popular: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/maldives-esim`,
  },
  {
    id: "mv-20gb",
    countryCode: "MV",
    countryName: "Maldives",
    flag: "🇲🇻",
    region: "Maldives",
    planName: "Mahiye Pro Island Hopper",
    provider: "Airalo",
    localNetwork: "Ooredoo / Dhiraagu",
    dataGB: 20,
    validityDays: 30,
    priceUSD: 50.0,
    speed: "4G / 5G",
    hotspot: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/maldives-esim`,
  },
  // INDONESIA (BALI)
  {
    id: "id-5gb",
    countryCode: "ID",
    countryName: "Indonesia (Bali)",
    flag: "🇮🇩",
    region: "Southeast Asia",
    planName: "Indotel Starter",
    provider: "Airalo",
    localNetwork: "Telkomsel / Indosat",
    dataGB: 5,
    validityDays: 30,
    priceUSD: 13.0,
    speed: "4G / 5G",
    hotspot: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/indonesia-esim`,
  },
  {
    id: "id-10gb",
    countryCode: "ID",
    countryName: "Indonesia (Bali)",
    flag: "🇮🇩",
    region: "Southeast Asia",
    planName: "Indotel Bali Explorer",
    provider: "Airalo",
    localNetwork: "Telkomsel 5G",
    dataGB: 10,
    validityDays: 30,
    priceUSD: 21.0,
    speed: "4G / 5G",
    hotspot: true,
    popular: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/indonesia-esim`,
  },
  {
    id: "id-unlim",
    countryCode: "ID",
    countryName: "Indonesia (Bali)",
    flag: "🇮🇩",
    region: "Southeast Asia",
    planName: "Indotel Nomad Unlimited",
    provider: "Airalo",
    localNetwork: "Telkomsel 5G",
    dataGB: "Unlimited",
    validityDays: 10,
    priceUSD: 35.0,
    speed: "4G / 5G",
    hotspot: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/indonesia-esim`,
  },
  // MALAYSIA
  {
    id: "my-5gb",
    countryCode: "MY",
    countryName: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia",
    planName: "Sambungkan Lite",
    provider: "Airalo",
    localNetwork: "Maxis / CelcomDigi",
    dataGB: 5,
    validityDays: 30,
    priceUSD: 12.5,
    speed: "4G / 5G",
    hotspot: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/malaysia-esim`,
  },
  {
    id: "my-10gb",
    countryCode: "MY",
    countryName: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia",
    planName: "Sambungkan KL & Islands",
    provider: "Airalo",
    localNetwork: "Maxis 5G",
    dataGB: 10,
    validityDays: 30,
    priceUSD: 18.0,
    speed: "4G / 5G",
    hotspot: true,
    popular: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/malaysia-esim`,
  },
  // SINGAPORE
  {
    id: "sg-5gb",
    countryCode: "SG",
    countryName: "Singapore",
    flag: "🇸🇬",
    region: "Southeast Asia",
    planName: "Connect Lah! 5GB",
    provider: "Airalo",
    localNetwork: "Singtel 5G",
    dataGB: 5,
    validityDays: 30,
    priceUSD: 12.0,
    speed: "4G / 5G",
    hotspot: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/singapore-esim`,
  },
  {
    id: "sg-10gb",
    countryCode: "SG",
    countryName: "Singapore",
    flag: "🇸🇬",
    region: "Southeast Asia",
    planName: "Connect Lah! Pro",
    provider: "Airalo",
    localNetwork: "Singtel 5G",
    dataGB: 10,
    validityDays: 30,
    priceUSD: 18.0,
    speed: "4G / 5G",
    hotspot: true,
    popular: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/singapore-esim`,
  },
  // THAILAND
  {
    id: "th-15gb",
    countryCode: "TH",
    countryName: "Thailand",
    flag: "🇹🇭",
    region: "Southeast Asia",
    planName: "dtac Happy Tourist",
    provider: "Airalo",
    localNetwork: "dtac / TrueMove 5G",
    dataGB: 15,
    validityDays: 8,
    priceUSD: 9.9,
    speed: "4G / 5G",
    hotspot: true,
    popular: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/thailand-esim`,
  },
  {
    id: "th-unlim",
    countryCode: "TH",
    countryName: "Thailand",
    flag: "🇹🇭",
    region: "Southeast Asia",
    planName: "Thailand Unlimited Pro",
    provider: "Airalo",
    localNetwork: "AIS / dtac 5G",
    dataGB: "Unlimited",
    validityDays: 15,
    priceUSD: 19.95,
    speed: "4G / 5G",
    hotspot: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/thailand-esim`,
  },
  // REGIONAL ASIA PACK (18 COUNTRIES)
  {
    id: "asia-10gb",
    countryCode: "ASIA",
    countryName: "All Asia (18 Countries)",
    flag: "🌏",
    region: "Regional",
    planName: "Asialink Regional Pass",
    provider: "Airalo",
    localNetwork: "Multi-Carrier 5G Tier-1",
    dataGB: 10,
    validityDays: 30,
    priceUSD: 37.0,
    speed: "4G / 5G",
    hotspot: true,
    popular: true,
    affiliateTargetUrl: `${AIRALO_AFFILIATE_BASE}/asia-esim`,
  },
];

export const COMPATIBLE_DEVICES = [
  "iPhone 16 / 16 Plus / 16 Pro / 16 Pro Max",
  "iPhone 15 / 14 / 13 / 12 / 11 / XS / XR Series",
  "Samsung Galaxy S24 / S23 / S22 / S21 / S20 Series",
  "Samsung Galaxy Z Fold & Z Flip (All Models)",
  "Google Pixel 9 / 8 / 7 / 6 / 5 / 4 Series",
  "Xiaomi 14 / 13 / 12T Pro Series",
  "Oppo Find X5 / X3 Pro & Reno 6 Pro 5G",
  "iPad Pro & iPad Air (Cellular Models 2019+)",
];

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    slug: "best-esim-for-maldives-resorts-and-local-islands",
    title: "Best eSIM for Maldives (2026): Local Islands vs Private Resorts",
    excerpt:
      "Complete connectivity guide covering Male Airport (VIA), Himmafushi, Maafushi, Thulusdhoo, and remote atoll resorts using Ooredoo and Dhiraagu networks.",
    readTime: "4 min read",
    country: "Maldives",
    publishedAt: "2026-11-01",
    content: [
      "When landing at Velana International Airport (MLE) in the Maldives, securing reliable mobile data immediately is crucial for coordinating speedboat transfers, checking resort check-in schedules, and staying connected across atolls.",
      "Why skip the physical SIM queue at Male Airport? Tourist SIM kiosks outside arrivals frequently experience 30 to 45-minute queues when multiple international flights land simultaneously. By installing a Maldives eSIM before departure, your phone connects to Ooredoo Maldives 5G/4G the moment the plane touches down.",
      "Coverage on Local Islands (Himmafushi, Maafushi, Thulusdhoo, Dhigurah): Both Ooredoo and Dhiraagu provide strong 4G LTE and 5G reception across inhabited islands in Kaafu Atoll and Alif Dhaal Atoll. If you are going on snorkeling excursions, manta ray trips, or sandbank tours, your eSIM maintains signal up to several kilometers offshore.",
      "Recommended Plan: For a 7 to 14-day stay, the 10GB or 20GB Mahiye eSIM package gives you ample bandwidth for Google Maps, WhatsApp calls, Instagram reels, and tethering to your laptop.",
    ],
  },
  {
    slug: "bali-indonesia-esim-guide-telkomsel-coverage",
    title: "Bali & Indonesia Tourist eSIM Guide: Avoiding IMEI Registration Hassles",
    excerpt:
      "How travel eSIMs bypass Indonesia's complex airport IMEI registration rules while giving you fast Telkomsel 5G coverage in Canggu, Ubud, Uluwatu, and Nusa Penida.",
    readTime: "5 min read",
    country: "Indonesia",
    publishedAt: "2026-11-03",
    content: [
      "Indonesia requires tourists buying local physical SIM cards to register their phone's IMEI number with customs and wait in long verification lines at Denpasar Ngurah Rai Airport (DPS). Travel roaming eSIMs completely bypass this requirement.",
      "Because international travel eSIMs route through partner agreements with Telkomsel and Indosat, your phone works immediately upon landing in Bali without passport scans or customs paperwork.",
      "Whether you are working remotely from a cafe in Canggu, exploring rice terraces in Ubud, or taking a fast boat to Nusa Penida and the Gili Islands, Telkomsel provides the widest island coverage in Indonesia.",
    ],
  },
  {
    slug: "singapore-malaysia-thailand-multi-country-esim",
    title: "Island Hopping Southeast Asia? Single vs Regional Asialink eSIM Compared",
    excerpt:
      "Planning a multi-stop itinerary through Singapore, Kuala Lumpur, Langkawi, and Phuket? Here is how to calculate whether a regional pass saves you money.",
    readTime: "4 min read",
    country: "Southeast Asia",
    publishedAt: "2026-11-05",
    content: [
      "Many travelers combine a city stopover in Singapore or Kuala Lumpur with beach stays in Langkawi, Phuket, Krabi, or Koh Samui. Swapping SIM cards at every border crossing wastes both money and vacation time.",
      "If you are visiting 2 countries for more than 7 days each, buying two separate country eSIMs (e.g., Singapore $12 + Malaysia $12.50) often gives you more gigabytes per dollar. However, if you are visiting 3 or more Asian countries on a single trip, the Asialink Regional eSIM automatically switches between Singtel, Maxis, AIS, and Telkomsel without touching your settings.",
    ],
  },
];

import { ESIM_PLANS, type EsimPlan } from "@/data/esimData";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Destination {
  slug: string;
  countryCode: string;
  name: string;
  flag: string;
  title: string;
  description: string;
  h1: string;
  airport: string;
  networks: string[];
  intro: string[];
  faqs: FaqItem[];
}

export const DESTINATIONS: Destination[] = [
  {
    slug: "maldives",
    countryCode: "MV",
    name: "Maldives",
    flag: "🇲🇻",
    title: "Maldives eSIM | Ooredoo Maldives 5G Tourist Data from $30",
    description:
      "Buy a Maldives eSIM before you fly. Ooredoo Maldives 5G data at Velana Airport, local islands and resorts. 10GB from $30, hotspot included, instant QR delivery.",
    h1: "Maldives eSIM for Resorts & Local Islands",
    airport: "Velana International Airport (MLE)",
    networks: ["Ooredoo Maldives 5G", "Dhiraagu"],
    intro: [
      "Install your Maldives eSIM before departure and your phone connects to Ooredoo Maldives 5G/4G the moment you land at Velana International Airport (MLE), with no SIM kiosk queue at arrivals.",
      "Both Ooredoo and Dhiraagu provide strong 4G LTE and 5G reception across inhabited islands in Kaafu Atoll and Alif Dhaal Atoll, including Himmafushi, Maafushi, Thulusdhoo and Dhigurah.",
    ],
    faqs: [
      {
        question: "Which network does the Maldives eSIM use?",
        answer:
          "The Mahiye Resort & Local Islands plan runs on Ooredoo Maldives 5G, and the Mahiye Pro Island Hopper plan runs on Ooredoo / Dhiraagu.",
      },
      {
        question: "When should I install my Maldives eSIM?",
        answer:
          "Install it at home before your flight. It connects as soon as you land at Velana International Airport (MLE), so you can coordinate speedboat and seaplane transfers right away.",
      },
      {
        question: "How much data do I need for 7 to 14 days in the Maldives?",
        answer:
          "For a 7 to 14-day stay, the 10GB or 20GB Mahiye package covers Google Maps, WhatsApp calls, Instagram and tethering to a laptop. Use the data calculator to check your own usage.",
      },
      {
        question: "Can I use my Maldives eSIM as a hotspot?",
        answer: "Yes. Both Maldives plans listed on this page allow hotspot / tethering.",
      },
    ],
  },
  {
    slug: "bali",
    countryCode: "ID",
    name: "Bali (Indonesia)",
    flag: "🇮🇩",
    title: "Bali eSIM | Telkomsel 5G Tourist Data, No IMEI Registration",
    description:
      "Get a Bali eSIM on Telkomsel 5G before landing at Denpasar (DPS). No IMEI registration, coverage in Canggu, Ubud, Uluwatu and Nusa Penida. Plans from $13.",
    h1: "Bali & Indonesia eSIM on Telkomsel 5G",
    airport: "Denpasar Ngurah Rai Airport (DPS)",
    networks: ["Telkomsel 5G", "Indosat"],
    intro: [
      "Tourists buying a physical SIM in Indonesia must register their phone's IMEI with customs at Denpasar Ngurah Rai Airport (DPS). A travel eSIM skips this: your phone works the moment you land, with no passport scans or paperwork.",
      "Whether you work from a cafe in Canggu, explore the rice terraces in Ubud, or take a fast boat to Nusa Penida and the Gili Islands, Telkomsel offers the widest island coverage in Indonesia.",
    ],
    faqs: [
      {
        question: "Do I need to register my phone's IMEI to use a Bali eSIM?",
        answer:
          "No. International travel eSIMs connect through partner agreements with Telkomsel and Indosat, so the IMEI registration required for local physical SIM cards does not apply.",
      },
      {
        question: "Which network does the Telkomsel Bali eSIM use?",
        answer:
          "The Indotel Bali Explorer and Nomad Unlimited plans run on Telkomsel 5G. The Starter plan uses Telkomsel / Indosat.",
      },
      {
        question: "Is there an unlimited data eSIM for Bali?",
        answer:
          "Yes. The Indotel Nomad Unlimited plan gives unlimited data for 10 days on Telkomsel 5G for $35.",
      },
      {
        question: "Does the eSIM work in Nusa Penida and the Gili Islands?",
        answer:
          "Telkomsel provides the widest island coverage in Indonesia, including the fast-boat routes to Nusa Penida and the Gili Islands.",
      },
    ],
  },
  {
    slug: "malaysia",
    countryCode: "MY",
    name: "Malaysia",
    flag: "🇲🇾",
    title: "Malaysia eSIM | Maxis 5G Data for Kuala Lumpur & Langkawi",
    description:
      "Malaysia travel eSIM on Maxis and CelcomDigi. Instant data in Kuala Lumpur, Langkawi and Penang. 5GB from $12.50, 10GB from $18, hotspot included.",
    h1: "Malaysia & Langkawi Travel eSIM",
    airport: "Kuala Lumpur International Airport (KUL)",
    networks: ["Maxis 5G", "CelcomDigi"],
    intro: [
      "Combine a city stopover in Kuala Lumpur with beach days in Langkawi without swapping SIM cards. Your Malaysia eSIM connects to Maxis or CelcomDigi on arrival.",
    ],
    faqs: [
      {
        question: "Which network does the Malaysia eSIM use?",
        answer:
          "The Sambungkan Lite plan uses Maxis / CelcomDigi, and the Sambungkan KL & Islands plan runs on Maxis 5G.",
      },
      {
        question: "Is a regional Asia eSIM better if I also visit Singapore or Thailand?",
        answer:
          "For 3 or more Asian countries on one trip, the Asialink Regional eSIM switches networks automatically. For 2 countries over 7 days each, two country eSIMs often give more data per dollar.",
      },
    ],
  },
  {
    slug: "singapore",
    countryCode: "SG",
    name: "Singapore",
    flag: "🇸🇬",
    title: "Singapore eSIM | Singtel 5G Tourist Data from $12",
    description:
      "Singapore travel eSIM on Singtel 5G. Connect at Changi Airport the moment you land. 5GB from $12 or 10GB for $18, valid 30 days, hotspot included.",
    h1: "Singapore 5G Travel eSIM",
    airport: "Singapore Changi Airport (SIN)",
    networks: ["Singtel 5G"],
    intro: [
      "Your Singapore eSIM runs on Singtel 5G, so you are online from the moment you land, whether it is a short city stopover or the start of a Southeast Asia trip.",
    ],
    faqs: [
      {
        question: "Which network does the Singapore eSIM use?",
        answer: "Both Connect Lah! plans run on Singtel 5G.",
      },
      {
        question: "How long is the Singapore eSIM valid?",
        answer: "Both Singapore plans are valid for 30 days from activation.",
      },
    ],
  },
  {
    slug: "thailand",
    countryCode: "TH",
    name: "Thailand",
    flag: "🇹🇭",
    title: "Thailand eSIM | AIS & dtac 5G Unlimited Tourist Data",
    description:
      "Thailand travel eSIM on dtac, TrueMove and AIS 5G. 15GB for 8 days from $9.90 or unlimited data for 15 days at $19.95. Bangkok, Phuket, Krabi, Koh Samui.",
    h1: "Thailand Unlimited Travel eSIM",
    airport: "Bangkok Suvarnabhumi Airport (BKK)",
    networks: ["AIS 5G", "dtac / TrueMove 5G"],
    intro: [
      "From Bangkok to the beaches of Phuket, Krabi and Koh Samui, a Thailand eSIM keeps you online on 5G networks without buying a SIM at the airport.",
    ],
    faqs: [
      {
        question: "Is there an unlimited Thailand eSIM?",
        answer:
          "Yes. The Thailand Unlimited Pro plan gives unlimited data for 15 days on AIS / dtac 5G for $19.95.",
      },
      {
        question: "Which plan is best for a short trip?",
        answer:
          "The dtac Happy Tourist plan gives 15GB for 8 days for $9.90, a good fit for trips of about a week.",
      },
    ],
  },
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: "What is a travel eSIM?",
    answer:
      "A travel eSIM is a digital SIM you install by scanning a QR code. It gives you local mobile data abroad without a physical SIM card and without roaming fees.",
  },
  {
    question: "Is my phone compatible with eSIM?",
    answer:
      "Most recent iPhones, Samsung Galaxy S and Z models, Google Pixel phones and cellular iPads support eSIM. Use the device check on this page to search your model.",
  },
  {
    question: "When will I receive my eSIM?",
    answer:
      "Your eSIM QR code is delivered instantly by email after purchase on the provider's site, so you can install it before your trip.",
  },
  {
    question: "Do you sell the eSIM directly?",
    answer:
      "No. e-sim.nilesupplies.com is an independent comparison platform. You buy on the provider's site (such as Airalo), and we may earn a commission at no extra cost to you.",
  },
  {
    question: "How can I contact you?",
    answer: "Email us at contact@nilesupplies.com.",
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getPlansForCountry(countryCode: string): EsimPlan[] {
  return ESIM_PLANS.filter((p) => p.countryCode === countryCode);
}

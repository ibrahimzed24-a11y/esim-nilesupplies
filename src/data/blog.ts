import type { FaqItem } from "@/data/destinations";

export type BlogCategory = "Maldives" | "Bali & Indonesia" | "Southeast Asia";

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: BlogCategory;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  destinationSlug: string;
  guideSlug: string;
  productName: string;
  planIds: string[];
  intro: string;
  sections: BlogSection[];
  faqs: FaqItem[];
}

const PUBLISHED = "2026-11-11";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "maldives-esim-guide",
    title: "Maldives eSIM: Which Plan to Buy Before You Fly",
    seoTitle: "Maldives eSIM 2026: Best Data Plans for Tourists",
    description:
      "Planning a Maldives trip? Learn how a Maldives eSIM works, how much data you need for resorts and local islands, and how to install it before landing at Velana Airport.",
    category: "Maldives",
    readTime: "6 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "maldives",
    guideSlug: "best-esim-for-maldives-resorts-and-local-islands",
    productName: "Maldives eSIM",
    planIds: ["mv-10gb", "mv-20gb"],
    intro:
      "A Maldives eSIM lets your phone go online the moment you land at Velana International Airport (MLE), without queuing at a SIM kiosk. This guide explains what to buy, how much data to plan for, and what to expect on resorts versus local islands.",
    sections: [
      {
        id: "why-esim",
        heading: "Why use an eSIM in the Maldives",
        paragraphs: [
          "Most of your trip is logistics: speedboat and seaplane timings, resort check-in messages, and ferry schedules. Having data from the arrivals hall makes those easy to handle.",
          "An eSIM is installed by scanning a QR code at home, so there is nothing to swap and no physical card to lose on a boat. Your home number can stay active for calls and SMS verification while the eSIM carries data.",
        ],
      },
      {
        id: "networks",
        heading: "Networks and coverage",
        paragraphs: [
          "The Maldives has two main mobile operators, Ooredoo Maldives and Dhiraagu. Inhabited islands in the central atolls generally have 4G, with 5G available in selected areas. Our main plan uses Ooredoo Maldives, and the larger plan uses Ooredoo / Dhiraagu.",
          "Private resort islands are different: some resorts rely on their own Wi-Fi and have patchy mobile signal on remote atolls. Ask your resort about mobile coverage before you rely on data alone.",
        ],
        bullets: [
          "Local islands: usually the best mobile coverage, ideal for an eSIM.",
          "Resorts near Malé: often good coverage; far atolls can vary.",
          "Excursions: signal can fade quickly beyond sandbanks and reefs.",
        ],
      },
      {
        id: "how-much-data",
        heading: "How much data do you need",
        paragraphs: [
          "For a week of maps, messaging, a few video calls and social media, 10GB is a comfortable starting point. If you tether a laptop, upload lots of photos or stream video, choose 20GB.",
          "Use the data calculator on the destination page to estimate your own usage by activity before you buy.",
        ],
      },
      {
        id: "install",
        heading: "How to install and activate",
        paragraphs: [
          "Buy the plan from the provider, open the confirmation email, and scan the QR code under Settings, then Mobile Data or Cellular, then Add eSIM. Install it on Wi-Fi at home, and follow the provider's instructions on when to switch the line on.",
          "Set the eSIM as your data line and turn data roaming on for it, while keeping roaming off for your home SIM to avoid surprise charges.",
        ],
      },
      {
        id: "tips",
        heading: "Practical tips before you go",
        paragraphs: [
          "Check that your phone is eSIM-compatible and carrier-unlocked. Download offline maps and your booking documents as a backup, and complete the Maldives traveller declaration required before arrival, checking the official site for current rules.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does a Maldives eSIM work on resort islands?",
        answer:
          "It depends on the resort. Many resorts near Malé have mobile coverage, but some remote atolls rely on resort Wi-Fi. Confirm with your resort before relying on mobile data alone.",
      },
      {
        question: "How much does a Maldives eSIM cost?",
        answer:
          "On this site the 10GB Mahiye plan is listed at $30 for 30 days and the 20GB plan at $50. Prices are set by the provider and can change.",
      },
      {
        question: "Can I keep my own number while using the eSIM?",
        answer:
          "Yes, if your phone supports dual SIM. Your home SIM stays active for calls and texts while the eSIM provides data.",
      },
      {
        question: "Where do I buy the eSIM?",
        answer:
          "You buy on the provider's website, such as Airalo, using the plan links on this page. We are an independent comparison site and do not sell eSIMs directly.",
      },
    ],
  },
  {
    slug: "ooredoo-maldives-esim",
    title: "Ooredoo Maldives eSIM: Coverage, Speeds and Setup",
    seoTitle: "Ooredoo Maldives eSIM: Coverage, 5G & Setup Guide",
    description:
      "Everything about the Ooredoo Maldives eSIM: where the network works, what speeds to expect, how it compares with Dhiraagu, and how to set it up before you travel.",
    category: "Maldives",
    readTime: "5 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "maldives",
    guideSlug: "best-esim-for-maldives-resorts-and-local-islands",
    productName: "Ooredoo Maldives eSIM",
    planIds: ["mv-10gb", "mv-20gb"],
    intro:
      "Ooredoo Maldives is one of the two national mobile networks and the carrier behind our main Maldives eSIM plan. Here is where it works, what to expect from it, and how to set it up.",
    sections: [
      {
        id: "about-ooredoo",
        heading: "What is Ooredoo Maldives",
        paragraphs: [
          "Ooredoo Maldives is a mobile operator serving inhabited islands and many resorts across the atolls. Travel eSIMs use partner agreements, so you buy data from an eSIM provider rather than from Ooredoo directly.",
        ],
      },
      {
        id: "coverage",
        heading: "Where it works",
        paragraphs: [
          "Coverage is strongest on inhabited islands and around Malé, Hulhumalé and the airport. Popular local islands such as Himmafushi and Maafushi are covered, and coverage outside towns depends on tower placement.",
          "Open sea between atolls has little or no signal, so do not plan to be reachable on long boat or seaplane transfers.",
        ],
        bullets: [
          "Airport and Malé area: reliable for arrival coordination.",
          "Local islands: 4G in most places, 5G in selected areas.",
          "Remote atolls and open water: patchy to none.",
        ],
      },
      {
        id: "ooredoo-vs-dhiraagu",
        heading: "Ooredoo vs Dhiraagu",
        paragraphs: [
          "Both operators are solid for tourists. Ooredoo is the network on the Mahiye Resort and Local Islands plan, while the Mahiye Pro Island Hopper plan uses Ooredoo / Dhiraagu, which helps when you move between atolls and one network is weaker.",
        ],
      },
      {
        id: "setup",
        heading: "Setting up your Ooredoo eSIM",
        paragraphs: [
          "After purchase you receive a QR code by email. Scan it in your phone's eSIM settings, label the line Maldives, choose it for mobile data, and enable data roaming for that line only.",
          "If you do not see service after landing, restart your phone and check that the correct line is selected for data.",
        ],
      },
      {
        id: "pricing",
        heading: "Plans and pricing",
        paragraphs: [
          "The 10GB plan lists at $30 for 30 days and the 20GB plan at $50, both with hotspot allowed. Check the plan cards below for current details before you buy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Ooredoo Maldives eSIM 5G?",
        answer:
          "The plan is listed as 4G / 5G. Actual 5G depends on your phone and whether you are in a 5G-covered area, which is mostly around populated islands.",
      },
      {
        question: "Do I need to register anything for the Ooredoo eSIM?",
        answer:
          "Travel eSIMs are activated through the provider's QR code. You normally do not need to visit an Ooredoo shop, but follow the provider's instructions.",
      },
      {
        question: "Can I use the Ooredoo eSIM for tethering?",
        answer: "Yes. The Maldives plans listed on this site allow hotspot use.",
      },
      {
        question: "What if there is no signal on my resort island?",
        answer:
          "Some resorts rely on Wi-Fi. Ask the resort about mobile coverage and keep offline maps and documents downloaded.",
      },
    ],
  },
  {
    slug: "bali-esim-guide",
    title: "Bali eSIM: The Practical Guide for First-Time Visitors",
    seoTitle: "Bali eSIM Guide: Best Data Plans for Tourists",
    description:
      "Choosing a Bali eSIM? Compare data sizes, understand coverage in Canggu, Ubud, Uluwatu and Nusa Penida, and learn how to install your eSIM before landing in Denpasar.",
    category: "Bali & Indonesia",
    readTime: "6 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "bali",
    guideSlug: "bali-indonesia-esim-guide-telkomsel-coverage",
    productName: "Bali eSIM",
    planIds: ["id-5gb", "id-10gb", "id-unlim"],
    intro:
      "A Bali eSIM gives you mobile data from the moment you land at Denpasar Ngurah Rai Airport (DPS). This guide covers which plan size fits your trip, where coverage is strongest, and how to avoid common setup mistakes.",
    sections: [
      {
        id: "why-esim",
        heading: "Why a Bali eSIM makes sense",
        paragraphs: [
          "Ride-hailing, maps, translation and WhatsApp are part of daily life in Bali. Getting online straight away also helps you meet your driver at arrivals.",
          "An eSIM avoids hunting for a SIM shop and works alongside your home SIM, so you can still receive bank codes by SMS.",
        ],
      },
      {
        id: "coverage",
        heading: "Coverage across the island",
        paragraphs: [
          "Southern Bali, including Seminyak, Canggu, Uluwatu and Sanur, is generally well covered. Ubud works well in town, but rice terraces and hilly areas can vary. Nusa Penida and the Gili Islands are covered in main areas, with weaker spots inland.",
        ],
        bullets: [
          "Canggu and Seminyak: strong for remote work and video calls.",
          "Ubud: good in town, variable in surrounding valleys.",
          "Nusa Penida: good near the harbours, variable on cliffs and trails.",
        ],
      },
      {
        id: "choosing-plan",
        heading: "Choosing a data size",
        paragraphs: [
          "For a one to two week holiday with maps and social media, 5GB to 10GB is usually enough. Remote workers or heavy streamers should consider the unlimited 10-day plan.",
        ],
        bullets: [
          "5GB for $13: light use, short trips.",
          "10GB for $21: the popular all-round option.",
          "Unlimited for 10 days at $35: heavy use and tethering.",
        ],
      },
      {
        id: "install",
        heading: "Installing before you land",
        paragraphs: [
          "Install the eSIM on Wi-Fi at home or at your departure airport. Choose the Bali line for mobile data, enable roaming for that line, and keep your home SIM data off.",
        ],
      },
      {
        id: "imei",
        heading: "What about IMEI registration",
        paragraphs: [
          "IMEI rules concern phones used with local Indonesian SIM cards. Read our separate explainer on Bali IMEI registration and check the official customs guidance before you travel, since rules can change.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Bali eSIM plan should I buy?",
        answer:
          "For most holidays, the 10GB plan at $21 for 30 days is a good balance. Choose 5GB for light use or the unlimited 10-day plan for heavy use.",
      },
      {
        question: "Does the eSIM work in Ubud and Nusa Penida?",
        answer:
          "Yes in main areas, but signal can vary in hills and remote spots. Download offline maps for hikes and cliff areas.",
      },
      {
        question: "Can I use my phone as a hotspot in Bali?",
        answer: "Yes. The Bali plans listed here allow hotspot sharing.",
      },
      {
        question: "Will my phone number change?",
        answer:
          "No. The eSIM provides data only, and your home number stays on your regular SIM.",
      },
    ],
  },
  {
    slug: "telkomsel-bali-esim",
    title: "Telkomsel Bali eSIM: Coverage, 5G and Which Plan Fits",
    seoTitle: "Telkomsel Bali eSIM: Coverage, 5G & Best Plan",
    description:
      "A clear look at the Telkomsel Bali eSIM: where the network is strongest, 5G availability, how it differs from Indosat, and which Bali plan suits your trip length.",
    category: "Bali & Indonesia",
    readTime: "5 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "bali",
    guideSlug: "bali-indonesia-esim-guide-telkomsel-coverage",
    productName: "Telkomsel Bali eSIM",
    planIds: ["id-10gb", "id-unlim", "id-5gb"],
    intro:
      "Telkomsel is Indonesia's largest mobile network and the carrier behind our two main Bali eSIM plans. Here is what that means for coverage, speed and plan choice.",
    sections: [
      {
        id: "why-telkomsel",
        heading: "Why Telkomsel for Bali",
        paragraphs: [
          "Telkomsel has the widest reach across Indonesian islands, which matters when you leave the south of Bali for Ubud, Amed, Lovina or the boat to Nusa Penida and the Gilis.",
        ],
      },
      {
        id: "coverage",
        heading: "Where Telkomsel is strongest",
        paragraphs: [
          "Expect dependable 4G in tourist areas such as Canggu, Seminyak, Uluwatu, Sanur and Ubud, with 5G in selected urban zones. Rural valleys and cliff trails can drop to weaker signal.",
        ],
      },
      {
        id: "plans",
        heading: "Telkomsel plans compared",
        paragraphs: [
          "The Indotel Bali Explorer plan gives 10GB for 30 days at $21 on Telkomsel 5G. The Nomad Unlimited plan gives unlimited data for 10 days at $35 on Telkomsel 5G. The Starter plan, 5GB for $13, uses Telkomsel / Indosat.",
        ],
        bullets: [
          "Explorer 10GB: best value for 7 to 21 day trips.",
          "Nomad Unlimited: remote work and video-heavy use.",
          "Starter 5GB: short stays and light use.",
        ],
      },
      {
        id: "telkomsel-vs-indosat",
        heading: "Telkomsel or Indosat",
        paragraphs: [
          "Indosat is a capable second network in towns, but Telkomsel is generally preferred for travel beyond the main tourist belt. If you plan day trips to the north or east of Bali, favour a Telkomsel plan.",
        ],
      },
      {
        id: "setup-tips",
        heading: "Setup tips",
        paragraphs: [
          "Install on Wi-Fi, set the eSIM as the data line, and turn on data roaming for it. If service does not start, toggle airplane mode or restart the phone, and make sure network selection is on automatic.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Telkomsel Bali eSIM 5G?",
        answer:
          "The Explorer and Nomad Unlimited plans are listed as Telkomsel 5G. Actual 5G depends on your phone and the area you are in.",
      },
      {
        question: "Is Telkomsel better than Indosat in Bali?",
        answer:
          "Telkomsel generally has wider coverage outside the main tourist areas, which is why we highlight it for travellers who explore beyond the south.",
      },
      {
        question: "How long does the Bali Explorer plan last?",
        answer: "It is valid for 30 days from activation.",
      },
      {
        question: "Does the unlimited plan have a fair-use limit?",
        answer:
          "Unlimited plans may slow speeds after heavy use. Check the provider's terms on the plan page before you buy.",
      },
    ],
  },
  {
    slug: "bali-imei-registration",
    title: "Bali IMEI Registration: What Tourists Need to Know",
    seoTitle: "Bali IMEI Registration: Do Tourists Need It?",
    description:
      "Do you need to register your phone's IMEI for Bali? Understand how Indonesia's IMEI rules work for tourists, where a travel eSIM fits in, and how to check current rules.",
    category: "Bali & Indonesia",
    readTime: "5 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "bali",
    guideSlug: "bali-indonesia-esim-guide-telkomsel-coverage",
    productName: "Bali eSIM",
    planIds: ["id-10gb", "id-5gb", "id-unlim"],
    intro:
      "Indonesia introduced IMEI controls to curb illegal phone imports, and travellers often wonder whether they must register their phones for Bali. This guide explains the basics and where a travel eSIM fits.",
    sections: [
      {
        id: "what-is-imei",
        heading: "What is IMEI registration",
        paragraphs: [
          "Every phone has a unique IMEI number. Indonesia matches IMEIs against a database so that phones bought or brought in outside official channels can be blocked on local networks.",
        ],
      },
      {
        id: "tourists",
        heading: "How the rules affect tourists",
        paragraphs: [
          "The rules mainly concern phones used with a local Indonesian SIM card. Visitors who intend to use a local SIM for an extended period may need to declare their device through the customs process. Procedures and time limits change, so always confirm on the official customs website before you fly.",
        ],
      },
      {
        id: "travel-esim",
        heading: "Where a travel eSIM fits",
        paragraphs: [
          "Travel eSIMs connect through partner and roaming agreements, so providers describe them as not requiring the local IMEI registration steps used for local SIM cards. This is the approach we describe across our Bali pages, but you should read the provider's terms for the plan you choose.",
        ],
      },
      {
        id: "checklist",
        heading: "Pre-flight checklist",
        paragraphs: [
          "Keep this short list handy before you board your flight to Denpasar.",
        ],
        bullets: [
          "Confirm your phone supports eSIM and is carrier-unlocked.",
          "Install your travel eSIM before departure.",
          "Check the official Indonesian customs guidance for visitors.",
          "Save your phone's IMEI (dial *#06#) in case it is requested.",
        ],
      },
      {
        id: "if-asked",
        heading: "If you are asked at the airport",
        paragraphs: [
          "Follow the instructions of customs staff and have your passport and IMEI ready. If you plan to buy a local SIM instead, ask the vendor how registration works for your phone.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need IMEI registration for a Bali eSIM?",
        answer:
          "Travel eSIM providers describe their plans as working without the local IMEI registration used for local SIM cards. Rules change, so check the official customs site and your provider's terms.",
      },
      {
        question: "How do I find my phone's IMEI?",
        answer:
          "Dial *#06# on your phone or look in Settings under About. Save it before you travel.",
      },
      {
        question: "Does IMEI registration apply to local SIM cards?",
        answer:
          "Yes. It mostly concerns devices used with local Indonesian SIM cards, which is why many tourists prefer a travel eSIM.",
      },
      {
        question: "Where can I verify the latest rules?",
        answer:
          "Use the official Indonesian customs authority website and your airline or embassy travel advice. We are a comparison site and do not give legal advice.",
      },
    ],
  },
  {
    slug: "himmafushi-esim",
    title: "Himmafushi eSIM: Staying Connected on the Surf Island",
    seoTitle: "Himmafushi eSIM: Data & Coverage for Travellers",
    description:
      "Heading to Himmafushi? See how a Maldives eSIM works on this local island near Malé airport, what coverage to expect, and which data plan suits a surf or budget stay.",
    category: "Maldives",
    readTime: "4 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "maldives",
    guideSlug: "best-esim-for-maldives-resorts-and-local-islands",
    productName: "Maldives eSIM for Himmafushi",
    planIds: ["mv-10gb", "mv-20gb"],
    intro:
      "Himmafushi is a small local island in the North Malé Atoll, popular with surfers and budget travellers because of its short transfer from the airport. A Maldives eSIM keeps you online from the arrivals hall to your guesthouse.",
    sections: [
      {
        id: "about",
        heading: "About Himmafushi",
        paragraphs: [
          "Himmafushi is close to Velana International Airport and is known for nearby surf breaks and guesthouse stays. Transfers are usually by speedboat or local ferry, and timetables can vary by day.",
        ],
      },
      {
        id: "coverage",
        heading: "Mobile coverage on Himmafushi",
        paragraphs: [
          "As an inhabited island, Himmafushi is covered by the Maldives mobile networks, so an Ooredoo-based eSIM works in the village and around the guesthouses. Signal drops once you head out on boat trips to surf spots or sandbanks.",
        ],
        bullets: [
          "On the island: normally reliable 4G.",
          "At sea or on sandbanks: expect weak or no signal.",
          "Guesthouse Wi-Fi: useful, but speeds vary.",
        ],
      },
      {
        id: "data-needs",
        heading: "How much data to pack",
        paragraphs: [
          "A typical surf or budget trip involves maps, messaging, tide and swell apps, and social media. 10GB is enough for most one to two week stays. Choose 20GB if you work remotely or share a hotspot with friends.",
        ],
      },
      {
        id: "arrival",
        heading: "Arrival day checklist",
        paragraphs: [
          "Install the eSIM at home, enable roaming for that line, and message your guesthouse when you land so they can arrange the boat. Keep screenshots of your booking in case signal dips.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does an eSIM work on Himmafushi?",
        answer:
          "Yes. Himmafushi is an inhabited island covered by the national mobile networks, and a Maldives eSIM works there like on other local islands.",
      },
      {
        question: "Which plan is best for a week on Himmafushi?",
        answer:
          "The 10GB plan at $30 for 30 days covers most travellers. Choose 20GB at $50 for heavy use.",
      },
      {
        question: "Is there Wi-Fi at Himmafushi guesthouses?",
        answer:
          "Many guesthouses offer Wi-Fi, but speed varies. An eSIM gives you a dependable backup.",
      },
      {
        question: "Can I buy a SIM at the airport instead?",
        answer:
          "Yes, tourist SIMs are sold at the airport, but an eSIM lets you skip the queue and connect on arrival.",
      },
    ],
  },
  {
    slug: "maafushi-esim",
    title: "Maafushi eSIM: Data, Coverage and Island Tips",
    seoTitle: "Maafushi eSIM: Local Island Data, Coverage & Tips",
    description:
      "Visiting Maafushi? Find out how a Maldives eSIM performs on this popular local island, how much data you need for excursions, and how to set it up before arrival.",
    category: "Maldives",
    readTime: "4 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "maldives",
    guideSlug: "best-esim-for-maldives-resorts-and-local-islands",
    productName: "Maldives eSIM for Maafushi",
    planIds: ["mv-10gb", "mv-20gb"],
    intro:
      "Maafushi is one of the best-known local islands in the Maldives, with guesthouses, cafes and daily excursions. A Maldives eSIM gives you reliable data for transfers, bookings and sharing photos.",
    sections: [
      {
        id: "about",
        heading: "About Maafushi",
        paragraphs: [
          "Maafushi sits in the South Malé Atoll and is reached by speedboat or public ferry from the Malé area. It is a popular base for snorkelling, sandbank trips and dolphin cruises.",
        ],
      },
      {
        id: "coverage",
        heading: "What coverage to expect",
        paragraphs: [
          "The island has mobile coverage from the national operators, so an Ooredoo-based eSIM works around the village and beaches. During excursions, signal depends on distance from the island.",
        ],
        bullets: [
          "Village and beach: good 4G in most spots.",
          "Boat trips: reliable near the island, weaker further out.",
          "Ferry transfers: signal can drop between islands.",
        ],
      },
      {
        id: "plan",
        heading: "Picking a plan",
        paragraphs: [
          "Most visitors stay three to ten days. The 10GB plan fits maps, messaging and social posts. If you edit video or tether a laptop, the 20GB plan is safer.",
        ],
      },
      {
        id: "tips",
        heading: "Tips for the trip",
        paragraphs: [
          "Download offline maps, save ferry and speedboat times, and confirm your guesthouse pickup before leaving Malé. Keep your phone in a dry pouch on excursions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Maafushi mobile signal good enough for video calls?",
        answer:
          "On the island, 4G is generally suitable for video calls. Quality can vary by location and time of day.",
      },
      {
        question: "Do I need a separate eSIM for Maafushi?",
        answer:
          "No. A Maldives eSIM covers all inhabited islands on the Ooredoo or Dhiraagu networks, including Maafushi.",
      },
      {
        question: "How many days is the Maldives eSIM valid?",
        answer: "Both listed Maldives plans are valid for 30 days from activation.",
      },
      {
        question: "Can I share data with my travel partner?",
        answer: "Yes. The plans allow hotspot, so you can share data from one phone.",
      },
    ],
  },
  {
    slug: "malaysia-esim",
    title: "Malaysia eSIM: Data for Kuala Lumpur, Penang and Langkawi",
    seoTitle: "Malaysia eSIM Guide: KL, Penang & Langkawi Data",
    description:
      "Compare Malaysia eSIM options on Maxis and CelcomDigi. Learn what coverage to expect in Kuala Lumpur, Penang and Langkawi and how much data a short trip needs.",
    category: "Southeast Asia",
    readTime: "5 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "malaysia",
    guideSlug: "singapore-malaysia-thailand-multi-country-esim",
    productName: "Malaysia eSIM",
    planIds: ["my-5gb", "my-10gb"],
    intro:
      "A Malaysia eSIM puts you online as you land at Kuala Lumpur International Airport (KUL) and keeps working through city days and island breaks. Here is how to choose a plan and what to expect.",
    sections: [
      {
        id: "why",
        heading: "Why use a Malaysia eSIM",
        paragraphs: [
          "Ride-hailing, food delivery, maps and translation all rely on mobile data in Malaysian cities. An eSIM gets you connected without a SIM counter and lets you keep your home number active.",
        ],
      },
      {
        id: "coverage",
        heading: "Coverage by destination",
        paragraphs: [
          "Kuala Lumpur and Penang have strong coverage on the main networks. Langkawi is covered in the main tourist areas, while highlands and rainforest can have gaps.",
        ],
        bullets: [
          "Kuala Lumpur: strong 4G and 5G in the centre.",
          "Penang and Langkawi: good in towns and beaches.",
          "Highlands and jungle: variable signal.",
        ],
      },
      {
        id: "plans",
        heading: "Plan options",
        paragraphs: [
          "The Sambungkan Lite plan offers 5GB for 30 days at $12.50 on Maxis / CelcomDigi. The Sambungkan KL and Islands plan offers 10GB for 30 days at $18 on Maxis 5G, with hotspot included.",
        ],
      },
      {
        id: "multi-country",
        heading: "Visiting more than one country",
        paragraphs: [
          "If Malaysia is one stop among Singapore and Thailand, compare a single country eSIM with a regional pass. Our multi-country guide explains when each option saves money.",
        ],
      },
      {
        id: "tips",
        heading: "Practical tips",
        paragraphs: [
          "Install the eSIM before you fly, keep your home SIM for calls, and carry a power bank. Check entry requirements for your nationality on official government sites.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which network does the Malaysia eSIM use?",
        answer:
          "The Lite plan uses Maxis / CelcomDigi and the KL and Islands plan runs on Maxis 5G.",
      },
      {
        question: "Does the Malaysia eSIM work in Langkawi?",
        answer:
          "Yes, in main tourist areas. Signal can weaken in remote or forested parts of the island.",
      },
      {
        question: "Can I use the eSIM in Singapore too?",
        answer:
          "Country eSIMs are for one country. For Singapore, use a Singapore plan or a regional pass.",
      },
      {
        question: "Is hotspot allowed?",
        answer: "Yes, both listed Malaysia plans allow hotspot.",
      },
    ],
  },
  {
    slug: "singapore-esim",
    title: "Singapore eSIM: Singtel 5G for Layovers and City Breaks",
    seoTitle: "Singapore eSIM: Singtel 5G Data for Tourists",
    description:
      "Find the right Singapore eSIM for a layover or city break. Learn about Singtel 5G coverage at Changi Airport and across the city, plus plan sizes and setup tips.",
    category: "Southeast Asia",
    readTime: "4 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "singapore",
    guideSlug: "singapore-malaysia-thailand-multi-country-esim",
    productName: "Singapore eSIM",
    planIds: ["sg-5gb", "sg-10gb"],
    intro:
      "Singapore is compact, well connected and easy to explore, and an eSIM makes the first hour effortless. Here is what you need to know about Singtel 5G, plan sizes and setup.",
    sections: [
      {
        id: "why",
        heading: "Why an eSIM suits Singapore",
        paragraphs: [
          "Transit, maps, ride-hailing and contactless payments all work better with data. If you only transit through Changi Airport, an eSIM lets you go online without buying a physical SIM.",
        ],
      },
      {
        id: "coverage",
        heading: "Coverage and speeds",
        paragraphs: [
          "Singapore has dense mobile coverage across the island, including the MRT network and major attractions. Our plans use Singtel 5G, so supported phones can reach 5G in covered areas.",
        ],
      },
      {
        id: "plans",
        heading: "Which plan to choose",
        paragraphs: [
          "Connect Lah! 5GB costs $12 for 30 days, which suits a short city break. Connect Lah! Pro with 10GB costs $18 and is better for longer stays or hotspot sharing.",
        ],
        bullets: [
          "Layover or two days: 5GB is plenty.",
          "One week with maps and video: 10GB.",
          "Onward to Malaysia or Thailand: consider a regional pass.",
        ],
      },
      {
        id: "setup",
        heading: "Setup tips",
        paragraphs: [
          "Install while you have Wi-Fi, set the eSIM for data, and enable roaming on that line. Complete Singapore's arrival requirements on the official government site before you fly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which network does the Singapore eSIM use?",
        answer: "Both Connect Lah! plans run on Singtel 5G.",
      },
      {
        question: "How long is the Singapore eSIM valid?",
        answer: "Both plans are valid for 30 days from activation.",
      },
      {
        question: "Is 5GB enough for a few days?",
        answer:
          "For maps, messaging and social media over a short stay, 5GB is usually enough. Choose 10GB if you stream or tether.",
      },
      {
        question: "Does the eSIM work at Changi Airport?",
        answer:
          "Yes, Changi Airport is covered by mobile networks, so the eSIM can connect on arrival.",
      },
    ],
  },
  {
    slug: "thailand-esim",
    title: "Thailand eSIM: Data for Bangkok, Phuket and the Islands",
    seoTitle: "Thailand eSIM Guide: Bangkok, Phuket & Islands",
    description:
      "Looking for a Thailand eSIM? Compare short-trip data and unlimited plans on dtac, TrueMove and AIS, and learn what to expect in Bangkok, Phuket, Krabi and Koh Samui.",
    category: "Southeast Asia",
    readTime: "5 min read",
    publishedAt: PUBLISHED,
    updatedAt: PUBLISHED,
    destinationSlug: "thailand",
    guideSlug: "singapore-malaysia-thailand-multi-country-esim",
    productName: "Thailand eSIM",
    planIds: ["th-15gb", "th-unlim"],
    intro:
      "A Thailand eSIM keeps you connected from Bangkok's airports to the beaches of Phuket, Krabi and Koh Samui. Here is how to pick between a short-trip data plan and an unlimited option.",
    sections: [
      {
        id: "why",
        heading: "Why buy a Thailand eSIM",
        paragraphs: [
          "Ride-hailing, maps, translation and ferry bookings are much easier with data. An eSIM avoids queues at airport SIM counters and keeps your home number available.",
        ],
      },
      {
        id: "coverage",
        heading: "Coverage by region",
        paragraphs: [
          "Bangkok, Chiang Mai, Phuket, Krabi and Koh Samui are well covered by the main operators. Remote islands and national parks can have weak signal.",
        ],
        bullets: [
          "Bangkok: strong 4G and 5G in the city.",
          "Phuket, Krabi and Samui: good in tourist areas.",
          "Remote islands and parks: variable.",
        ],
      },
      {
        id: "plans",
        heading: "Choosing a plan",
        paragraphs: [
          "The dtac Happy Tourist plan gives 15GB for 8 days at $9.90 on dtac / TrueMove 5G, ideal for a week away. The Thailand Unlimited Pro plan gives unlimited data for 15 days at $19.95 on AIS / dtac 5G.",
        ],
      },
      {
        id: "arrival",
        heading: "Arrival preparation",
        paragraphs: [
          "Install the eSIM before departure and check Thailand's current entry requirements, including any digital arrival card, on official government sites. Carry a charger and a power bank for long travel days.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is there an unlimited Thailand eSIM?",
        answer:
          "Yes. The Thailand Unlimited Pro plan gives unlimited data for 15 days at $19.95. Fair-use rules may apply.",
      },
      {
        question: "Which plan is best for one week?",
        answer:
          "The dtac Happy Tourist plan with 15GB for 8 days at $9.90 suits most one-week trips.",
      },
      {
        question: "Does it work on the islands?",
        answer:
          "In main tourist areas of Phuket, Krabi and Koh Samui, yes. Remote areas may have weak signal.",
      },
      {
        question: "Can I share data from my phone?",
        answer: "Yes, both listed Thailand plans allow hotspot.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Maldives",
  "Bali & Indonesia",
  "Southeast Asia",
];

import type { Metadata } from "next";
import Link from "next/link";
import { Zap, ShieldCheck, Car, Plane, Shield, ArrowRight } from "lucide-react";
import DataCalculator from "@/components/DataCalculator";
import DeviceCheck from "@/components/DeviceCheck";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "https://e-sim.nilesupplies.com" },
};

const DESTINATIONS = [
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

const generalFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an eSIM and how does it work for international travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An eSIM (embedded SIM) is a digital microchip built into your smartphone that allows you to activate cellular data plans without inserting a physical plastic SIM card. You scan a QR code before departure, and your phone connects to local 5G networks immediately upon landing."
      }
    },
    {
      "@type": "Question",
      name: "Do I have to remove my home physical SIM card?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Modern smartphones support Dual SIM functionality. You can keep your primary home SIM active to receive SMS verification codes and bank 2FA, while setting your travel eSIM as the primary line for mobile cellular data."
      }
    },
    {
      "@type": "Question",
      name: "How does an eSIM bypass Indonesia's airport IMEI customs tax in Bali?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indonesia's Bea Cukai IMEI registration law applies only to devices using local Indonesian physical SIM cards. Travel eSIMs operate via international roaming agreements with Telkomsel, which are completely exempt from customs IMEI declarations."
      }
    },
    {
      "@type": "Question",
      name: "Can I tether my laptop via Personal Hotspot with these eSIMs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Airalo, Saily, and Yesim all allow unrestricted personal hotspot tethering on their standard packages."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={generalFaqJsonLd} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 mb-6">
            <Zap className="w-3.5 h-3.5" /> Instant QR delivery • Zero roaming surcharges
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
            Prepaid Travel eSIMs for the Maldives, Bali & Across Asia
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Compare <strong>Airalo</strong>, <strong>Saily</strong>, and <strong>Yesim</strong> side-by-side on Tier-1 local carriers: Ooredoo, Dhiraagu, Telkomsel, Singtel, CelcomDigi, and AIS. Install before takeoff, connect the instant you land.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="#plans"
              className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-extrabold text-center transition shadow-lg shadow-cyan-500/20"
            >
              Compare All Plans Side-by-Side ↓
            </Link>
            <Link
              href="#calculator"
              className="px-7 py-3.5 rounded-xl border border-slate-700 hover:border-cyan-400 font-bold text-center transition"
            >
              Calculate My Data Need
            </Link>
          </div>
        </div>
      </section>

      {/* 3 COMPETING PROVIDERS SIDE-BY-SIDE PLANS SECTION */}
      <section id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-10">
          <span className="text-xs font-extrabold text-cyan-700 uppercase tracking-wider block mb-1">
            Side-by-Side Comparison
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Compare Competing eSIM Providers by Destination
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-3xl">
            Transparent cost-per-GB breakdowns, carrier network tiers, verified discount promo codes, and unthrottled high-speed connectivity.
          </p>
        </div>

        <div className="space-y-12">
          {DESTINATIONS.map((d) => (
            <div
              key={d.key}
              id={`plans-${d.key}`}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{d.flag}</span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">{d.name}</h3>
                    <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ⚡ {d.carrier}
                    </span>
                  </div>
                </div>
                <Link
                  href="/guides/index.html"
                  className="text-sm font-bold text-cyan-700 hover:text-cyan-800 transition flex items-center gap-1"
                >
                  <span>View {d.name} Guides & Benchmarks</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {d.providers.map((p, idx) => (
                  <div
                    key={p.provider}
                    className={`relative flex flex-col p-6 rounded-xl border-2 transition ${
                      idx === 0
                        ? "border-cyan-500 bg-gradient-to-b from-white to-cyan-50/30"
                        : "border-slate-200 bg-white hover:border-cyan-500"
                    }`}
                  >
                    {idx === 0 && (
                      <span className="absolute -top-3 right-4 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 tracking-wider">
                        Editor Choice
                      </span>
                    )}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-extrabold text-lg text-slate-900">{p.name}</span>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        {p.promo}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 mb-4 font-medium">
                      📡 Network: <strong className="text-slate-700">{p.carrier}</strong>
                    </div>

                    <div className="py-3 border-y border-dashed border-slate-200 mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold text-slate-900">{p.price}</span>
                        <span className="text-xs text-slate-500">/ {p.data} ({p.validity})</span>
                      </div>
                      <span className="inline-block mt-1 text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">
                        {p.pricePerGb}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                      {p.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-2">
                          <span className="text-emerald-500 font-extrabold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#"
                      data-aff-provider={p.provider}
                      data-aff-dest={d.key}
                      className="mt-auto block text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold transition shadow-sm"
                    >
                      Get eSIM →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DATA CALCULATOR */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-8">
          <span className="text-xs font-extrabold text-cyan-700 uppercase tracking-wider block mb-1">
            Interactive Planning Tool
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Trip Data Bandwidth Calculator
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Calculate your exact data consumption so you never run out mid-trip or pay for wasted gigabytes.
          </p>
        </div>
        <DataCalculator />
      </section>

      {/* DEVICE COMPATIBILITY CHECK */}
      <section id="compatibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-8">
          <span className="text-xs font-extrabold text-cyan-700 uppercase tracking-wider block mb-1">
            Hardware Readiness
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Live Device Compatibility Checker
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Confirm whether your smartphone supports digital eSIM profiles before booking.
          </p>
        </div>
        <DeviceCheck />
      </section>

      {/* COMPLETE YOUR TRIP ESSENTIALS */}
      <section id="essentials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-8">
          <span className="text-xs font-extrabold text-cyan-700 uppercase tracking-wider block mb-1">
            Travel Logistics
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Complete Your Trip Essentials
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Pre-booked airport pickups, reliable travel medical protection, and multi-city route fares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-5">
              <Car className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold uppercase text-cyan-700 tracking-wider mb-1">
              Klook Partner
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Airport & Island Speedboat Transfers
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Skip airport taxi haggling and long queues. Pre-book private Male airport speedboats, Bali Denpasar airport pickups, and inter-island ferry passes.
            </p>
            <a
              href="#"
              data-upsell="klookTransfers"
              className="mt-auto block text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold transition"
            >
              Book Transfers on Klook →
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold uppercase text-cyan-700 tracking-wider mb-1">
              SafetyWing
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Nomad Travel Medical Insurance
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Global medical protection for island travelers and digital nomads. Covers unexpected illnesses, emergency transport, lost luggage, and trip delays.
            </p>
            <a
              href="#"
              data-upsell="safetyWing"
              className="mt-auto block text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold transition"
            >
              Get Nomad Insurance →
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-5">
              <Plane className="w-6 h-6" />
            </div>
            <span className="text-xs font-extrabold uppercase text-cyan-700 tracking-wider mb-1">
              Skyscanner
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Multi-City Regional Flights
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Compare multi-stop flight fares between Singapore, Kuala Lumpur, Bangkok, Bali, and Male. Find open-jaw route bargains with zero extra fees.
            </p>
            <a
              href="#"
              data-upsell="skyscanner"
              className="mt-auto block text-center py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold transition"
            >
              Compare Flights on Skyscanner →
            </a>
          </div>
        </div>
      </section>

      {/* HIGHEST-PAYING TRAVEL PARTNER DIRECTORY SECTION */}
      <section id="vip-partners" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="mb-8">
          <span className="text-xs font-extrabold text-cyan-700 uppercase tracking-wider block mb-1">
            VIP & High-Yield Partner Highlights
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Highest-Paying Travel Affiliate Partners
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-3xl leading-relaxed">
            Not all high commission rates are created equal. A 7 percent commission on a $3,000 business-class fare pays more than a 30 percent commission on a $50 city tour. Compare programs at a glance, then select your audience fit.
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mb-10">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 text-white font-bold">
              <tr>
                <th className="p-3.5">Brand</th>
                <th className="p-3.5">Category</th>
                <th className="p-3.5">Commission / CPA</th>
                <th className="p-3.5">Cookie Duration</th>
                <th className="p-3.5">Audience Fit</th>
                <th className="p-3.5">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Skyscanner</td>
                <td className="p-3.5">Travel search engine</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">20% redirect / 40% booking</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">Multi-city flight routing & stopover bargains</td>
                <td className="p-3.5"><a href="#" data-high-yield="skyscanner" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Pelago (Singapore Airlines)</td>
                <td className="p-3.5">Experiences</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">3–10% CPA</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">Curated Southeast Asia activities & Changi attractions</td>
                <td className="p-3.5"><a href="#" data-high-yield="pelago" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">La Compagnie Airlines</td>
                <td className="p-3.5">Luxury airline</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">7% CPA ($210+ / booking)</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">All-business-class transcontinental luxury travel</td>
                <td className="p-3.5"><a href="#" data-high-yield="laCompagnie" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Tahiti Village Resort & Spa</td>
                <td className="p-3.5">Hotels & Island Resorts</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">10% CPA</span></td>
                <td className="p-3.5">28 days</td>
                <td className="p-3.5">Island-style resort suites & vacation stays</td>
                <td className="p-3.5"><a href="#" data-high-yield="tahitiVillage" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Extra Holidays</td>
                <td className="p-3.5">Hotels / Condos</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">10% CPA</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">Multi-room condo suites & extended vacation rentals</td>
                <td className="p-3.5"><a href="#" data-high-yield="extraHolidays" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">PointsYeah</td>
                <td className="p-3.5">Travel rewards</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">30% CPA</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">Live points & award flight seat finder</td>
                <td className="p-3.5"><a href="#" data-high-yield="pointsYeah" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Tinggly</td>
                <td className="p-3.5">Experience gifting</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">10–20% CPA</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">Honeymoon gift boxes & romantic bucket-list vouchers</td>
                <td className="p-3.5"><a href="#" data-high-yield="tinggly" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">4S eSIM</td>
                <td className="p-3.5">eSIM / mobile</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">25% CPA</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">High-capacity international travel data</td>
                <td className="p-3.5"><a href="#" data-high-yield="esim4s" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Amigo eSIM</td>
                <td className="p-3.5">eSIM / mobile</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">20–28% CPA</span></td>
                <td className="p-3.5">60 days</td>
                <td className="p-3.5">Extended 60-day attribution travel connectivity</td>
                <td className="p-3.5"><a href="#" data-high-yield="amigoEsim" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Elife Transfer</td>
                <td className="p-3.5">Airport transfers</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">5–7% CPA</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">Worldwide private airport limos & vans</td>
                <td className="p-3.5"><a href="#" data-high-yield="elifeTransfer" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Easirent</td>
                <td className="p-3.5">Car rental</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">7% CPA</span></td>
                <td className="p-3.5">15 days</td>
                <td className="p-3.5">Airport car hire & self-drive road trips</td>
                <td className="p-3.5"><a href="#" data-high-yield="easirent" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3.5 font-bold text-slate-900">Backpack</td>
                <td className="p-3.5">Travel insurance</td>
                <td className="p-3.5"><span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">10% CPA</span></td>
                <td className="p-3.5">30 days</td>
                <td className="p-3.5">Backpacker & remote nomad emergency medical cover</td>
                <td className="p-3.5"><a href="#" data-high-yield="backpack" className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white font-bold text-xs transition">Explore →</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3 CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm">
            <span className="text-xs font-extrabold uppercase text-cyan-700 tracking-wider mb-1">
              Flights & Rewards
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Luxury Airfare & Award Flights
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Compare multi-city flights on <strong>Skyscanner</strong>, book all-business class boutique flights on <strong>La Compagnie</strong>, or discover award seats on <strong>PointsYeah</strong>.
            </p>
            <div className="mt-auto space-y-2">
              <a href="#" data-high-yield="skyscanner" className="block text-center py-2 px-3 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white text-xs font-bold transition">Skyscanner Flights →</a>
              <a href="#" data-high-yield="laCompagnie" className="block text-center py-2 px-3 rounded-lg bg-cyan-900 hover:bg-cyan-700 text-white text-xs font-bold transition">La Compagnie (7% CPA) →</a>
              <a href="#" data-high-yield="pointsYeah" className="block text-center py-2 px-3 rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold transition">PointsYeah Rewards (30% CPA) →</a>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm">
            <span className="text-xs font-extrabold uppercase text-cyan-700 tracking-wider mb-1">
              Resorts & Gifting
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Hotels, Condos & Honeymoon Gifts
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Island resort suites at <strong>Tahiti Village Resort & Spa</strong>, spacious vacation rentals via <strong>Extra Holidays</strong>, and romantic travel gift boxes with <strong>Tinggly</strong>.
            </p>
            <div className="mt-auto space-y-2">
              <a href="#" data-high-yield="tahitiVillage" className="block text-center py-2 px-3 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white text-xs font-bold transition">Tahiti Village Resort (10%) →</a>
              <a href="#" data-high-yield="extraHolidays" className="block text-center py-2 px-3 rounded-lg bg-cyan-900 hover:bg-cyan-700 text-white text-xs font-bold transition">Extra Holidays Condos (10%) →</a>
              <a href="#" data-high-yield="tinggly" className="block text-center py-2 px-3 rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold transition">Tinggly Gift Boxes (10–20%) →</a>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col shadow-sm">
            <span className="text-xs font-extrabold uppercase text-cyan-700 tracking-wider mb-1">
              Mobility & Protection
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              High-Yield eSIMs, Transit & Insurance
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              High-commission mobile data via <strong>4S eSIM</strong> (25%) and <strong>Amigo eSIM</strong> (28%), private rides on <strong>Elife</strong>, cars on <strong>Easirent</strong>, and nomad protection with <strong>Backpack</strong>.
            </p>
            <div className="mt-auto space-y-2">
              <a href="#" data-high-yield="esim4s" className="block text-center py-2 px-3 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white text-xs font-bold transition">4S eSIM (25% CPA) →</a>
              <a href="#" data-high-yield="amigoEsim" className="block text-center py-2 px-3 rounded-lg bg-cyan-900 hover:bg-cyan-700 text-white text-xs font-bold transition">Amigo eSIM (20–28% CPA) →</a>
              <a href="#" data-high-yield="elifeTransfer" className="block text-center py-2 px-3 rounded-lg bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold transition">Elife VIP Transfers →</a>
              <a href="#" data-high-yield="backpack" className="block text-center py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition">Backpack Insurance (10%) →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL GUIDES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-extrabold text-cyan-700 uppercase tracking-wider block mb-1">
              Authoritative Guides
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest Destination Travel Guides & Benchmarks
            </h2>
          </div>
          <Link
            href="/guides/index.html"
            className="text-sm font-bold text-cyan-700 hover:text-cyan-800 transition flex items-center gap-1"
          >
            <span>View All 25 SEO Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/guides/best-esim-maldives-2026.html"
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-500 transition shadow-sm flex flex-col"
          >
            <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full w-fit mb-3">
              🇲🇻 Maldives
            </span>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2 leading-snug">
              Best eSIM for Maldives (2026): Local Islands vs Private Resorts
            </h3>
            <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
              Complete connectivity guide covering Male Airport (VIA), Himmafushi, Maafushi, Thulusdhoo, and remote atoll resorts using Ooredoo and Dhiraagu networks.
            </p>
            <span className="mt-auto text-xs font-bold text-slate-900 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/guides/bali-indonesia-esim-imei-guide.html"
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-500 transition shadow-sm flex flex-col"
          >
            <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full w-fit mb-3">
              🇮🇩 Indonesia
            </span>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2 leading-snug">
              Bali & Indonesia Tourist eSIM: Avoiding Customs IMEI Tax
            </h3>
            <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
              How travel eSIMs bypass Indonesia's mandatory customs IMEI tax and airport queues while giving you fast Telkomsel 5G in Canggu, Ubud, and Uluwatu.
            </p>
            <span className="mt-auto text-xs font-bold text-slate-900 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            href="/guides/southeast-asia-regional-esim-comparison.html"
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-cyan-500 transition shadow-sm flex flex-col"
          >
            <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full w-fit mb-3">
              🌏 Regional Asia
            </span>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2 leading-snug">
              Southeast Asia Regional eSIM: 18-Country Pass vs Single SIMs
            </h3>
            <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
              Island hopping through Singapore, Malaysia, Thailand, and Bali? Full cost-per-GB breakdown and seamless border roaming transitions.
            </p>
            <span className="mt-auto text-xs font-bold text-slate-900 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}

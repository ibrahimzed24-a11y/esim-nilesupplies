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

const DESTINATION_IMAGES: Record<string, string> = {
  maldives: "/images/destinations/maldives.jpg",
  indonesia: "/images/destinations/bali.jpg",
  malaysia: "/images/destinations/malaysia.jpg",
  singapore: "/images/destinations/singapore.jpg",
  thailand: "/images/destinations/thailand.jpg",
  asia: "/images/destinations/asia-regional.jpg",
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={generalFaqJsonLd} />

      {/* HERO SECTION WITH IMAGERY */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 mb-6">
                <Zap className="w-3.5 h-3.5" /> Instant QR delivery • Zero roaming surcharges
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Prepaid Travel eSIMs for the Maldives, Bali & Across Asia
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
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

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 group">
                <img
                  src="/images/hero-traveler-esim.jpg"
                  alt="Traveler using high-speed 5G eSIM connectivity on tropical beach"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-white">Tier-1 5G Connected</div>
                      <div className="text-[10px] text-slate-400">Zero latency • Instant QR Activation</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-cyan-400">5G Fast</span>
                </div>
              </div>
            </div>
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
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm overflow-hidden"
            >
              <div className="relative rounded-xl overflow-hidden mb-6 h-36 sm:h-44 group">
                <img
                  src={DESTINATION_IMAGES[d.key] || "/images/destinations/maldives.jpg"}
                  alt={`${d.name} travel and cellular connectivity`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent flex items-center p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{d.flag}</span>
                      <h3 className="text-xl sm:text-2xl font-extrabold">{d.name}</h3>
                    </div>
                    <div className="text-xs text-cyan-300 font-semibold flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-400/30">Tier-1 5G: {d.carrier}</span>
                      <span className="hidden sm:inline">• Instant QR Delivery</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
                <div>
                  <span className="text-sm text-slate-500 font-medium">Recommended eSIM Data Plans:</span>
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
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm group">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/images/essentials/airport-transfer.jpg"
                alt="Speedboat transfer in Maldives"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/90 text-cyan-300 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                Klook Partner
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
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
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm group">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/images/essentials/travel-insurance.jpg"
                alt="Digital nomad working on beach with travel medical insurance"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/90 text-cyan-300 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                SafetyWing
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
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
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col shadow-sm group">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/images/essentials/flight-search.jpg"
                alt="Airplane soaring above clouds over tropical islands"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-slate-900/90 text-cyan-300 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                Skyscanner
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
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

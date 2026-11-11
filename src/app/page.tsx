import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Zap } from "lucide-react";
import { TRAVEL_GUIDES } from "@/data/esimData";
import { DESTINATIONS, GENERAL_FAQS } from "@/data/destinations";
import PlanExplorer from "@/components/PlanExplorer";
import DataCalculator from "@/components/DataCalculator";
import DeviceCheck from "@/components/DeviceCheck";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "https://e-sim.nilesupplies.com" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GENERAL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            <Zap className="w-3.5 h-3.5" /> Instant QR delivery • Zero roaming fees
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Travel eSIMs for the Maldives, Bali & Asia
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl">
            Compare prepaid eSIM plans on Ooredoo, Telkomsel, Maxis, Singtel and AIS. Install before
            you fly and connect the moment you land.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="#plans"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold text-center transition"
            >
              Browse plans
            </Link>
            <Link
              href="#calculator"
              className="px-6 py-3 rounded-xl border border-slate-600 hover:border-cyan-400 font-semibold text-center transition"
            >
              Calculate my data
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12" aria-labelledby="dest-heading">
        <h2 id="dest-heading" className="text-2xl font-bold text-slate-900 mb-5">
          Popular destinations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="flex items-center justify-between gap-2 p-4 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 font-semibold text-slate-800 transition"
            >
              <span>
                {d.flag} {d.name}
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          ))}
        </div>
      </section>

      <section id="plans" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">Compare eSIM plans</h2>
        <PlanExplorer />
      </section>

      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">Data calculator</h2>
        <DataCalculator />
      </section>

      <section id="compatibility" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">Device check</h2>
        <DeviceCheck />
      </section>

      <section id="guides" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">Travel guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TRAVEL_GUIDES.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="flex flex-col p-5 rounded-2xl bg-white border border-slate-200 hover:border-cyan-500 transition"
            >
              <span className="text-xs font-bold text-cyan-700">{g.country}</span>
              <span className="mt-2 font-bold text-slate-900 leading-snug">{g.title}</span>
              <span className="mt-2 text-sm text-slate-600 line-clamp-3">{g.excerpt}</span>
              <span className="mt-4 text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {g.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">Frequently asked questions</h2>
        <FaqAccordion items={GENERAL_FAQS} idPrefix="faq-home" />
      </section>
    </>
  );
}

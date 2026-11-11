import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Signal } from "lucide-react";
import { OFFICIAL_DOMAIN, TRAVEL_GUIDES } from "@/data/esimData";
import { DESTINATIONS, getDestination, getPlansForCountry } from "@/data/destinations";
import PlanCard from "@/components/PlanCard";
import FaqAccordion from "@/components/FaqAccordion";
import DataCalculator from "@/components/DataCalculator";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const destination = getDestination(params.slug);
  if (!destination) return {};
  const url = `${OFFICIAL_DOMAIN}/destinations/${destination.slug}`;
  return {
    title: destination.title,
    description: destination.description,
    alternates: { canonical: url },
    openGraph: {
      title: destination.title,
      description: destination.description,
      url,
      siteName: "NileSupplies eSIM",
      type: "website",
    },
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = getDestination(params.slug);
  if (!destination) {
    notFound();
  }

  const plans = getPlansForCountry(destination.countryCode);
  const url = `${OFFICIAL_DOMAIN}/destinations/${destination.slug}`;
  const prices = plans.map((p) => p.priceUSD);
  const guides = TRAVEL_GUIDES.filter((g) =>
    destination.name.toLowerCase().includes(g.country.toLowerCase())
  );

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${destination.name} eSIM`,
    description: destination.description,
    url,
    brand: { "@type": "Brand", name: "Airalo" },
    category: "Travel eSIM",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: Math.min(...prices).toFixed(2),
      highPrice: Math.max(...prices).toFixed(2),
      offerCount: plans.length,
      availability: "https://schema.org/InStock",
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: `${p.planName} (${p.dataGB === "Unlimited" ? "Unlimited" : `${p.dataGB}GB`}, ${p.validityDays} days)`,
        price: p.priceUSD.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${OFFICIAL_DOMAIN}/api/go?id=${p.id}&ref=jsonld`,
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: destination.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <JsonLd data={productJsonLd} />
      <JsonLd data={faqJsonLd} />

      <Link
        href="/#plans"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>All destinations</span>
      </Link>

      <header className="max-w-3xl">
        <div className="text-4xl">{destination.flag}</div>
        <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
          {destination.h1}
        </h1>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-cyan-600" />
            {destination.airport}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Signal className="w-4 h-4 text-cyan-600" />
            {destination.networks.join(" • ")}
          </span>
        </div>
        <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
          {destination.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </header>

      <section className="mt-12" aria-labelledby="plans-heading">
        <h2 id="plans-heading" className="text-2xl font-bold text-slate-900">
          {destination.name} eSIM plans
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} refTag={`dest_${destination.slug}`} />
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="calc-heading">
        <h2 id="calc-heading" className="text-2xl font-bold text-slate-900 mb-6">
          How much data do you need in {destination.name}?
        </h2>
        <DataCalculator defaultCountry={destination.countryCode} />
      </section>

      {guides.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Travel guides</h2>
          <ul className="space-y-2">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`} className="text-cyan-700 font-semibold hover:underline">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14 max-w-3xl" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 mb-6">
          {destination.name} eSIM FAQ
        </h2>
        <FaqAccordion items={destination.faqs} idPrefix={`faq-${destination.slug}`} />
      </section>
    </div>
  );
}

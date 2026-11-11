import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TRAVEL_GUIDES, ESIM_PLANS, OFFICIAL_DOMAIN } from "@/data/esimData";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";

export function generateStaticParams() {
  return TRAVEL_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guide = TRAVEL_GUIDES.find((g) => g.slug === params.slug);
  if (!guide) return {};
  const url = `${OFFICIAL_DOMAIN}/guides/${guide.slug}`;
  return {
    title: `${guide.title} | NileSupplies eSIM`,
    description: guide.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      url,
      siteName: "NileSupplies eSIM",
      type: "article",
      publishedTime: guide.publishedAt,
    },
  };
}

export default function GuideDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = TRAVEL_GUIDES.find((g) => g.slug === params.slug);

  if (!guide) {
    notFound();
  }

  const relatedPlans = ESIM_PLANS.filter((p) =>
    p.countryName.toLowerCase().includes(guide.country.toLowerCase())
  ).slice(0, 2);

  const displayPlans =
    relatedPlans.length > 0 ? relatedPlans : ESIM_PLANS.slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Asia eSIM Plans</span>
      </Link>

      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4">
          <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 font-bold">
            {guide.country} Connectivity
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {guide.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {guide.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
          {guide.title}
        </h1>

        <div className="space-y-5 text-slate-700 leading-relaxed text-base">
          {guide.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Recommended eSIM Plans for This Trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {displayPlans.map((plan) => (
              <div
                key={plan.id}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
              >
                <div>
                  <div className="font-bold text-slate-900">
                    {plan.flag} {plan.countryName} ({plan.dataGB}
                    {plan.dataGB === "Unlimited" ? "" : "GB"})
                  </div>
                  <div className="text-xs text-slate-500">
                    {plan.localNetwork} • {plan.validityDays} Days
                  </div>
                  <div className="text-lg font-extrabold text-cyan-600 mt-1">
                    ${plan.priceUSD.toFixed(2)}
                  </div>
                </div>
                <a
                  href={`/api/go?id=${plan.id}&ref=guide_${guide.slug}`}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-xs font-bold flex items-center gap-1 transition"
                >
                  <span>Get eSIM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

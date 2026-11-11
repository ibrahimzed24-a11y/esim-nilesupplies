import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Calendar, Clock, ListOrdered } from "lucide-react";
import { OFFICIAL_DOMAIN, OFFICIAL_EMAIL, ESIM_PLANS } from "@/data/esimData";
import { getDestination } from "@/data/destinations";
import { BLOG_POSTS, getPost } from "@/data/blog";
import PlanCard from "@/components/PlanCard";
import FaqAccordion from "@/components/FaqAccordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = OFFICIAL_DOMAIN + "/blog/" + post.slug;
  return {
    title: { absolute: post.seoTitle },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url,
      siteName: "NileSupplies eSIM",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
    },
    twitter: { card: "summary", title: post.seoTitle, description: post.description },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  const url = OFFICIAL_DOMAIN + "/blog/" + post.slug;
  const destination = getDestination(post.destinationSlug);
  const plans = post.planIds
    .map((id) => ESIM_PLANS.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const prices = plans.map((p) => p.priceUSD);

  const sameCategory = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category);
  const related = [...sameCategory, ...others].slice(0, 3);

  const toc = [
    ...post.sections.map((s) => ({ id: s.id, label: s.heading })),
    { id: "plans", label: "Recommended eSIM plans" },
    { id: "faq", label: "Frequently asked questions" },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      articleSection: post.category,
      inLanguage: "en",
      author: { "@type": "Organization", name: "NileSupplies", email: OFFICIAL_EMAIL, url: OFFICIAL_DOMAIN },
      publisher: { "@type": "Organization", name: "NileSupplies", url: OFFICIAL_DOMAIN },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: OFFICIAL_DOMAIN },
        { "@type": "ListItem", position: 2, name: "Blog", item: OFFICIAL_DOMAIN + "/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: post.productName,
      description: post.description,
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
          name: p.planName + " (" + (p.dataGB === "Unlimited" ? "Unlimited" : p.dataGB + "GB") + ", " + p.validityDays + " days)",
          price: p.priceUSD.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: OFFICIAL_DOMAIN + "/api/go?id=" + p.id + "&ref=blog_" + post.slug,
        })),
      },
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <JsonLd data={jsonLd} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title },
        ]}
      />

      <div className="mt-6 lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <article className="min-w-0">
          <header>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 font-bold">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">{post.intro}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#plans"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold transition"
              >
                See eSIM plans
              </a>
              <a
                href="https://www.airalo.com"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="px-5 py-3 rounded-xl border border-slate-300 hover:border-cyan-600 text-slate-800 text-sm font-bold transition"
              >
                Visit Airalo
              </a>
            </div>
          </header>

          <details open className="lg:hidden mt-8 rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-bold text-slate-900 flex items-center gap-2">
              <ListOrdered className="w-4 h-4" aria-hidden="true" />
              On this page
            </summary>
            <ol className="mt-3 space-y-2 text-sm list-decimal list-inside text-cyan-800">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={"#" + t.id} className="hover:underline">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          <div className="mt-10 space-y-10">
            {post.sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={s.id + "-h"} className="scroll-mt-24">
                <h2 id={s.id + "-h"} className="text-2xl font-bold text-slate-900">
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-4 text-slate-700 leading-relaxed">
                  {s.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-4 list-disc pl-6 space-y-1.5 text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section id="plans" aria-labelledby="plans-h" className="mt-12 scroll-mt-24">
            <h2 id="plans-h" className="text-2xl font-bold text-slate-900">
              Recommended eSIM plans
            </h2>
            <p className="mt-2 text-slate-600">
              Plans are sold by the provider. Prices and details are shown as listed on this site and may change.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} refTag={"blog_" + post.slug} />
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              {destination && (
                <Link href={"/destinations/" + destination.slug} className="text-cyan-700 hover:underline">
                  All {destination.name} eSIM plans
                </Link>
              )}
              <Link href={"/guides/" + post.guideSlug} className="text-cyan-700 hover:underline">
                Read the connectivity guide
              </Link>
              <a
                href="https://www.airalo.com"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="text-cyan-700 hover:underline"
              >
                Compare on Airalo
              </a>
            </div>
          </section>

          <section id="faq" aria-labelledby="faq-h" className="mt-12 scroll-mt-24">
            <h2 id="faq-h" className="text-2xl font-bold text-slate-900 mb-5">
              Frequently asked questions
            </h2>
            <FaqAccordion items={post.faqs} idPrefix={"faq-" + post.slug} />
          </section>

          <p className="mt-10 text-xs text-slate-500 leading-relaxed">
            Affiliate disclosure: we may earn a commission if you buy through our links, at no extra cost to you.
            Questions? Email {OFFICIAL_EMAIL}.
          </p>
        </article>

        <aside className="hidden lg:block" aria-label="Table of contents">
          <nav className="sticky top-24 rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-bold text-slate-900 flex items-center gap-2">
              <ListOrdered className="w-4 h-4" aria-hidden="true" />
              On this page
            </p>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={"#" + t.id} className="hover:text-cyan-700 hover:underline">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href={"/api/go?id=" + plans[0].id + "&ref=blog_toc_" + post.slug}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="mt-4 flex items-center justify-center gap-1 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold transition"
            >
              Get eSIM <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </nav>
        </aside>
      </div>

      <section className="mt-16" aria-labelledby="related-h">
        <h2 id="related-h" className="text-2xl font-bold text-slate-900">
          Related articles
        </h2>
        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {related.map((r) => (
            <li key={r.slug} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700">
                {r.category}
              </span>
              <h3 className="mt-3 font-bold text-slate-900 leading-snug">
                <Link href={"/blog/" + r.slug} className="hover:text-cyan-700">
                  {r.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-slate-600">{r.readTime}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm">
          <Link href="/blog" className="font-semibold text-cyan-700 hover:underline">
            Back to all articles
          </Link>
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { OFFICIAL_DOMAIN } from "@/data/esimData";
import { DESTINATIONS } from "@/data/destinations";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";
import BlogFilter from "@/components/BlogFilter";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

const TITLE = "Asia eSIM Travel Blog: Maldives, Bali, Malaysia, Singapore & Thailand";
const DESCRIPTION =
  "Practical eSIM travel guides for the Maldives, Bali, Malaysia, Singapore and Thailand: coverage, data needs, setup tips and plan comparisons from NileSupplies.";
const URL = OFFICIAL_DOMAIN + "/blog";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "NileSupplies eSIM",
    type: "website",
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION },
};

export default function BlogIndexPage() {
  const cards = BLOG_POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    readTime: p.readTime,
    publishedAt: p.publishedAt,
  }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: TITLE,
      description: DESCRIPTION,
      url: URL,
      isPartOf: { "@type": "WebSite", name: "NileSupplies eSIM", url: OFFICIAL_DOMAIN },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: BLOG_POSTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: OFFICIAL_DOMAIN + "/blog/" + p.slug,
          name: p.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: OFFICIAL_DOMAIN },
        { "@type": "ListItem", position: 2, name: "Blog", item: URL },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />

      <header className="mt-6 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
          Asia eSIM Travel Blog
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Honest, practical guides to staying online in the Maldives, Bali, Malaysia, Singapore and
          Thailand: coverage, how much data you need, and how to set up your eSIM before you fly.
        </p>
      </header>

      <section className="mt-10" aria-label="Articles">
        <BlogFilter posts={cards} categories={BLOG_CATEGORIES} />
      </section>

      <section className="mt-16 rounded-2xl bg-slate-900 text-white p-6 sm:p-10" aria-labelledby="blog-cta">
        <h2 id="blog-cta" className="text-2xl font-bold">
          Ready to compare eSIM plans?
        </h2>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Browse destination pages with live plan details, or go straight to the provider.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.slug}
              href={"/destinations/" + d.slug}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold"
            >
              {d.flag} {d.name} eSIM
            </Link>
          ))}
          <a
            href="https://www.airalo.com"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 text-sm font-bold"
          >
            Visit Airalo
          </a>
        </div>
      </section>
    </div>
  );
}

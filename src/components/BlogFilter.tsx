"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export interface BlogCardData {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

const BTN_BASE =
  "px-4 py-2 rounded-full text-sm font-semibold border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ";
const BTN_ON = "bg-slate-900 text-white border-slate-900";
const BTN_OFF = "bg-white text-slate-700 border-slate-300 hover:border-cyan-600 hover:text-cyan-700";

export default function BlogFilter({
  posts,
  categories,
}: {
  posts: BlogCardData[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
        {["All", ...categories].map((cat) => {
          const pressed = active === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActive(cat)}
              className={BTN_BASE + (pressed ? BTN_ON : BTN_OFF)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-slate-500" aria-live="polite">
        Showing {visible.length} of {posts.length} articles
      </p>

      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((post) => (
          <li key={post.slug} className="flex">
            <article className="flex flex-col w-full p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <span className="self-start text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700">
                {post.category}
              </span>
              <h2 className="mt-3 text-lg font-bold text-slate-900 leading-snug">
                <Link
                  href={"/blog/" + post.slug}
                  className="hover:text-cyan-700 focus:outline-none focus-visible:underline"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{post.description}</p>
              <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {post.readTime}
                </span>
                <Link
                  href={"/blog/" + post.slug}
                  aria-label={"Read article: " + post.title}
                  className="inline-flex items-center gap-1 font-semibold text-cyan-700 hover:underline"
                >
                  Read <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

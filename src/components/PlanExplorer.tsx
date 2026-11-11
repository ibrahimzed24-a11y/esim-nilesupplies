"use client";

import { useState } from "react";
import { ESIM_PLANS } from "@/data/esimData";
import PlanCard from "@/components/PlanCard";

const FILTERS: { code: string; label: string }[] = [
  { code: "ALL", label: "All" },
  { code: "MV", label: "🇲🇻 Maldives" },
  { code: "ID", label: "🇮🇩 Bali" },
  { code: "MY", label: "🇲🇾 Malaysia" },
  { code: "SG", label: "🇸🇬 Singapore" },
  { code: "TH", label: "🇹🇭 Thailand" },
  { code: "ASIA", label: "🌏 Regional" },
];

export default function PlanExplorer() {
  const [filter, setFilter] = useState("ALL");
  const plans =
    filter === "ALL" ? ESIM_PLANS : ESIM_PLANS.filter((p) => p.countryCode === filter);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.code}
            type="button"
            onClick={() => setFilter(f.code)}
            aria-pressed={filter === f.code}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition ${
              filter === f.code
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:border-cyan-500"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} refTag="home_plans" />
        ))}
      </div>
    </div>
  );
}

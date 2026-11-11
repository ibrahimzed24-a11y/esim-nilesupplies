import { ArrowUpRight, Signal, Wifi } from "lucide-react";
import type { EsimPlan } from "@/data/esimData";

export function formatData(plan: EsimPlan) {
  return plan.dataGB === "Unlimited" ? "Unlimited" : `${plan.dataGB}GB`;
}

export default function PlanCard({ plan, refTag }: { plan: EsimPlan; refTag: string }) {
  return (
    <div className="relative flex flex-col p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
      {plan.popular && (
        <span className="absolute -top-2.5 right-4 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-600 text-white">
          Popular
        </span>
      )}
      <div className="text-sm font-semibold text-slate-500">
        {plan.flag} {plan.countryName}
      </div>
      <div className="mt-1 font-bold text-slate-900">{plan.planName}</div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-slate-900">{formatData(plan)}</span>
        <span className="text-sm text-slate-500">/ {plan.validityDays} days</span>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
        <li className="flex items-center gap-2">
          <Signal className="w-4 h-4 text-cyan-600" />
          {plan.localNetwork}
        </li>
        <li className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-cyan-600" />
          {plan.speed}
          {plan.hotspot ? " • Hotspot" : ""}
        </li>
      </ul>
      <div className="mt-auto pt-5 flex items-center justify-between gap-3">
        <span className="text-2xl font-extrabold text-cyan-600">
          ${plan.priceUSD.toFixed(2)}
        </span>
        <a
          href={`/api/go?id=${plan.id}&ref=${refTag}`}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold flex items-center gap-1 transition"
        >
          <span>Get eSIM</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

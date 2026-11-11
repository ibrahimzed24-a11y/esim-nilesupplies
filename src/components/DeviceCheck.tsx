"use client";

import { useState } from "react";
import { CheckCircle2, Search } from "lucide-react";
import { COMPATIBLE_DEVICES } from "@/data/esimData";

export default function DeviceCheck() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const matches = q
    ? COMPATIBLE_DEVICES.filter((d) => d.toLowerCase().includes(q))
    : COMPATIBLE_DEVICES;

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-8">
      <label htmlFor="device-search" className="block text-sm font-semibold text-slate-700 mb-2">
        Search your phone model
      </label>
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          id="device-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. iPhone 15, Galaxy S23, Pixel 8"
          className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-300 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {matches.map((d) => (
          <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />
            {d}
          </li>
        ))}
      </ul>
      {q && matches.length === 0 && (
        <p className="mt-4 text-sm text-slate-600">
          Not in our list. On iPhone check Settings → Cellular → Add eSIM; on Android check
          Settings → Connections → SIM manager.
        </p>
      )}
    </div>
  );
}

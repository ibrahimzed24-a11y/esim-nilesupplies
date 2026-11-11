"use client";

import { useEffect, useMemo, useState } from "react";
import { calculateUsage, type CalcResult, type UsageInput } from "@/lib/calculate";
import PlanCard from "@/components/PlanCard";

const COUNTRIES: { code: string; label: string }[] = [
  { code: "MV", label: "🇲🇻 Maldives" },
  { code: "ID", label: "🇮🇩 Bali (Indonesia)" },
  { code: "MY", label: "🇲🇾 Malaysia" },
  { code: "SG", label: "🇸🇬 Singapore" },
  { code: "TH", label: "🇹🇭 Thailand" },
  { code: "ASIA", label: "🌏 Multi-country Asia" },
];

type NumericKey = "days" | "mapsHours" | "socialHours" | "videoHours" | "callMinutes";

const SLIDERS: { key: NumericKey; label: string; min: number; max: number; step: number; unit: string }[] = [
  { key: "days", label: "Trip length", min: 1, max: 30, step: 1, unit: "days" },
  { key: "mapsHours", label: "Maps & navigation", min: 0, max: 6, step: 0.5, unit: "h/day" },
  { key: "socialHours", label: "Social media & browsing", min: 0, max: 8, step: 0.5, unit: "h/day" },
  { key: "videoHours", label: "Video streaming", min: 0, max: 6, step: 0.5, unit: "h/day" },
  { key: "callMinutes", label: "WhatsApp / voice calls", min: 0, max: 120, step: 5, unit: "min/day" },
];

export default function DataCalculator({ defaultCountry = "MV" }: { defaultCountry?: string }) {
  const [input, setInput] = useState<UsageInput>({
    days: 7,
    mapsHours: 1,
    socialHours: 2,
    videoHours: 0.5,
    callMinutes: 10,
    countryCode: defaultCountry,
  });
  const local = useMemo(() => calculateUsage(input), [input]);
  const [remote, setRemote] = useState<CalcResult | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => {
      fetch("/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
        signal: controller.signal,
      })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data && data.ok) setRemote(data as CalcResult);
        })
        .catch(() => {
          /* fall back to the local result */
        });
    }, 300);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [input]);

  const result = remote ?? local;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-8 space-y-5">
        <div>
          <label htmlFor="calc-country" className="block text-sm font-semibold text-slate-700 mb-2">
            Destination
          </label>
          <select
            id="calc-country"
            value={input.countryCode}
            onChange={(e) => {
              setRemote(null);
              setInput((s) => ({ ...s, countryCode: e.target.value }));
            }}
            className="w-full px-3 py-3 rounded-xl border border-slate-300 text-base bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        {SLIDERS.map((s) => (
          <div key={s.key}>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <label htmlFor={`calc-${s.key}`} className="font-semibold text-slate-700">
                {s.label}
              </label>
              <span className="font-bold text-cyan-700">
                {input[s.key]} {s.unit}
              </span>
            </div>
            <input
              id={`calc-${s.key}`}
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={input[s.key]}
              onChange={(e) => {
                const value = Number(e.target.value);
                setRemote(null);
                setInput((prev) => ({ ...prev, [s.key]: value }));
              }}
              className="w-full h-2 accent-cyan-600 cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-8" aria-live="polite">
        <div className="text-sm text-cyan-300 font-semibold">Estimated data for your trip</div>
        <div className="mt-2 text-5xl font-extrabold" data-testid="calc-total">
          {result.totalGB} GB
        </div>
        <div className="mt-1 text-sm text-slate-400">
          ≈ {result.dailyMB} MB per day, including a 15% safety buffer
        </div>
        <div className="mt-6">
          {result.recommended ? (
            <>
              <div className="text-sm font-semibold text-slate-300 mb-3">Recommended plan</div>
              <div className="text-slate-900">
                <PlanCard plan={result.recommended} refTag="calculator" />
              </div>
            </>
          ) : (
            <p className="text-sm text-slate-300">
              No single plan covers this trip. Choose an unlimited plan or combine two plans for
              longer stays.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

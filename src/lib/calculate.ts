import { ESIM_PLANS, type EsimPlan } from "@/data/esimData";

export interface UsageInput {
  days: number;
  mapsHours: number;
  socialHours: number;
  videoHours: number;
  callMinutes: number;
  countryCode?: string;
}

export interface CalcResult {
  dailyMB: number;
  totalGB: number;
  recommended: EsimPlan | null;
  alternatives: EsimPlan[];
}

// Approximate consumption per hour (or per minute for calls)
const MB_PER_MAPS_HOUR = 20;
const MB_PER_SOCIAL_HOUR = 150;
const MB_PER_VIDEO_HOUR = 700;
const MB_PER_CALL_MINUTE = 1;
const SAFETY_BUFFER = 1.15;

function clamp(value: unknown, min: number, max: number, fallback: number) {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

export function normalizeInput(raw: Record<string, unknown>): UsageInput {
  const country =
    typeof raw.countryCode === "string" && /^[A-Za-z]{2,4}$/.test(raw.countryCode)
      ? raw.countryCode.toUpperCase()
      : undefined;

  return {
    days: Math.round(clamp(raw.days, 1, 90, 7)),
    mapsHours: clamp(raw.mapsHours, 0, 24, 1),
    socialHours: clamp(raw.socialHours, 0, 24, 2),
    videoHours: clamp(raw.videoHours, 0, 24, 0.5),
    callMinutes: clamp(raw.callMinutes, 0, 600, 10),
    countryCode: country,
  };
}

export function calculateUsage(input: UsageInput): CalcResult {
  const dailyMB =
    input.mapsHours * MB_PER_MAPS_HOUR +
    input.socialHours * MB_PER_SOCIAL_HOUR +
    input.videoHours * MB_PER_VIDEO_HOUR +
    input.callMinutes * MB_PER_CALL_MINUTE;

  const totalGB =
    Math.round(((dailyMB * input.days * SAFETY_BUFFER) / 1024) * 10) / 10;

  const code = input.countryCode;
  const pool = code
    ? ESIM_PLANS.filter((p) => p.countryCode === code)
    : ESIM_PLANS;

  const fitting = pool
    .filter(
      (p) =>
        p.validityDays >= input.days &&
        (p.dataGB === "Unlimited" || p.dataGB >= totalGB)
    )
    .sort((a, b) => a.priceUSD - b.priceUSD);

  return {
    dailyMB: Math.round(dailyMB),
    totalGB,
    recommended: fitting[0] ?? null,
    alternatives: fitting.slice(1, 3),
  };
}

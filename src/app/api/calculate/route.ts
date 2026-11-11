import { NextRequest, NextResponse } from "next/server";
import { calculateUsage, normalizeInput } from "@/lib/calculate";

export const dynamic = "force-dynamic";

function respond(raw: Record<string, unknown>) {
  const input = normalizeInput(raw);
  const result = calculateUsage(input);
  return NextResponse.json(
    { ok: true, input, ...result },
    {
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    }
  );
}

export async function GET(request: NextRequest) {
  const raw = Object.fromEntries(request.nextUrl.searchParams.entries());
  return respond(raw);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }
  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json(
      { ok: false, error: "invalid_body" },
      { status: 400 }
    );
  }
  return respond(body as Record<string, unknown>);
}

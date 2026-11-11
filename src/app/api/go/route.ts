import { NextRequest, NextResponse } from "next/server";
import { ESIM_PLANS } from "@/data/esimData";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const planId = searchParams.get("id");
  const subId = searchParams.get("ref") || "web_organic";

  const selectedPlan = ESIM_PLANS.find((p) => p.id === planId);

  if (!selectedPlan) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const targetUrl = new URL(selectedPlan.affiliateTargetUrl);
  targetUrl.searchParams.set("utm_source", "e-sim.nilesupplies.com");
  targetUrl.searchParams.set("utm_medium", "affiliate");
  targetUrl.searchParams.set("utm_campaign", selectedPlan.id);
  targetUrl.searchParams.set("sub_id", subId);

  console.log(
    JSON.stringify({
      event: "AFFILIATE_CLICK",
      planId: selectedPlan.id,
      country: selectedPlan.countryName,
      price: selectedPlan.priceUSD,
      subId,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "unknown",
    })
  );

  const response = NextResponse.redirect(targetUrl.toString(), { status: 307 });
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

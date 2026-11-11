import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://e-sim.nilesupplies.com"),
  title: "NileRoam | Asia & Maldives Travel eSIM Comparison (Airalo vs Saily vs Yesim)",
  description:
    "Compare prepaid travel eSIMs for Maldives, Bali, Malaysia, Singapore, and Thailand. 3 competing providers side-by-side with instant QR delivery, local 5G networks, and zero roaming fees.",
  keywords: [
    "Maldives eSIM",
    "Bali tourist eSIM",
    "Asia travel eSIM",
    "Singapore eSIM",
    "Malaysia travel data",
    "Ooredoo Maldives eSIM",
    "Telkomsel Bali eSIM",
    "Airalo vs Saily vs Yesim",
  ],
  openGraph: {
    title: "NileRoam — Instant Asia & Island 5G Travel Data",
    description:
      "Connect in 60 seconds upon arrival in Maldives, Bali, Singapore, Malaysia & Thailand. Instant QR delivery.",
    url: "https://e-sim.nilesupplies.com",
    siteName: "NileRoam",
    type: "website",
  },
  verification: {
    google: "rV1RZXThL3QraO9ulwKay-9HBhmmfVKkvUgPwYMDRMQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="rV1RZXThL3QraO9ulwKay-9HBhmmfVKkvUgPwYMDRMQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              var script = document.createElement("script");
              script.async = 1;
              script.setAttribute("data-cmp-ab","2");
              script.src = 'https://tp-em.com/NTk5MDQ1.js?t=599045';
              document.head.appendChild(script);
            })();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-white font-sans bg-slate-50 text-slate-800">
        {/* TOP TRUST BAR */}
        <div className="bg-slate-900 text-cyan-300 text-xs py-2 px-4 text-center font-semibold border-b border-cyan-500/20">
          ⚡ Instant QR Delivery • Tier-1 Local 5G Networks • Zero Roaming Fees
        </div>

        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-cyan-400 shadow-sm p-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M2 20h.01" />
                  <path d="M7 20v-4" />
                  <path d="M12 20v-8" />
                  <path d="M17 20V4" />
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 leading-tight">
                  NileRoam
                </span>
                <span className="text-[10px] font-bold text-cyan-700 tracking-wider uppercase">
                  by NileSupplies
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
              <Link href="/#plans" className="hover:text-cyan-600 transition">
                Destinations
              </Link>
              <Link href="/#calculator" className="hover:text-cyan-600 transition">
                Data Calculator
              </Link>
              <Link href="/#compatibility" className="hover:text-cyan-600 transition">
                Device Check
              </Link>
              <Link href="/guides/index.html" className="hover:text-cyan-600 transition">
                Travel Guides
              </Link>
              <Link href="/#essentials" className="hover:text-cyan-600 transition">
                Trip Essentials
              </Link>
              <Link href="/about.html" className="hover:text-cyan-600 transition">
                About
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/#plans"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white text-sm font-bold transition shadow-sm"
              >
                Browse Plans
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 text-white font-extrabold text-lg mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-cyan-400">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  <span>NileRoam (by Nile Supplies)</span>
                </div>
                <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-4">
                  Independent digital connectivity and prepaid travel eSIM comparison portal for the Maldives, Bali (Indonesia), Malaysia, Singapore, Thailand, and pan-Asia travel. Compare Tier-1 local carriers, avoid airport SIM lines, and connect seamlessly.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span>Official Support:</span>
                  <a
                    href="mailto:contact@nilesupplies.com"
                    className="text-cyan-400 hover:underline font-semibold"
                  >
                    contact@nilesupplies.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-sm mb-3">
                  Top Destinations
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/#plans-maldives" className="hover:text-white transition">🇲🇻 Maldives eSIM</Link></li>
                  <li><Link href="/#plans-indonesia" className="hover:text-white transition">🇮🇩 Bali & Indonesia eSIM</Link></li>
                  <li><Link href="/#plans-malaysia" className="hover:text-white transition">🇲🇾 Malaysia eSIM</Link></li>
                  <li><Link href="/#plans-singapore" className="hover:text-white transition">🇸🇬 Singapore eSIM</Link></li>
                  <li><Link href="/#plans-thailand" className="hover:text-white transition">🇹🇭 Thailand eSIM</Link></li>
                  <li><Link href="/#plans-asia" className="hover:text-white transition">🌏 All-Asia 18-Country Pass</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold text-sm mb-3">
                  Compliance & Legal
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about.html" className="hover:text-white transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy.html" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms.html" className="hover:text-white transition">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/affiliate-disclosure.html" className="hover:text-white transition">
                      Affiliate Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml" className="hover:text-white transition">
                      XML Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col gap-4">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 leading-relaxed">
                <strong className="text-slate-300">FTC Affiliate Disclosure:</strong>{" "}
                NileRoam (e-sim.nilesupplies.com) is operated by Nile Supplies (contact@nilesupplies.com). We independently review and compare mobile connectivity providers. When you click links on our site and purchase an eSIM or travel service from Airalo, Saily, Yesim, Travelpayouts, Impact.com, Klook, SafetyWing, or Skyscanner, we may earn an affiliate commission at zero additional cost to you.
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-slate-500">
                <span>© 2026 Nile Supplies. All rights reserved.</span>
                <span>Official Business Contact: contact@nilesupplies.com</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Global Affiliate Resolver */}
        <Script src="/js/affiliate-config.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

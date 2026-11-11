import type { Metadata } from "next";
import Link from "next/link";
import { Wifi, Globe, ShieldCheck, Mail } from "lucide-react";
import MobileMenu, { type NavLink } from "@/components/MobileMenu";
import { DESTINATIONS } from "@/data/destinations";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://e-sim.nilesupplies.com"),
  title: "NileSupplies eSIM | Instant Travel Data for Maldives & Asia",
  description:
    "Compare and buy instant prepaid travel eSIMs for the Maldives, Bali (Indonesia), Malaysia, Singapore, Thailand, and 18+ Asian destinations. Zero roaming fees, instant QR delivery.",
  keywords: [
    "Maldives eSIM",
    "Bali tourist eSIM",
    "Asia travel eSIM",
    "Singapore eSIM",
    "Malaysia travel data",
    "Ooredoo Maldives eSIM",
    "Telkomsel Bali eSIM",
  ],
  openGraph: {
    title: "NileSupplies Asia eSIM Portal — Instant Island & City 5G Data",
    description:
      "Connect in 60 seconds upon arrival in Maldives, Bali, Singapore, Malaysia & Thailand.",
    url: "https://e-sim.nilesupplies.com",
    siteName: "NileSupplies eSIM",
    type: "website",
  },
};

const NAV_LINKS: NavLink[] = [
  { href: "/#plans", label: "Destinations" },
  { href: "/#calculator", label: "Data Calculator" },
  { href: "/#compatibility", label: "Device Check" },
  { href: "/#guides", label: "Travel Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
  { href: "/legal", label: "About & Legal" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased selection:bg-cyan-500 selection:text-white">
        <div className="bg-slate-900 text-cyan-300 text-xs py-2 px-4 text-center font-medium">
          ⚡ Instant QR Delivery • Works with Local Tier-1 5G Networks (Ooredoo, Telkomsel, Singtel, AIS)
        </div>

        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-sm">
                <Wifi className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight text-slate-900">
                  NileSupplies
                </span>
                <span className="ml-1.5 text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                  Asia eSIM
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-cyan-600 transition">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/#plans"
                className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-slate-900 hover:bg-cyan-600 text-white text-sm font-semibold transition shadow-sm"
              >
                Browse Plans
              </Link>
              <MobileMenu links={NAV_LINKS} />
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>e-sim.nilesupplies.com</span>
                </div>
                <p className="text-sm text-slate-400 max-w-md leading-relaxed mb-4">
                  Your dedicated digital connectivity directory for the Maldives,
                  Indonesia (Bali), Malaysia, Singapore, Thailand, and pan-Asian
                  travel. Compare verified prepaid eSIM packages with instant
                  activation.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a
                    href="mailto:contact@nilesupplies.com"
                    className="hover:text-cyan-400 underline"
                  >
                    contact@nilesupplies.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-3">
                  Top Destinations
                </h3>
                <ul className="space-y-2 text-sm">
                  {DESTINATIONS.map((d) => (
                    <li key={d.slug}>
                      <Link href={`/destinations/${d.slug}`} className="hover:text-white transition">
                        {d.flag} {d.name} eSIM
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-3">
                  Compliance & Legal
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/legal#about" className="hover:text-white transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal#privacy" className="hover:text-white transition">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal#disclosure" className="hover:text-white transition">
                      Affiliate Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal#terms" className="hover:text-white transition">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="max-w-3xl leading-relaxed">
                <strong className="text-slate-400">Affiliate Disclosure:</strong>{" "}
                e-sim.nilesupplies.com is an independent travel connectivity
                comparison platform operated by Nile Supplies (contact@nilesupplies.com).
                We participate in partner programs (including Airalo and Impact) and may earn a
                commission when you purchase an eSIM through our links, at zero
                additional cost to you.
              </p>
              <div className="flex items-center gap-1.5 text-slate-400 shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>© {new Date().getFullYear()} Nile Supplies</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

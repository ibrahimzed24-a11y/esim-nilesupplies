import type { Metadata } from "next";
import { OFFICIAL_EMAIL } from "@/data/esimData";

export const metadata: Metadata = {
  title: "About, Privacy & Affiliate Disclosure | NileSupplies eSIM",
  description:
    "About e-sim.nilesupplies.com, our privacy policy, affiliate disclosure and terms of service. Contact: contact@nilesupplies.com.",
  alternates: { canonical: "https://e-sim.nilesupplies.com/legal" },
};

const SECTIONS: { id: string; title: string; body: string[] }[] = [
  {
    id: "about",
    title: "About Us",
    body: [
      "e-sim.nilesupplies.com is an independent travel connectivity comparison platform operated by Nile Supplies. We help travellers to the Maldives, Bali (Indonesia), Malaysia, Singapore, Thailand and wider Asia compare prepaid eSIM plans.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      "We do not sell eSIMs directly and we do not collect payment details. Purchases happen on the provider's website under its own privacy policy.",
      "When you click a plan, our redirect records anonymous click data (plan, referring page, time and browser user agent) to measure which plans are useful. We do not store your name or email from these clicks.",
    ],
  },
  {
    id: "disclosure",
    title: "Affiliate Disclosure",
    body: [
      "We participate in partner programs (including Airalo and Impact) and may earn a commission when you purchase an eSIM through our links, at zero additional cost to you. Commissions never change the price you pay.",
    ],
  },
  {
    id: "terms",
    title: "Terms of Service",
    body: [
      "Plan details and prices are provided for comparison and may change on the provider's site. Always confirm the final price, coverage and validity before you buy. Data estimates from our calculator are approximate.",
    ],
  },
];

export default function LegalPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">About & Legal</h1>
      {SECTIONS.map((s) => (
        <section key={s.id} id={s.id} className="mt-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h2>
          <div className="space-y-3 text-slate-700 leading-relaxed">
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}
      <section id="contact" className="mt-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
        <p className="text-slate-700">
          Email:{" "}
          <a href={`mailto:${OFFICIAL_EMAIL}`} className="text-cyan-700 underline">
            {OFFICIAL_EMAIL}
          </a>
        </p>
      </section>
    </div>
  );
}

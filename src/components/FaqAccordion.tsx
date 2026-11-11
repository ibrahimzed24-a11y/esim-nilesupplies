"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/destinations";

export default function FaqAccordion({
  items,
  idPrefix = "faq",
}: {
  items: FaqItem[];
  idPrefix?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${idPrefix}-panel-${idx}`;
        const buttonId = `${idPrefix}-button-${idx}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 text-left px-4 sm:px-6 py-4 font-semibold text-slate-900 hover:text-cyan-700"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-slate-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-slate-600 leading-relaxed"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

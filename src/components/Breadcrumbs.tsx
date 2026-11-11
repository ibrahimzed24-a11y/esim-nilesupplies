import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-cyan-700 hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="font-medium text-slate-900">
                  {item.name}
                </span>
              )}
              {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

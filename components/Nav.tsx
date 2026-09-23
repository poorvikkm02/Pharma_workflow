"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/start", label: "How we start" },
  { href: "/reach", label: "Reach & pitch" },
  { href: "/workflow", label: "Workflow" },
  { href: "/ai", label: "AI" },
  { href: "/mlr", label: "MLR/PRC" },
  { href: "/future", label: "Future" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[15px] font-semibold transition-colors hover:text-teal"
        >
          <span className="h-2.5 w-2.5 rotate-45 rounded-sm bg-teal" />
          Pharma Workflow — Internal Concept
        </Link>
        <nav className="hidden gap-6 text-sm text-muted md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-ink ${
                pathname === l.href
                  ? "font-semibold text-teal"
                  : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

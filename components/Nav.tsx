"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/start", label: "How we start" },
  { href: "/reach", label: "Reach & pitch" },
  { href: "/workflow", label: "Workflow" },
  { href: "/ai", label: "AI" },
  { href: "/mlr", label: "MLR/PRC" },
  { href: "/future", label: "Future" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm text-muted md:flex">
          {links.filter((l) => l.href !== "/").map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-ink ${
                pathname === l.href ? "font-semibold text-teal" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted hover:bg-card hover:text-ink focus:outline-none focus:ring-2 focus:ring-teal/30 md:hidden transition-colors"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <nav className="border-t border-line bg-bg/95 backdrop-blur-md px-6 py-4 md:hidden flex flex-col space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className={`text-sm py-2 px-3 rounded-md transition-colors ${
                pathname === l.href
                  ? "font-semibold text-teal bg-teal/10"
                  : "text-muted hover:text-ink hover:bg-card/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}


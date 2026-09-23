"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { chainSteps } from "@/lib/data";

export default function Hero() {
  const [active, setActive] = useState<number | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="pb-10 pt-[76px]">
      <div className="wrap">
        <h1 className="mb-5 max-w-[820px] text-[34px] font-medium leading-[1.08] tracking-tight sm:text-[46px] lg:text-[58px]">
          From Pharma Brief to Digital Experience
        </h1>
        <p className="mb-6 max-w-[600px] text-lg leading-relaxed text-muted sm:text-[19px]">
          An AI-assisted workflow for creating, reviewing and delivering pharma digital
          experiences.
        </p>
        <p className="mb-8 text-[13px] text-muted">
          <span className="font-semibold text-ink">Client acquisition</span> →{" "}
          <span className="font-semibold text-ink">Brief</span> →{" "}
          <span className="font-semibold text-ink">Medical &amp; Creative</span> →{" "}
          <span className="font-semibold text-ink">MLR / PRC</span> →{" "}
          <span className="font-semibold text-ink">Technology</span> →{" "}
          <span className="font-semibold text-ink">Deployment</span>
        </p>

        <div className="mb-14 flex flex-wrap gap-3.5">
          <Link
            href="/workflow"
            className="inline-flex items-center gap-2 rounded-[9px] bg-ink px-[22px] py-3 text-[14.5px] font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Explore the workflow <ArrowRight size={16} />
          </Link>
          <Link
            href="/ai"
            className="inline-flex items-center gap-2 rounded-[9px] border border-line px-[22px] py-3 text-[14.5px] font-semibold transition-colors hover:border-teal hover:text-teal"
          >
            See where AI fits
          </Link>
        </div>

        <div className="overflow-hidden rounded-card border border-line bg-card">
          <div className="flex flex-col md:flex-row">
            {chainSteps.map((step, i) => (
              <button
                key={step.label}
                onClick={() => setActive(active === i ? null : i)}
                style={{ animationDelay: `${i * 90}ms` }}
                className={`flex flex-1 flex-col gap-1.5 border-b border-line-soft p-5 text-left transition-colors last:border-b-0 hover:bg-teal-tint md:border-b-0 md:border-r md:last:border-r-0 ${
                  show ? "animate-nodeIn" : "opacity-0"
                } ${active === i ? "bg-teal-tint" : ""}`}
              >
                <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
                <span className="text-[14.5px] font-semibold">{step.label}</span>
              </button>
            ))}
          </div>
          <div
            className="accordion-panel border-t border-line-soft bg-teal-tint"
            style={{ maxHeight: active !== null ? 160 : 0 }}
          >
            <div className="px-6 py-5 text-sm leading-relaxed text-muted">
              {active !== null ? chainSteps[active].detail : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

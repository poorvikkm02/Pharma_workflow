"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { timelineStages } from "@/lib/data";

export default function WorkflowTimeline() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          eyebrow="Full picture"
          title="The complete workflow"
          lede="Click any stage to expand it."
        />

        <div className="timeline">
          {timelineStages.map((stage, i) => {
            const open = openIdx === i;
            return (
              <div key={stage.num} className="relative pb-1.5">
                <div className="tl-dot" />
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-baseline gap-3 py-3.5 text-left"
                >
                  <span className="font-mono text-[13px] text-muted">{stage.num}</span>
                  <span className="text-base font-semibold">{stage.label}</span>
                  <ChevronDown
                    size={16}
                    className={`ml-auto text-muted transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div className="accordion-panel" style={{ maxHeight: open ? 220 : 0 }}>
                  <div className="max-w-[560px] pb-[22px] text-sm leading-relaxed text-muted">
                    {stage.desc}
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {stage.deliv.map((d) => (
                        <span key={d} className="rounded-md border border-line px-2.5 py-1 text-xs">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

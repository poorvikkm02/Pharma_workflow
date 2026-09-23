"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Badges";
import { aiFeatures } from "@/lib/data";

export default function AIFeatures() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          eyebrow="AI automation, in practice"
          title="Five places AI removes repetitive work"
          lede="Each one is AI-assisted, with a human reviewing the output before it moves forward."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {aiFeatures.map((f, i) => {
            const Icon = f.icon;
            const open = openIdx === i;
            return (
              <button
                key={f.title}
                onClick={() => setOpenIdx(open ? null : i)}
                className="flex flex-col gap-3 bg-card p-[22px] text-left"
              >
                <div className="flex items-center justify-between">
                  <Pill>AI-assisted — human review required</Pill>
                  <ChevronDown
                    size={16}
                    className={`text-muted transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </div>
                <div className="flex items-center gap-2.5 text-[15px] font-semibold">
                  <Icon size={18} className="text-teal" />
                  {f.title}
                </div>
                <div
                  className="accordion-panel text-[12.5px] leading-loose text-muted"
                  style={{ maxHeight: open ? 160 : 0 }}
                >
                  {f.flow.join(" \u2192 ")}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

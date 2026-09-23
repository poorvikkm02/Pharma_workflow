"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { FictionalTag } from "@/components/ui/Badges";
import { briefInputs, briefAssets } from "@/lib/data";

export default function ClientBrief() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          kicker="02"
          title="The client gives us a brief"
          lede="Click an input below to see what it contains."
        />

        <div className="overflow-hidden rounded-card border border-line bg-card">
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-line p-6">
            <div>
              <div className="font-serif text-base font-semibold">
                NOVALIS™ — HCP awareness campaign
              </div>
              <div className="mt-1 text-[13px] text-muted">
                Audience: Healthcare professionals
              </div>
            </div>
            <FictionalTag>FICTIONAL DEMO PRODUCT</FictionalTag>
          </div>

          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
            <div>
              <div className="mb-2.5 text-[11.5px] font-semibold uppercase tracking-wide text-muted">
                Required assets
              </div>
              {briefAssets.map((asset) => (
                <div key={asset} className="flex items-center gap-2 py-1.5 text-[14.5px]">
                  <Check size={15} className="text-teal" /> {asset}
                </div>
              ))}
            </div>

            <div>
              <div className="mb-2.5 text-[11.5px] font-semibold uppercase tracking-wide text-muted">
                Inputs from client
              </div>
              {briefInputs.map((input, i) => (
                <div key={input.label}>
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="mb-2 flex w-full items-center justify-between rounded-lg border border-line px-3.5 py-2.5 text-left text-[13.5px] transition-colors hover:border-teal"
                  >
                    <span>{input.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="accordion-panel text-[13px] leading-relaxed text-muted"
                    style={{ maxHeight: openIdx === i ? 100 : 0 }}
                  >
                    <p className="pb-2.5 pt-1">{input.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

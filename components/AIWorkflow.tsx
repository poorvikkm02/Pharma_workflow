"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { traditionalSteps, aiAssistedSteps } from "@/lib/data";

export default function AIWorkflow() {
  const [mode, setMode] = useState<"trad" | "ai">("trad");
  const steps = mode === "trad" ? traditionalSteps : aiAssistedSteps;
  const dotClass = mode === "trad" ? "bg-[#B9AF9C]" : "bg-teal";

  return (
    <section className="section-pad bg-indigo-tint">
      <div className="wrap">
        <SectionHeading
          eyebrow="Where AI changes the workflow"
          eyebrowClassName="text-indigo"
          title="Same steps, less manual repetition"
          lede="Toggle between the traditional path and the AI-assisted path."
        />

        <div className="mb-7 inline-flex rounded-full border border-line bg-card p-1">
          {(["trad", "ai"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-full px-5 py-2 text-[13.5px] font-semibold transition-colors ${
                mode === m ? "bg-ink text-bg" : "text-muted"
              }`}
            >
              {m === "trad" ? "Traditional" : "AI-assisted"}
            </button>
          ))}
        </div>

        <div className="max-w-[560px] rounded-card border border-line bg-card p-7">
          {steps.map((step, i) => (
            <div
              key={step}
              className={`flex items-center gap-3.5 py-3.5 ${i === 0 ? "" : "border-t border-line-soft"}`}
            >
              <span className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${dotClass}`} />
              <span className="text-[14.5px]">{step}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[560px] text-[15px] font-medium">
          AI accelerates production. Humans retain medical, legal and regulatory control.
        </p>
      </div>
    </section>
  );
}

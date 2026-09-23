import { Globe, Mail, MessageCircle } from "lucide-react";
import Flow from "@/components/ui/Flow";
import DelivGrid from "@/components/ui/DelivGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { FictionalTag } from "@/components/ui/Badges";
import { startingTeam, showcaseAssets, phase0Loop, phase0Additions } from "@/lib/data";

const showcaseIcons = [Globe, Mail, MessageCircle];

export default function StartPhase() {
  return (
    <section className="section-pad bg-teal-tint">
      <div className="wrap">
        <SectionHeading
          kicker="00"
          title="How we actually start: freelance, showcase, trust"
          lede="Before we have paying clients, we build proof — not a pitch deck, a working demo."
        />

        <div className="mb-9 grid grid-cols-1 gap-7 md:grid-cols-[1fr_1.3fr]">
          <div className="rounded-card border border-line bg-card p-6">
            <h4 className="mb-4 text-[13px] font-bold text-teal">Starting team &amp; tools</h4>
            {startingTeam.map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  className={`flex items-start gap-3 py-[11px] text-[14.5px] ${
                    i === 0 ? "" : "border-t border-line-soft"
                  }`}
                >
                  <span className="pt-0.5 text-muted">
                    <Icon size={14} />
                  </span>
                  <span>{t.label}</span>
                </div>
              );
            })}
          </div>

          <div className="rounded-card border border-line bg-card p-6">
            <h4 className="mb-4 text-[13px] font-bold text-teal">Self-funded showcase assets</h4>
            <p className="mb-3.5 text-sm leading-relaxed text-muted">
              Built once, on a fictional product, to demonstrate what a real engagement would
              look like.
            </p>
            {showcaseAssets.map((asset, i) => {
              const Icon = showcaseIcons[i];
              return (
                <div key={asset} className="flex items-center gap-2 py-1.5 text-[14.5px]">
                  <Icon size={15} className="flex-shrink-0 text-teal" />
                  <span>{asset}</span>
                  <span className="ml-auto">
                    <FictionalTag>DEMO</FictionalTag>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mb-3.5 text-[11.5px] font-semibold uppercase tracking-wide text-muted">
          Phase 0 loop
        </p>
        <Flow className="mb-9" steps={phase0Loop} />

        <div className="mb-9 rounded-card border border-line border-l-[3px] border-l-teal bg-card p-5">
          <p className="text-[14.5px] leading-relaxed">
            <strong>Why this order:</strong> a pharma brand or agency won&apos;t take a
            capability slide on faith. A working demo — even a small one — does more to earn a
            first conversation than a deck. We operate as a lean freelance / boutique team for
            the first clients, then reinvest that trust and revenue into hiring and tooling.
          </p>
        </div>

        <p className="mb-3.5 text-[11.5px] font-semibold uppercase tracking-wide text-muted">
          Worth adding to this plan
        </p>
        <DelivGrid items={phase0Additions} cols={2} />
      </div>
    </section>
  );
}

import Track from "@/components/ui/Track";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildTools, businessTools, outreachChannels, pitchSteps } from "@/lib/data";

export default function ReachPitch() {
  const buildSteps = buildTools.map((t) => ({
    icon: t.icon,
    label: (
      <>
        <strong>{t.label}</strong> — {t.detail}
      </>
    ),
  }));
  const businessSteps = businessTools.map((t) => ({
    icon: t.icon,
    label: (
      <>
        <strong>{t.label}</strong> — {t.detail}
      </>
    ),
  }));

  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          eyebrow="How we operate day to day"
          title="Platforms we'd use, and how we reach clients"
          lede="The stack stays lean until revenue justifies more. Nothing here is a paid claim — swap any tool for an equivalent."
        />

        <div className="mb-14 grid grid-cols-1 gap-7 md:grid-cols-2">
          <Track title="Build & deliver" steps={buildSteps} />
          <Track title="Run the business" steps={businessSteps} />
        </div>

        <p className="mb-3.5 text-[13px] font-semibold uppercase tracking-wide text-muted">
          Where &amp; how we contact clients
        </p>
        <div className="mb-14 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {outreachChannels.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="flex flex-col gap-2.5 bg-card p-5">
                <Icon size={20} className="text-teal" />
                <span className="text-[13.5px] leading-relaxed">
                  <strong className="font-bold">{c.title}</strong> — {c.desc}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mb-3.5 text-[13px] font-semibold uppercase tracking-wide text-muted">
          How we pitch, once we have a name to reach
        </p>
        <div className="max-w-xl rounded-card border border-line bg-card p-6">
          {pitchSteps.map((step, i) => (
            <div
              key={step}
              className={`flex items-start gap-3 py-[11px] text-[14.5px] ${
                i === 0 ? "" : "border-t border-line-soft"
              }`}
            >
              <span className="pt-0.5 font-mono text-[12px] text-muted">{i + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

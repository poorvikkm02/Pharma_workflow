import Flow from "@/components/ui/Flow";
import SectionHeading from "@/components/ui/SectionHeading";
import { techOutputs } from "@/lib/data";

export default function Technology() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          kicker="05"
          title="Technology turns approved content into experiences"
          lede="Kept understandable, even if you don't write code."
        />

        <Flow
          className="mb-2"
          steps={[
            "Approved content",
            "Content structure",
            "Frontend / backend",
            "Integrations",
            "QA",
            "Deployment",
          ]}
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techOutputs.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.title} className="rounded-card border border-line bg-card p-5">
                <Icon size={18} className="text-indigo" />
                <h5 className="mb-3 mt-2.5 text-[13.5px] font-bold">{t.title}</h5>
                {t.items.map((item) => (
                  <div key={item} className="py-0.5 text-[12.5px] text-muted">
                    {item}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import { platformStages } from "@/lib/data";

const archFlow = [
  { label: "Approved content", tone: "plain" as const },
  { label: "AI knowledge layer", tone: "indigo" as const },
];
const archOutputs = ["Website", "IVA", "Email", "Banner"];
const archTail = ["QA + claim mapping", "Human review", "MLR / PRC"];

export default function FuturePlatform() {
  return (
    <section className="section-pad bg-indigo-tint">
      <div className="wrap">
        <SectionHeading
          eyebrow="The bigger picture"
          eyebrowClassName="text-indigo"
          title="From agency services to an AI platform"
          lede="Our long-term concept — not an existing product."
        />

        <div className="mb-11 flex flex-wrap items-stretch gap-0">
          {platformStages.map((s) => (
            <div
              key={s.label}
              className={`min-w-[170px] flex-1 rounded-[10px] border p-4 text-center text-sm ${
                s.tone === "teal"
                  ? "border-teal bg-teal-tint font-semibold text-teal"
                  : s.tone === "indigo"
                    ? "border-indigo bg-indigo-tint font-semibold text-indigo"
                    : "border-line bg-card font-medium"
              }`}
            >
              {s.label}
            </div>
          ))}
        </div>

        <div className="rounded-card border border-line bg-card p-7">
          {archFlow.map((node, i) => (
            <div key={node.label}>
              <div className="flex justify-center">
                <div
                  className={`rounded-[9px] border px-5 py-3 text-[13.5px] font-semibold ${
                    node.tone === "indigo"
                      ? "border-indigo bg-indigo-tint text-indigo"
                      : "border-line bg-bg"
                  }`}
                >
                  {node.label}
                </div>
              </div>
              <div className="py-3.5 text-center text-xs text-muted">↓</div>
            </div>
          ))}

          <div className="mb-3.5 flex flex-wrap justify-center gap-3">
            {archOutputs.map((o) => (
              <div
                key={o}
                className="rounded-lg border border-line bg-teal-tint px-4 py-2 text-xs font-semibold text-teal"
              >
                {o}
              </div>
            ))}
          </div>
          <div className="py-3.5 text-center text-xs text-muted">↓</div>

          {archTail.map((label, i) => (
            <div key={label}>
              <div className="flex justify-center">
                <div className="rounded-[9px] border border-line bg-bg px-5 py-3 text-[13.5px] font-semibold">
                  {label}
                </div>
              </div>
              <div className="py-3.5 text-center text-xs text-muted">↓</div>
            </div>
          ))}

          <div className="flex justify-center">
            <div className="rounded-[9px] border border-teal bg-teal-tint px-5 py-3 text-[13.5px] font-semibold text-teal">
              Deployment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

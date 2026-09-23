import SectionHeading from "@/components/ui/SectionHeading";

const chainSteps = [
  "Our team drafts the asset",
  "Submit to client",
  "Medical \u2192 Legal \u2192 Regulatory \u2192 PRC review",
  "Approved?",
];

export default function MLRPRC() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          kicker="04"
          title="Client review & approval"
          lede="Our team prepares the asset. The pharma client's internal Medical / Legal / Regulatory / Promotional Review process provides the formal approval."
        />

        <div className="mb-2 flex flex-col items-center">
          {chainSteps.map((step, i) => (
            <div key={step} className="contents">
              <div
                className={`min-w-[220px] rounded-[9px] border border-line bg-card px-6 py-3 text-center text-sm font-semibold ${
                  i === chainSteps.length - 1 ? "border-dashed" : ""
                }`}
              >
                {step}
              </div>
              {i < chainSteps.length - 1 && <div className="h-6 w-px bg-line" />}
            </div>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-10">
          <div className="w-full max-w-[320px] flex-1 rounded-card border border-amber bg-card p-5">
            <h5 className="mb-3 text-[13px] font-bold text-amber">Changes required</h5>
            {["PRC / MLR comments", "Our team revises", "Resubmission", "Review again"].map(
              (s, i) => (
                <div
                  key={s}
                  className={`py-1.5 text-[13.5px] ${i === 0 ? "" : "border-t border-line-soft"}`}
                >
                  {s}
                </div>
              )
            )}
          </div>
          <div className="w-full max-w-[320px] flex-1 rounded-card border border-teal bg-card p-5">
            <h5 className="mb-3 text-[13px] font-bold text-teal">Approved</h5>
            {["Approved version", "Final QA", "Deployment"].map((s, i) => (
              <div
                key={s}
                className={`py-1.5 text-[13.5px] ${i === 0 ? "" : "border-t border-line-soft"}`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-7 max-w-[560px] text-[13px] text-muted">
          Exact review structures and terminology vary by organization — this is a
          representative pattern, not a universal standard.
        </p>
      </div>
    </section>
  );
}

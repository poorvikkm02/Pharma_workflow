import Track from "@/components/ui/Track";
import Flow from "@/components/ui/Flow";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientAcquisition() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          kicker="01"
          title="Client acquisition"
          lede="Two channels bring a pharma project to our team — backed by the showcase assets from Phase 0."
        />

        <div className="mb-9 grid grid-cols-1 gap-7 md:grid-cols-2">
          <Track
            title="Direct pharma"
            steps={["Pharma company", "Brand / marketing / digital team", "Brief", "Our team"]}
          />
          <Track
            title="Agency partnership"
            steps={[
              "Pharma company",
              "Pharma / medical communication agency",
              "Our company as technology / production partner",
            ]}
          />
        </div>

        <div className="mb-9 rounded-card border border-line border-l-[3px] border-l-teal bg-card p-5">
          <p className="text-[14.5px] leading-relaxed">
            <strong>Proposed go-to-market:</strong> agencies can be an easier initial entry
            point, since they already work with pharma clients and have recurring production
            needs. This is our strategy hypothesis — not a claim about how every agency or
            pharma company operates.
          </p>
        </div>

        <p className="mb-3.5 text-[11.5px] font-semibold uppercase tracking-wide text-muted">
          Lead generation, illustrative
        </p>
        <Flow steps={["Prospect", "Discovery call", "Requirement", "Proposal", "Pilot", "Project"]} />
      </div>
    </section>
  );
}

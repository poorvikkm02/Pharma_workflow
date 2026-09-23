import Flow from "@/components/ui/Flow";
import DelivGrid from "@/components/ui/DelivGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { deliverables } from "@/lib/data";

export default function Problem() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          eyebrow="The problem"
          title="Why pharma digital production is complex"
          lede="A seemingly simple digital asset can pass through multiple teams and review cycles before it ever reaches a healthcare professional or patient."
        />
        <Flow
          className="mb-11"
          steps={[
            "Client request",
            "Medical content",
            "Creative",
            "Development",
            "Review",
            "Revisions",
            "MLR / PRC",
            "Deployment",
          ]}
        />
        <DelivGrid items={deliverables} />
      </div>
    </section>
  );
}

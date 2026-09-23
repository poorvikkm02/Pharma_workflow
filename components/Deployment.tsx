import Flow from "@/components/ui/Flow";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Deployment() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading kicker="06" title="From approved asset to live experience" />

        <Flow
          className="mb-7"
          steps={["Approved asset", "QA", "Deployment", "Analytics", "Maintenance"]}
        />

        <Flow
          steps={[
            "Website",
            "IVA",
            "Email campaign",
            "HCP landing page",
            "Digital banners",
            "Interactive content",
          ]}
          separator={"\u00b7"}
        />
      </div>
    </section>
  );
}

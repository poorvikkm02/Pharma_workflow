import { ArrowDown } from "lucide-react";
import Track from "@/components/ui/Track";
import Flow from "@/components/ui/Flow";
import SectionHeading from "@/components/ui/SectionHeading";
import { medicalTrack, creativeTrack, mergedAssets } from "@/lib/data";

export default function MedicalCreative() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <SectionHeading
          kicker="03"
          title="Medical + creative production"
          lede="Two tracks run in parallel, then merge into a single asset."
        />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <Track title="Medical" steps={medicalTrack} />
          <Track title="Creative" steps={creativeTrack} />
        </div>

        <div className="my-6 flex justify-center text-muted">
          <ArrowDown size={18} />
        </div>
        <div className="mx-auto mb-7 max-w-[400px] rounded-card border border-line bg-card p-[22px] text-center">
          <div className="mb-1.5 text-[13px] text-muted">Medical content + creative design</div>
          <div className="text-base font-semibold">Digital asset</div>
        </div>

        <Flow className="justify-center" steps={mergedAssets} separator={"\u00b7"} />
      </div>
    </section>
  );
}

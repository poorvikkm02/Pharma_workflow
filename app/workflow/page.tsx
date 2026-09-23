import ClientAcquisition from "@/components/ClientAcquisition";
import ClientBrief from "@/components/ClientBrief";
import MedicalCreative from "@/components/MedicalCreative";

function Hairline() {
  return <hr className="border-0 border-t border-line" />;
}

export default function WorkflowPage() {
  return (
    <>
      <ClientAcquisition />
      <Hairline />
      <ClientBrief />
      <Hairline />
      <MedicalCreative />
    </>
  );
}

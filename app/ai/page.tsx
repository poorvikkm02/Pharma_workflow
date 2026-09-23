import AIWorkflow from "@/components/AIWorkflow";
import AIFeatures from "@/components/AIFeatures";

function Hairline() {
  return <hr className="border-0 border-t border-line" />;
}

export default function AIPage() {
  return (
    <>
      <AIWorkflow />
      <AIFeatures />
    </>
  );
}

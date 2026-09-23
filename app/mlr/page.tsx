import MLRPRC from "@/components/MLRPRC";
import Technology from "@/components/Technology";
import Deployment from "@/components/Deployment";

function Hairline() {
  return <hr className="border-0 border-t border-line" />;
}

export default function MLRPage() {
  return (
    <>
      <MLRPRC />
      <Hairline />
      <Technology />
      <Hairline />
      <Deployment />
    </>
  );
}

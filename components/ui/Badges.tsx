export function Pill({ children, tone = "teal" }: { children: React.ReactNode; tone?: "teal" | "amber" }) {
  const toneClass =
    tone === "amber"
      ? "bg-amber-tint text-amber border-amber-tint"
      : "bg-teal-tint text-teal border-teal-tint";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClass}`}
    >
      {children}
    </span>
  );
}

export function FictionalTag({ children = "FICTIONAL DEMO" }: { children?: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-amber-tint px-2.5 py-1 text-[11px] font-bold tracking-wide text-amber">
      {children}
    </span>
  );
}

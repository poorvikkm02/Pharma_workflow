import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface TrackStep {
  icon?: LucideIcon;
  label: ReactNode;
}

interface TrackProps {
  title: string;
  steps: (string | TrackStep)[];
  className?: string;
}

export default function Track({ title, steps, className = "" }: TrackProps) {
  return (
    <div className={`rounded-card border border-line bg-card p-6 ${className}`}>
      <h4 className="mb-4 text-[13px] font-bold text-teal">{title}</h4>
      {steps.map((step, i) => {
        const isObj = typeof step !== "string";
        const Icon = isObj ? (step as TrackStep).icon : undefined;
        const label = isObj ? (step as TrackStep).label : step;
        return (
          <div
            key={i}
            className={`flex items-start gap-3 py-[11px] text-[14.5px] ${
              i === 0 ? "" : "border-t border-line-soft"
            }`}
          >
            <span className="pt-0.5 font-mono text-[12px] text-muted">
              {Icon ? <Icon size={14} /> : i + 1}
            </span>
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface DelivGridItem {
  icon: LucideIcon;
  label: ReactNode;
}

interface DelivGridProps {
  items: DelivGridItem[];
  cols?: 2 | 4;
  className?: string;
}

export default function DelivGrid({ items, cols = 4, className = "" }: DelivGridProps) {
  const colClass = cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <div
      className={`grid grid-cols-1 ${colClass} gap-px overflow-hidden rounded-card border border-line bg-line ${className}`}
    >
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex flex-col gap-2.5 bg-card p-5">
            <Icon size={20} className="text-teal" />
            <span className="text-[13.5px] font-medium leading-relaxed">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

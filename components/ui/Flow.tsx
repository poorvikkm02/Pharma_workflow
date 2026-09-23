interface FlowProps {
  steps: string[];
  separator?: string;
  className?: string;
}

/**
 * Renders a horizontal chain of steps (e.g. "Client → Brief → Medical").
 * Collapses to a vertical list on small screens via the .flow CSS in globals.css.
 */
export default function Flow({ steps, separator = "\u2192", className = "" }: FlowProps) {
  return (
    <div className={`flow ${className}`}>
      {steps.map((step, i) => (
        <div key={step} className="contents">
          <div className="flow-step">{step}</div>
          {i < steps.length - 1 && <div className="flow-arrow">{separator}</div>}
        </div>
      ))}
    </div>
  );
}

interface SectionHeadingProps {
  kicker?: string;
  eyebrow?: string;
  title: string;
  lede?: string;
  eyebrowClassName?: string;
}

export default function SectionHeading({
  kicker,
  eyebrow,
  title,
  lede,
  eyebrowClassName = "text-teal",
}: SectionHeadingProps) {
  return (
    <div>
      {kicker && <p className="font-mono text-[13px] text-muted">{kicker}</p>}
      {eyebrow && (
        <p className={`mb-3.5 text-[13px] font-semibold ${eyebrowClassName}`}>{eyebrow}</p>
      )}
      <h2 className="mb-4 text-[26px] font-medium leading-[1.15] tracking-tight sm:text-[32px] lg:text-[38px]">
        {title}
      </h2>
      {lede && <p className="mb-10 max-w-[640px] text-[17px] leading-relaxed text-muted">{lede}</p>}
    </div>
  );
}

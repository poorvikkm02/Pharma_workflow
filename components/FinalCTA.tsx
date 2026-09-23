import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <footer className="border-t border-line py-[70px]">
      <div className="wrap">
        <div className="max-w-[700px]">
          <h2 className="mb-3 font-serif text-[28px] font-medium leading-tight sm:text-[36px] lg:text-[42px]">
            Build once. Reuse intelligently. Review carefully.
          </h2>
          <p className="mb-8 text-[17px] leading-relaxed text-muted">
            Use AI to reduce repetitive production work while keeping pharmaceutical content
            under appropriate human review.
          </p>
          <Link
            href="/ai"
            className="inline-flex items-center gap-2 rounded-[9px] bg-ink px-[22px] py-3 text-[14.5px] font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Explore the AI workflow <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-[60px] rounded-[10px] border border-line bg-card p-5 text-[12.5px] leading-relaxed text-muted">
          This is an internal educational concept site. &ldquo;NOVALIS™&rdquo; and its brief are
          a fictional demo product, not a real pharmaceutical asset. AI assists production and
          quality checks; qualified human teams and the client retain responsibility for
          appropriate review and approval. AI does not independently approve promotional or
          medical content.
        </div>
      </div>
    </footer>
  );
}

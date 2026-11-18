// ============================================================
// /docs — ten documentation sections rendered from
// content/docs.ts, with a sticky scroll-spy sidebar.
// One status badge per section keeps the docs honest.
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DocNav from "@/components/docs/DocNav";
import { DOC_SECTIONS, type DocSection, type DocStatus } from "@/content/docs";

export const metadata: Metadata = { title: "Documentation" };

const TONE: Record<DocStatus, string> = {
  WRITTEN: "border-line-2 text-bone-dim",
  DRAFT: "border-blood/50 text-blood-2",
  PENDING: "border-line-2 text-bone-faint",
};

export default function DocsPage() {
  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Documentation"
            title="The field manual."
            sub="Everything documented about the game so far, organized by topic. Sections marked DRAFT describe the current design and will change; sections marked PENDING have nothing to document yet."
          />
        </div>
      </section>

      <div className="wrap mt-4 grid gap-12 pb-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        {/* sticky sidebar — scrolls with the page, pins below the header */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <DocNav sections={DOC_SECTIONS} />
        </aside>

        {/* the sections */}
        <div>
          {DOC_SECTIONS.map((section, i) => (
            <DocBlock key={section.id} section={section} first={i === 0} />
          ))}
        </div>
      </div>
    </>
  );
}

/** One documentation section: heading, badge, paragraphs, optional rows/list. */
function DocBlock({ section, first }: { section: DocSection; first: boolean }) {
  return (
    <section
      id={`doc-${section.id}`}
      className={`scroll-mt-24 border-t border-line py-12 ${first ? "border-t-0 pt-2" : ""}`}
    >
      <Reveal>
        <div className="mb-5 flex flex-wrap items-center gap-3.5">
          <span className="text-[11px] tracking-[0.26em] text-blood-2">{section.num}</span>
          <h2 className="font-head text-2xl text-bone">{section.title}</h2>
          <span
            className={`border px-2 py-1 text-[9px] leading-none tracking-[0.22em] ${TONE[section.status]}`}
          >
            {section.status}
          </span>
        </div>

        {section.paragraphs.map((p) => (
          <p key={p.slice(0, 32)} className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-bone-dim">
            {p}
          </p>
        ))}

        {section.rows && (
          <dl className="mt-6 max-w-2xl divide-y divide-line border border-line-2 bg-ash">
            {section.rows.map((r) => (
              <div key={r.term} className="flex justify-between gap-6 px-5 py-3 text-xs">
                <dt className="tracking-[0.16em] text-bone-faint">{r.term}</dt>
                <dd className="text-right text-bone">{r.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {section.list && (
          <ul className="mt-6 max-w-2xl space-y-2.5">
            {section.list.map((item) => (
              <li key={item} className="flex gap-3 text-[13.5px] leading-relaxed text-bone-dim">
                <span className="text-blood-2">◆</span> {item}
              </li>
            ))}
          </ul>
        )}

        {section.id === "credits" && (
          <Link
            href="/credits"
            className="mt-6 inline-block text-[11.5px] tracking-[0.2em] text-blood-2 transition-colors hover:text-bone"
          >
            OPEN THE CREDITS PAGE →
          </Link>
        )}
      </Reveal>
    </section>
  );
}
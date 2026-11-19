
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import DocNav from "@/components/docs/DocNav";
import { DOC_SECTIONS, type DocSection } from "@/content/docs";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "The official field manual for THE LAST CLEANING. Explore the game's story, controls, gameplay mechanics, and technical information.",
};

export default function DocsPage() {
  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Documentation"
            title="The field manual."
            sub="The official field manual for THE LAST CLEANING. Explore the game's story, gameplay mechanics, controls, technical information, and development."
          />
        </div>
      </section>

      <div className="wrap mt-4 grid gap-12 pb-10 lg:grid-cols-[240px_1fr] lg:gap-16">

        {/* Documentation sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <DocNav sections={DOC_SECTIONS} />
        </aside>

        {/* Documentation sections */}
        <div>
          {DOC_SECTIONS.map((section, i) => (
            <DocBlock
              key={section.id}
              section={section}
              first={i === 0}
            />
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * Individual documentation section.
 * Includes heading, status, paragraphs, optional table and list.
 */
function DocBlock({
  section,
  first,
}: {
  section: DocSection;
  first: boolean;
}) {
  return (
    <section
      id={`doc-${section.id}`}
      className={`scroll-mt-24 border-t border-line py-12 ${
        first ? "border-t-0 pt-2" : ""
      }`}
    >
      <Reveal>
        <div className="mb-5 flex flex-wrap items-center gap-3.5">
          <span className="text-[11px] tracking-[0.26em] text-blood-2">
            {section.num}
          </span>

          <h2 className="font-head text-2xl text-bone">
            {section.title}
          </h2>

          <span className="border border-line-2 px-2 py-1 text-[9px] leading-none tracking-[0.22em] text-bone-dim">
            {section.status}
          </span>
        </div>

        {/* Section paragraphs */}
        {section.paragraphs.map((paragraph, i) => (
          <p
            key={`${section.id}-${i}`}
            className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-bone-dim"
          >
            {paragraph}
          </p>
        ))}

        {/* Optional information table */}
        {section.rows && (
          <dl className="mt-6 max-w-2xl divide-y divide-line border border-line-2 bg-ash">
            {section.rows.map((row) => (
              <div
                key={row.term}
                className="flex justify-between gap-6 px-5 py-3 text-xs"
              >
                <dt className="tracking-[0.16em] text-bone-faint">
                  {row.term}
                </dt>

                <dd className="text-right text-bone">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* Optional feature list */}
        {section.list && (
          <ul className="mt-6 max-w-2xl space-y-2.5">
            {section.list.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[13.5px] leading-relaxed text-bone-dim"
              >
                <span className="text-blood-2">◆</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Credits page link */}
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

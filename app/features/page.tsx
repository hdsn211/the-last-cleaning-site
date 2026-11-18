// ============================================================
// /features — the full list, grouped by honest status.
// The two groups are DERIVED with .filter() from the single
// array in content/features.ts — no duplicate list to maintain.
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import StatusBadge from "@/components/ui/StatusBadge";
import { FEATURES, type Feature } from "@/content/features";

export const metadata: Metadata = { title: "Features" };

// Derived data — change a status in content/features.ts and the
// card moves between these groups automatically.
const IN_DEV = FEATURES.filter((f) => f.status === "IN DEVELOPMENT");
const PLANNED = FEATURES.filter((f) => f.status === "PLANNED");

export default function FeaturesPage() {
  return (
    <>
      {/* opening + status legend */}
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Features"
            title="How the night unfolds."
            sub="Every card carries its real development status. This list is updated as the build evolves — nothing is described as finished before it is."
          />
          <Reveal>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] text-bone-dim">
              <span className="flex items-center gap-2.5">
                <StatusBadge status="IN DEVELOPMENT" /> being built right now
              </span>
              <span className="flex items-center gap-2.5">
                <StatusBadge status="PLANNED" /> designed and scoped, not started
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* group 1 — in the current build */}
      <section className="mt-16 border-t border-line py-16">
        <div className="wrap">
          <Reveal>
            <p className="mb-8 text-[11px] tracking-[0.26em] text-blood-2">
              // IN THE CURRENT BUILD ({IN_DEV.length})
            </p>
          </Reveal>
          <Reveal>
            <FeatureGrid items={IN_DEV} offset={0} />
          </Reveal>
        </div>
      </section>

      {/* group 2 — on the design doc */}
      <section className="border-t border-line bg-coal py-16">
        <div className="wrap">
          <Reveal>
            <p className="mb-8 text-[11px] tracking-[0.26em] text-bone-faint">
              // ON THE DESIGN DOC ({PLANNED.length})
            </p>
          </Reveal>
          <Reveal>
            <FeatureGrid items={PLANNED} offset={IN_DEV.length} />
          </Reveal>
        </div>
      </section>

      {/* closing pointer */}
      <section className="border-t border-line py-16">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <p className="max-w-xl text-[13px] leading-relaxed text-bone-dim">
              Want to see how these look inside the house? The gallery holds a placeholder frame
              for every scene above — each waiting for its Unity capture.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[11.5px] tracking-[0.2em] text-blood-2 transition-colors hover:text-bone"
            >
              OPEN THE GALLERY <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/** Hairline feature grid — same card as the homepage preview, now shared. */
function FeatureGrid({ items, offset = 0 }: { items: Feature[]; offset?: number }) {
  return (
    <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <article
          key={f.title}
          className="flex flex-col gap-3.5 bg-coal p-7 transition-colors duration-300 hover:bg-smoke"
        >
          <div className="flex items-center justify-between">
            <f.icon size={26} strokeWidth={1.5} className="text-blood-2" aria-hidden />
            <StatusBadge status={f.status} />
          </div>
          <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-bone">
            {f.title}
          </h3>
          <p className="text-[13px] leading-relaxed text-bone-dim">{f.body}</p>
          <span className="mt-auto pt-2 text-[10px] tracking-[0.24em] text-bone-faint">
            {String(offset + i + 1).padStart(2, "0")}
          </span>
        </article>
      ))}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import StatusBadge from "@/components/ui/StatusBadge";
import { FEATURES, type Feature } from "@/content/features";

export const metadata: Metadata = { title: "Features" };

export default function FeaturesPage() {
  return (
    <>
      {/* Opening */}
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Features"
            title="What awaits inside."
            sub="Discover the gameplay, mechanics, and survival elements of THE LAST CLEANING. Every feature listed here reflects the actual game."
          />

          <Reveal>
            <div className="flex items-center gap-2 text-[11px] text-bone-dim">
              <StatusBadge status="RELEASED" />
              Available in the current game
            </div>
          </Reveal>
        </div>
      </section>

      {/* All available features */}
      <section className="mt-16 border-t border-line py-16">
        <div className="wrap">
          <Reveal>
            <p className="mb-8 text-[11px] tracking-[0.26em] text-blood-2">
              // GAME FEATURES ({FEATURES.length})
            </p>
          </Reveal>

          <Reveal>
            <FeatureGrid items={FEATURES} />
          </Reveal>
        </div>
      </section>

      {/* Gallery link */}
      <section className="border-t border-line py-16">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <p className="max-w-xl text-[13px] leading-relaxed text-bone-dim">
              Want to see the house for yourself? Explore the gallery
              and take a closer look at the world of THE LAST CLEANING.
            </p>
          </Reveal>

          <Reveal>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[11.5px] tracking-[0.2em] text-blood-2 transition-colors hover:text-bone"
            >
              EXPLORE THE GALLERY <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/** Feature cards */
function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <article
          key={f.title}
          className="flex flex-col gap-3.5 bg-coal p-7 transition-colors duration-300 hover:bg-smoke"
        >
          <div className="flex items-center justify-between">
            <f.icon
              size={26}
              strokeWidth={1.5}
              className="text-blood-2"
              aria-hidden
            />

            <StatusBadge status={f.status} />
          </div>

          <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-bone">
            {f.title}
          </h3>

          <p className="text-[13px] leading-relaxed text-bone-dim">
            {f.body}
          </p>

          <span className="mt-auto pt-2 text-[10px] tracking-[0.24em] text-bone-faint">
            {String(i + 1).padStart(2, "0")}
          </span>
        </article>
      ))}
    </div>
  );
}

// Features teaser — first five features + one "view all" card.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusBadge from "@/components/ui/StatusBadge";
import { FEATURES } from "@/content/features";

export default function FeaturesPreview() {
  return (
    <section className="border-t border-line bg-coal py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            label="Features"
            title="How the night unfolds."
            sub="Planned systems for the current design — every card carries its development status."
          />
        </Reveal>
        <Reveal>
          {/* Hairline grid trick: 1px gaps over a bg-line container = perfect table lines */}
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.slice(0, 5).map((f) => (
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
              </article>
            ))}
            <Link
              href="/features"
              className="group flex flex-col justify-between bg-coal p-7 transition-colors hover:bg-smoke"
            >
              <span className="title-glow font-head text-xl text-blood">All features</span>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[11.5px] tracking-[0.2em] text-blood-2 group-hover:text-bone">
                FULL LIST <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
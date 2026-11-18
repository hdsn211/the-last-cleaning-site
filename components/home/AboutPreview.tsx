// About teaser — the premise + one screenshot slot, links to /about.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ScreenshotFrame from "@/components/shared/ScreenshotFrame";
import { SCREENSHOTS } from "@/content/screenshots";

export default function AboutPreview() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHeading label="About the game" title="The job was simple." />
        </Reveal>
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:gap-14">
          <Reveal>
            <p className="text-lg leading-relaxed text-bone">
              You were hired to clean a quiet house before the evening ends. But when the lights
              go out, the job becomes something far more dangerous.
            </p>
            <p className="mt-5 text-[13.5px] leading-relaxed text-bone-dim">
              THE LAST CLEANING is a first-person survival horror game for PC and browser, in
              early development. Full premise, story details and development notes live on the
              About page.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-[11.5px] tracking-[0.2em] text-blood-2 transition-colors hover:text-bone"
            >
              READ MORE <ArrowRight size={13} />
            </Link>
          </Reveal>
          <Reveal>
            <ScreenshotFrame shot={SCREENSHOTS[0]} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
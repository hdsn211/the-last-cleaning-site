// ============================================================
// /about — premise, property, and the work-order prop card.
// Multi-section page: every <section> reuses the SectionHeading
// + Reveal rhythm. No new CSS, no new client components.
// ============================================================

import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ScreenshotFrame from "@/components/shared/ScreenshotFrame";
import { SCREENSHOTS } from "@/content/screenshots";

export const metadata: Metadata = { title: "About" };

// The honest split: what we can say today vs. what stays secret.
const RECORD = [
  "First-person survival horror, played solo.",
  "You are a hired cleaner with an ordinary job to finish.",
  "The power fails during the night.",
  "Something hostile begins to stalk the house.",
  "You clean, you hide, you look for a way out.",
];

const DARK = [
  "Who hired you — and why this house.",
  "What exactly walks the halls after the lights fail.",
  "What it wants, and what it reacts to.",
  "Whether the night can be survived. And by whom.",
];

export default function AboutPage() {
  return (
    <>
      {/* opening */}
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading label="About the game" title="The job was simple." />
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-bone">
              You were hired to clean a quiet house before the evening ends. But when the lights
              go out, the job becomes something far more dangerous.
            </p>
            <p className="mt-6 max-w-2xl text-[13.5px] leading-relaxed text-bone-dim">
              You are the cleaner. The property is a job like any other — a checklist, a bucket,
              a few rooms that need attention. THE LAST CLEANING follows one shift, from the
              first mop stroke to whatever is still standing when the power fails.
            </p>
            <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-bone-dim">
              We&apos;re keeping the rest quiet on purpose. What follows is everything we can say
              today — and the short list of what you&apos;ll have to find out in the house
              yourself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* the shift, so far + work-order prop */}
      <section className="mt-20 border-t border-line bg-coal py-20">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1.2fr_0.9fr] lg:gap-14">
          <Reveal>
            <p className="text-[11px] tracking-[0.26em] text-blood-2">// THE SHIFT, SO FAR</p>
            <p className="mt-5 text-[14px] leading-relaxed text-bone">
              It starts as routine: clean the rooms, finish before sunset, get paid. Then the
              fuse box gives out, the lights die, and the house stops feeling empty.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-bone-dim">
              Survival becomes the real objective — a weak flashlight, places to hide, and exits
              that no longer behave the way exits should.
            </p>
            <p className="mt-8 text-[11px] leading-relaxed text-bone-faint">
              // FURTHER DETAILS CLASSIFIED UNTIL THE FIRST PLAYABLE BUILD
            </p>
          </Reveal>
          <Reveal>
            <WorkOrder />
          </Reveal>
        </div>
      </section>

      {/* atmosphere placeholders */}
      <section className="border-t border-line py-20">
        <div className="wrap">
          <SectionHeading
            label="Atmosphere"
            title="Inside the property."
            sub="Placeholder frames until real captures are pulled from Unity."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {SCREENSHOTS.slice(0, 2).map((shot) => (
              <Reveal key={shot.id}>
                <ScreenshotFrame shot={shot} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* on the record / in the dark */}
      <section className="border-t border-line bg-coal py-20">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-[11px] tracking-[0.26em] text-blood-2">// ON THE RECORD</p>
            <ul className="mt-5 space-y-3">
              {RECORD.map((item) => (
                <li key={item} className="flex gap-3 text-[13.5px] leading-relaxed text-bone">
                  <span className="text-blood-2">◆</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <p className="text-[11px] tracking-[0.26em] text-bone-faint">// STAYS IN THE DARK</p>
            <ul className="mt-5 space-y-3">
              {DARK.map((item) => (
                <li key={item} className="flex gap-3 text-[13.5px] leading-relaxed text-bone-dim">
                  <span className="text-bone-faint">◆</span> {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[11px] tracking-[0.16em] text-bone-faint">
              // ANSWERS SHIP WITH THE GAME, NOT THE WEBSITE
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/** In-fiction prop: a work order recovered from the site office. Decorative. */
function WorkOrder() {
  const ROWS = [
    { term: "CLIENT", value: "[REDACTED]" },
    { term: "PROPERTY", value: "[REDACTED] · 2 STOREYS + BASEMENT" },
    { term: "SERVICE", value: "FULL CLEAN · PRE-EVENING" },
    { term: "SHIFT ENDS", value: "AT SUNSET" },
    { term: "PAY", value: "AGREED IN ADVANCE" },
    { term: "STATUS", value: "OVERDUE", red: true },
  ];

  return (
    <aside
      aria-label="In-fiction work order prop (decorative)"
      className="relative border border-line-2 bg-ash p-7"
    >
      <span
        aria-hidden
        className="absolute right-4 top-4 rotate-[8deg] border-2 border-blood/60 bg-void/80 px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.3em] text-[#c14b3f]"
      >
        OVERDUE
      </span>
      <header className="flex items-center justify-between border-b border-dashed border-line-2 pb-4 pr-24">
        <span className="text-xs font-semibold tracking-[0.22em] text-bone">WORK ORDER</span>
        <span className="text-xs font-semibold tracking-[0.22em] text-bone">Nº 0017</span>
      </header>
      {/* <dl> = description list: the semantic HTML for term → value pairs */}
      <dl className="mt-2">
        {ROWS.map((row) => (
          <div
            key={row.term}
            className="flex justify-between gap-4 border-b border-dashed border-line py-3 text-xs"
          >
            <dt className="tracking-[0.16em] text-bone-faint">{row.term}</dt>
            <dd
              className={`text-right ${
                row.red ? "tracking-[0.18em] text-blood-2" : "tracking-[0.06em] text-bone"
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[10.5px] text-bone-faint">
        // recovered from the site office — remaining pages missing
      </p>
    </aside>
  );
}

import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ScreenshotFrame from "@/components/shared/ScreenshotFrame";
import { SCREENSHOTS } from "@/content/screenshots";

export const metadata: Metadata = {
  title: "About",
};

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
      {/* OPENING */}
      <section className="pt-32 pb-20">
        <div className="wrap">
          <SectionHeading
            label="About the game"
            title="The job was simple."
            sub="One property. One shift. One night that changes everything."
          />

          <Reveal>
            <div className="max-w-3xl border-l-2 border-blood-dim pl-6 sm:pl-8">
              <p className="text-lg leading-relaxed text-bone sm:text-xl">
                You were hired to clean a quiet house before the evening
                ends. But when the lights go out, the job becomes
                something far more dangerous.
              </p>

              <p className="mt-6 text-[13.5px] leading-7 text-bone-dim">
                You are the cleaner. The property is a job like any
                other — a checklist, a bucket, a few rooms that need
                attention. THE LAST CLEANING follows one shift, from
                the first mop stroke to whatever is still standing
                when the power fails.
              </p>

              <p className="mt-4 text-[13.5px] leading-7 text-bone-dim">
                We are keeping the rest quiet on purpose. What follows
                is everything we can say today — and what you will
                have to discover inside the house yourself.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE SHIFT + WORK ORDER */}
      <section className="border-y border-line bg-coal py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

          <Reveal>
            <p className="text-[11px] tracking-[0.3em] text-blood-2">
              // THE SHIFT, SO FAR
            </p>

            <h2 className="mt-5 font-head text-3xl leading-tight text-bone sm:text-4xl">
              An ordinary job.
              <span className="block text-blood">
                An unfamiliar house.
              </span>
            </h2>

            <p className="mt-7 text-[14px] leading-7 text-bone">
              It starts as routine: clean the rooms, finish before
              sunset, get paid. Then the fuse box gives out, the
              lights die, and the house stops feeling empty.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-bone-dim">
              Survival becomes the real objective — a weak
              flashlight, places to hide, and exits that no longer
              behave the way exits should.
            </p>

            <div className="mt-10 border-t border-line pt-5">
              <p className="text-[10px] tracking-[0.2em] text-bone-faint">
                CURRENT OBJECTIVE
              </p>
              <p className="mt-2 text-sm tracking-wider text-blood-2">
                FINISH THE JOB. GET OUT.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <WorkOrder />
          </Reveal>

        </div>
      </section>

      {/* ATMOSPHERE */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="wrap">

          <SectionHeading
            label="Atmosphere"
            title="Inside the property."
            sub="A closer look at the environment of THE LAST CLEANING."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {SCREENSHOTS.slice(0, 2).map((shot, i) => (
              <Reveal key={shot.id}>
                <ScreenshotFrame
                  shot={shot}
                  priority={i === 0}
                />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ON THE RECORD / STAYS IN THE DARK */}
      <section className="bg-coal py-20 md:py-28">
        <div className="wrap">

          <SectionHeading
            label="What we know"
            title="Some things stay hidden."
            sub="The facts are on the record. Everything else stays inside the house."
          />

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">

            <Reveal>
              <div className="border-t border-blood-dim pt-5">
                <p className="text-[11px] tracking-[0.28em] text-blood-2">
                  // ON THE RECORD
                </p>

                <ul className="mt-7 space-y-5">
                  {RECORD.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[13.5px] leading-relaxed text-bone"
                    >
                      <span className="text-blood-2">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-line-2 pt-5">
                <p className="text-[11px] tracking-[0.28em] text-bone-faint">
                  // STAYS IN THE DARK
                </p>

                <ul className="mt-7 space-y-5">
                  {DARK.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[13.5px] leading-relaxed text-bone-dim"
                    >
                      <span className="text-bone-faint">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-10 border-t border-line pt-5 text-[10px] tracking-[0.2em] text-bone-faint">
                  // ANSWERS SHIP WITH THE GAME, NOT THE WEBSITE
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}

/* IN-FICTION WORK ORDER */
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
      aria-label="In-fiction work order prop"
      className="relative border border-line-2 bg-ash p-6 shadow-2xl sm:p-8"
    >
      {/* Document header */}
      <div className="mb-7 flex items-center justify-between border-b border-dashed border-line-2 pb-5 pr-20">
        <div>
          <p className="text-[9px] tracking-[0.3em] text-bone-faint">
            PROPERTY MANAGEMENT
          </p>
          <p className="mt-2 text-sm font-semibold tracking-[0.2em] text-bone">
            WORK ORDER
          </p>
        </div>

        <span className="text-xs tracking-widest text-bone-faint">
          Nº 0017
        </span>
      </div>

      {/* Overdue stamp */}
      <span
        aria-hidden="true"
        className="absolute right-4 top-7 rotate-[8deg] border-2 border-blood/60 bg-void/80 px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.3em] text-[#c14b3f] sm:right-6"
      >
        OVERDUE
      </span>

      {/* Document details */}
      <dl>
        {ROWS.map((row) => (
          <div
            key={row.term}
            className="flex flex-wrap justify-between gap-3 border-b border-dashed border-line py-4 text-[11px]"
          >
            <dt className="tracking-[0.16em] text-bone-faint">
              {row.term}
            </dt>

            <dd
              className={`text-right ${
                row.red
                  ? "font-semibold tracking-[0.18em] text-blood-2"
                  : "tracking-[0.06em] text-bone"
              }`}
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex items-end justify-between">
        <p className="max-w-[200px] text-[10px] leading-relaxed text-bone-faint">
          // RECOVERED FROM THE SITE OFFICE
          <br />
          REMAINING PAGES MISSING
        </p>

        <span className="font-head text-2xl text-blood/40">
          TLC
        </span>
      </div>
    </aside>
  );
}

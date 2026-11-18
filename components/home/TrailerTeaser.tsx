// Trailer teaser — NO SIGNAL placeholder slot + the planned edit beats.

import { Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CornerBrackets } from "@/components/shared/ScreenshotFrame";
import { SITE } from "@/content/site";

export default function TrailerTeaser() {
  return (
    <section className="border-t border-line bg-coal py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            label="Trailer"
            title="First look."
            sub="A 45–60 second trailer is planned once in-game footage is captured. Nothing is published yet — this slot will hold the real embed."
          />
        </Reveal>
        <Reveal>
          <div className="relative mx-auto max-w-4xl border border-line-2">
            <div className="trailer-slot relative flex aspect-video flex-col items-center justify-center gap-3">
              <p className="font-osd text-5xl tracking-[0.12em] text-[#3c3a41]">NO SIGNAL</p>
              <p className="text-[11px] tracking-[0.28em] text-[#5a5548]">
                TRAILER PLACEHOLDER — VIDEO EMBED SLOT
              </p>
              <Button href="/trailer" variant="ghost" icon={<Play size={12} className="fill-current" />} className="mt-2">
                Trailer page
              </Button>
            </div>
            <span className="absolute left-3 top-3 border border-blood/40 bg-void/75 px-2 py-1 text-[9.5px] tracking-[0.2em] text-bone-dim">
              POSTER · PLACEHOLDER
            </span>
            <CornerBrackets />
          </div>
        </Reveal>
        <Reveal>
          <div className="mx-auto mt-10 max-w-4xl">
            <p className="mb-3 text-[10.5px] tracking-[0.24em] text-bone-faint">
              PLANNED EDIT · 45–60s · NOT YET FILMED
            </p>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-3">
              {SITE.trailerBeats.map((beat, i) => (
                <li key={beat} className="bg-coal px-4 py-3.5 text-[11px] tracking-[0.1em] text-bone-dim">
                  <span className="mr-2 text-blood-2">{String(i + 1).padStart(2, "0")}</span>
                  {beat}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
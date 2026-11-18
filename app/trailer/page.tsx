
import type { Metadata } from "next";
import { Play } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CornerBrackets } from "@/components/shared/ScreenshotFrame";

export const metadata: Metadata = {
  title: "Trailer",
  description: "Watch the official trailer for THE LAST CLEANING.",
};

export default function TrailerPage() {
  return (
    <>
      <section className="pt-32">
        <div className="wrap">

          {/* Page heading */}
          <Reveal>
            <SectionHeading
              label="Trailer"
              title="First look."
              sub="Step inside. Complete the job. Make it out alive."
            />
          </Reveal>

          {/* Cinematic video player */}
          <Reveal>
            <div className="relative mx-auto mt-12 max-w-5xl border border-line-2 bg-black shadow-2xl">

              {/* Top information bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-[10px] tracking-[0.2em] text-white/50">
                <span>THE LAST CLEANING</span>
                <span className="text-red-500">● NOW PLAYING</span>
              </div>

              {/* Video */}
              <div className="relative aspect-video bg-black">
                <video
                  className="h-full w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/videos/trailer.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support video playback.
                </video>
              </div>

              {/* Bottom information bar */}
              <div className="flex flex-col justify-between gap-2 border-t border-white/10 bg-white/[0.03] px-4 py-4 font-mono text-[10px] tracking-widest text-white/40 sm:flex-row">
                <span>OFFICIAL GAME TRAILER</span>
                <span>UNITY 6 / SURVIVAL HORROR</span>
              </div>

              <CornerBrackets />
            </div>
          </Reveal>

          {/* Trailer information */}
          <Reveal>
            <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2">

              <div>
                <p className="font-mono text-xs tracking-[0.25em] text-blood-2">
                  ABOUT THE GAME
                </p>

                <h2 className="mt-3 text-2xl font-bold uppercase tracking-tight text-bone">
                  One last cleaning job.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-bone-dim">
                Enter a dark and isolated environment where a simple
                cleaning job turns into a nightmare. Explore the
                surroundings, uncover what happened, and survive
                whatever is waiting in the darkness.
              </p>

            </div>
          </Reveal>

          {/* End transmission */}
          <div className="mt-16 flex items-center gap-3 border-t border-line pt-6 font-mono text-[10px] tracking-widest text-bone-faint">
            <Play size={12} className="text-blood-2" />
            <span>END OF TRANSMISSION</span>
          </div>

        </div>
      </section>
    </>
  );
}

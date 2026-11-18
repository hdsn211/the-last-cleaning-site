
import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CornerBrackets } from "@/components/shared/ScreenshotFrame";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Trailer",
};

export default function TrailerPage() {
  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Official Trailer"
            title="First look."
            sub="Experience the nightmare. Watch the official trailer of The Last Cleaning."
          />

          <Reveal>
            <div className="relative mx-auto max-w-5xl border border-line-2">
              <div className="relative aspect-video bg-black">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-contain"
                  aria-label={`${SITE.title} official game trailer`}
                >
                  <source
                    src="/videos/trailer.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support HTML5 video.
                </video>

                <CornerBrackets />
              </div>

              <span className="absolute left-3 top-3 border border-blood/40 bg-void/75 px-2 py-1 text-[9.5px] tracking-[0.2em] text-bone-dim pointer-events-none">
                OFFICIAL TRAILER
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] tracking-[0.18em] text-bone-faint">
              <span>// THE LAST CLEANING</span>
              <span className="text-blood-2">● REC</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-20 border-t border-line bg-coal py-16">
        <div className="wrap">
          <Reveal>
            <p className="mb-6 text-[11px] tracking-[0.26em] text-bone-faint">
              // ABOUT THE GAME
            </p>

            <h2 className="font-osd text-2xl tracking-[0.12em] text-bone">
              ONE LAST JOB. ONE LONG NIGHT.
            </h2>

            <p className="mt-5 max-w-2xl text-[12.5px] leading-relaxed text-bone-dim">
              The Last Cleaning is a first-person survival horror game
              currently in development using Unity 6. Clean the house,
              keep the lights on, and discover what happens when the
              darkness starts changing.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

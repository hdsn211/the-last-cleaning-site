
import type { Metadata } from "next";
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
          <SectionHeading
            label="Trailer"
            title="First look."
            sub="The official trailer. Captured from the world of THE LAST CLEANING."
          />

          <Reveal>
            <div className="relative mx-auto mt-12 max-w-5xl border border-line-2 bg-black shadow-2xl">

              {/* Top information bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-[10px] tracking-[0.2em] text-white/50">
                <span>THE LAST CLEANING</span>
                <span className="text-red-500">● OFFICIAL TRAILER</span>
              </div>

              {/* Actual MP4 video */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  className="absolute inset-0 h-full w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster=""
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

            <p className="mt-4 text-center text-[10.5px] tracking-[0.18em] text-bone-faint">
              // OFFICIAL TRAILER · THE LAST CLEANING
            </p>
          </Reveal>
        </div>
      </section>

      {/* Trailer sequence */}
      <section className="mt-20 border-t border-line bg-coal py-16">
        <div className="wrap">

          <Reveal>
            <p className="mb-8 text-[11px] tracking-[0.26em] text-bone-faint">
              // THE TRAILER SEQUENCE
            </p>
          </Reveal>

          <Reveal>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-3">
              {[
                "Black screen — unsettling ambience",
                "The cleaner arrives at the property",
                "Cleaning and exploration",
                "The power goes out",
                "Basement investigation",
                "A glimpse in the darkness",
                "Stalking — flashlight and bat defense",
                "The escape sequence",
                "Title reveal",
              ].map((beat, i) => (
                <li
                  key={beat}
                  className="bg-coal px-4 py-3.5 text-[11px] tracking-[0.1em] text-bone-dim"
                >
                  <span className="mr-2 text-blood-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {beat}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <p className="mt-8 max-w-2xl text-[12.5px] leading-relaxed text-bone-dim">
              A first-person survival horror experience.
              One ordinary job. One long night.
              Nothing stays ordinary for long.
            </p>
          </Reveal>

        </div>
      </section>
    </>
  );
}

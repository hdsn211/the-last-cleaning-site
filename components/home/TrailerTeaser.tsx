
import { Play } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { CornerBrackets } from "@/components/shared/ScreenshotFrame";

export default function TrailerTeaser() {
  return (
    <section className="border-t border-line bg-coal py-20">
      <div className="wrap">

        {/* Section heading */}
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[11px] tracking-[0.26em] text-blood-2">
                // OFFICIAL TRAILER
              </p>

              <h2 className="font-head text-3xl text-blood sm:text-4xl">
                First look.
              </h2>

              <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-bone-dim">
                A glimpse into the world of THE LAST CLEANING.
                One ordinary job. One long night.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Video player */}
        <Reveal>
          <div className="relative mx-auto max-w-5xl border border-line-2 bg-black shadow-2xl">

            {/* Top information bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-[10px] tracking-[0.2em] text-white/50">
              <span>THE LAST CLEANING</span>
              <span className="text-red-500">
                ● OFFICIAL TRAILER
              </span>
            </div>

            {/* Actual video */}
            <div className="relative aspect-video w-full bg-black">
              <video
                className="absolute inset-0 h-full w-full object-contain"
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

          {/* Trailer page link */}
          <div className="mt-6 flex justify-center">
            <Button
              href="/trailer"
              variant="ghost"
              icon={<Play size={12} className="fill-current" />}
            >
              Watch full trailer
            </Button>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

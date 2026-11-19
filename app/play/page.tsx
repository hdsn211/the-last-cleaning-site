
import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Play",
};

export default function PlayPage() {
  const url = SITE.release.webglBuildUrl;

  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Play"
            title="Enter the house."
            sub="Experience THE LAST CLEANING directly in your browser. No downloads or installation required."
          />

          <Reveal>
            {url ? (
              <div className="relative mx-auto max-w-5xl overflow-hidden border border-line-2 bg-black">
                <iframe
                  src={url}
                  title={`${SITE.title} — browser game`}
                  className="aspect-video w-full"
                  allow="autoplay; fullscreen; gamepad"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative mx-auto flex aspect-video max-w-5xl flex-col items-center justify-center gap-5 border border-line-2 bg-black">
                <p className="font-osd text-4xl tracking-[0.15em] text-blood-2 sm:text-6xl">
                  THE LAST CLEANING
                </p>

                <p className="text-center text-[11px] tracking-[0.2em] text-bone-dim">
                  BROWSER GAME
                </p>

                <p className="text-center text-xs text-bone-faint">
                  Game access is currently unavailable.
                </p>
              </div>
            )}
          </Reveal>

          <Reveal>
            <p className="mt-5 text-center text-[10px] tracking-[0.2em] text-bone-faint">
              // PLAY DIRECTLY IN YOUR BROWSER
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-20 border-t border-line py-16">
        <div className="wrap">
          <Reveal>
            <p className="mb-8 text-[11px] tracking-[0.26em] text-blood-2">
              // BEFORE YOU ENTER
            </p>

            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              <article className="bg-coal p-7">
                <h3 className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-bone">
                  DESKTOP EXPERIENCE
                </h3>
                <p className="text-[13px] leading-relaxed text-bone-dim">
                  For the best experience, play using a desktop computer with
                  an updated browser.
                </p>
              </article>

              <article className="bg-coal p-7">
                <h3 className="mb-3 text-[12px] font-semibold tracking-[0.18em] text-bone">
                  HEADPHONES RECOMMENDED
                </h3>
                <p className="text-[13px] leading-relaxed text-bone-dim">
                  Experience the atmosphere, sounds, and unsettling moments
                  of the house with headphones.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

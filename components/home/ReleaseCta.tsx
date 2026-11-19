
// ============================================================
// RELEASE CTA — Official browser release.
// Browser-only distribution.
// ============================================================

import Link from "next/link";
import { Monitor, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/content/site";

export default function ReleaseCta() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <div className="border border-line-2 border-t-2 border-t-blood-dim bg-coal bg-[radial-gradient(640px_300px_at_50%_0%,rgba(90,20,20,0.13),transparent_70%)] px-6 py-14 text-center">

            <p className="text-[11.5px] tracking-[0.24em] text-blood-2">
              RELEASE STATUS: {SITE.status}
            </p>

            <h2 className="title-glow mt-5 font-head text-3xl text-blood md:text-4xl">
              The night is waiting.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13.5px] leading-relaxed text-bone-dim">
              One last job. One long night.
              Experience THE LAST CLEANING, a first-person
              survival horror game inspired by PSX-era horror.
              Play directly through your browser.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/play"
                className="group inline-flex min-w-[260px] flex-col items-center gap-3 border border-[#8c2c2a] bg-blood-deep px-10 py-9 text-[#eeddd2] transition-all duration-200 hover:-translate-y-1 hover:bg-[#742121] hover:shadow-[0_10px_26px_rgba(120,28,26,0.22)]"
              >
                <Monitor
                  size={25}
                  strokeWidth={1.5}
                />

                <span className="font-head text-lg">
                  Play in browser
                </span>

                <span className="flex items-center gap-2 text-[10px] tracking-[0.2em]">
                  PLAY THE GAME
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-[12.5px] leading-relaxed text-bone-dim">
              <strong className="tracking-[0.08em] text-bone">
                Platform:
              </strong>{" "}
              Desktop browser · WebGL. A supported browser and
              compatible graphics hardware are required.
            </p>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

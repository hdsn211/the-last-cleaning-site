
// Release CTA — browser-only coming soon card.

import Link from "next/link";
import { Monitor } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ReleaseCta() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <div className="border border-line-2 border-t-2 border-t-blood-dim bg-coal bg-[radial-gradient(640px_300px_at_50%_0%,rgba(90,20,20,0.13),transparent_70%)] px-6 py-14 text-center">

            <p className="text-[11.5px] tracking-[0.24em] text-blood-2">
              RELEASE STATUS: COMING SOON
            </p>

            <h2 className="title-glow mt-5 font-head text-3xl text-blood md:text-4xl">
              Enter the night.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13.5px] leading-relaxed text-bone-dim">
              THE LAST CLEANING is being prepared for browser
              release. No downloads or installations required.
              Play directly through your browser when it becomes
              available.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="/play"
                className="group relative flex min-w-[280px] flex-col items-center gap-2 border border-line-2 bg-ash px-10 py-9 transition-colors hover:border-blood-dim"
              >
                <Monitor
                  size={22}
                  strokeWidth={1.5}
                  className="mb-1 text-blood-2"
                  aria-hidden="true"
                />

                <span className="font-head text-lg text-bone">
                  Play in browser
                </span>

                <span className="text-[10.5px] tracking-[0.2em] text-bone-dim">
                  BROWSER · HTML5 / WEBGL
                </span>

                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 border-2 border-blood/60 bg-void/80 px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.3em] text-[#c14b3f] transition-transform duration-200 group-hover:-rotate-3"
                >
                  COMING SOON
                </span>
              </Link>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-[12.5px] leading-relaxed text-bone-dim">
              <strong className="tracking-[0.08em] text-bone">
                Compatibility:
              </strong>{" "}
              Designed for modern desktop browsers supporting
              WebGL 2. Mobile compatibility is not guaranteed.
            </p>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

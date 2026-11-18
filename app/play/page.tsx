// ============================================================
// /play — browser-play page. Two states decided by ONE value:
//   webglBuildUrl null → honest STANDBY slot
//   set                → WebGLFrame mounts the real embed
// Compatibility guidance applies in both states.
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Gauge, Monitor, Smartphone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CornerBrackets } from "@/components/shared/ScreenshotFrame";
import WebGLFrame from "@/components/play/WebGLFrame";
import { SITE } from "@/content/site";

export const metadata: Metadata = { title: "Play" };

const COMPAT = [
  { icon: Monitor,    title: "DESKTOP BROWSER",  body: "Chrome, Edge or Firefox, up to date. The build runs entirely in the browser — nothing installs." },
  { icon: Cpu,        title: "WEBGL 2 REQUIRED", body: "Any GPU from the last decade qualifies. If the canvas stays black, update your graphics drivers." },
  { icon: Gauge,      title: "FIRST LOAD",       body: "Unity WebGL builds are large — the first launch takes a moment. After that it's cached." },
  { icon: Smartphone, title: "MOBILE",           body: "Not guaranteed. Phone browsers are not a supported target for this build — play on desktop." },
];

export default function PlayPage() {
  const url = SITE.release.webglBuildUrl;

  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Play"
            title="Play in browser."
            sub={
              url
                ? "The browser build, streamed straight from itch.io. Nothing installs — close the tab and the night is over."
                : "A Unity WebGL build is planned for itch.io. Until it exists, this page holds an honest standby slot — there is nothing to play yet, and the site won't pretend otherwise."
            }
          />

          {url ? (
            <Reveal>
              <WebGLFrame src={url} title={`${SITE.title} — browser build`} />
              <p className="mt-4 text-center text-[10.5px] tracking-[0.18em] text-bone-faint">
                // OFFICIAL BROWSER BUILD · HOSTED ON ITCH.IO
              </p>
            </Reveal>
          ) : (
            <Reveal>
              <div className="relative mx-auto max-w-5xl border border-line-2">
                <div className="trailer-slot relative flex aspect-video flex-col items-center justify-center gap-3">
                  <p className="font-osd text-6xl tracking-[0.12em] text-[#3c3a41]">STANDBY</p>
                  <p className="text-[11px] tracking-[0.28em] text-[#5a5548]">
                    WEBGL BUILD SLOT — NO PLAYABLE BUILD YET
                  </p>
                </div>
                <span className="absolute left-3 top-3 border border-blood/40 bg-void/75 px-2 py-1 text-[9.5px] tracking-[0.2em] text-bone-dim">
                  EMBED · PLACEHOLDER
                </span>
                <CornerBrackets />
              </div>
              <p className="mt-4 text-center text-[10.5px] tracking-[0.18em] text-bone-faint">
                // THE EMBED MOUNTS AUTOMATICALLY ONCE webglBuildUrl IS SET
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* compatibility — identical layout in both states */}
      <section className="mt-20 border-t border-line py-16">
        <div className="wrap">
          <Reveal>
            <p className="mb-8 text-[11px] tracking-[0.26em] text-blood-2">
              // BROWSER COMPATIBILITY {url ? "· TROUBLESHOOTING" : "· WHAT TO EXPECT"}
            </p>
          </Reveal>
          <Reveal>
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {COMPAT.map((c) => (
                <article key={c.title} className="flex flex-col gap-3 bg-coal p-6">
                  <c.icon size={22} strokeWidth={1.5} className="text-blood-2" aria-hidden />
                  <h3 className="text-[11.5px] font-semibold tracking-[0.18em] text-bone">
                    {c.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-bone-dim">{c.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-8 text-[12.5px] leading-relaxed text-bone-dim">
              Build won&apos;t start? Disable content blockers for this page, confirm WebGL is
              enabled (chrome://gpu), and try another browser. A downloadable Windows version is
              also planned — see{" "}
              <Link href="/download" className="text-blood-2 hover:text-bone">Download</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
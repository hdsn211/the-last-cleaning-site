// ============================================================
// /trailer — renders the REAL embed when SITE.release.trailerUrl
// is set, or the honest NO SIGNAL slot while it's null.
// Server component: no state needed — the content file decides.
// ============================================================

import type { Metadata } from "next";
import { Play } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CornerBrackets } from "@/components/shared/ScreenshotFrame";
import { SITE } from "@/content/site";

export const metadata: Metadata = { title: "Trailer" };

/**
 * Accepts common YouTube URL shapes and returns a privacy-friendly
 * embed URL. Anything else (Vimeo, self-hosted) passes through
 * unchanged — paste an embed-ready URL and it just works.
 */
function toEmbedUrl(url: string): string {
  const yt =
    url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
  return url;
}

export default function TrailerPage() {
  const url = SITE.release.trailerUrl;

  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Trailer"
            title="First look."
            sub={
              url
                ? "The official trailer, captured from in-game footage."
                : "A 45–60 second trailer is planned once in-game footage is captured. Nothing is published yet — this slot will hold the real embed."
            }
          />

          {url ? (
            /* ---------- REAL TRAILER STATE ---------- */
            <Reveal>
              <div className="relative mx-auto max-w-5xl border border-line-2">
                <div className="relative aspect-video">
                  <iframe
                    src={toEmbedUrl(url)}
                    title={`${SITE.title} — official trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <CornerBrackets />
              </div>
              <p className="mt-4 text-center text-[10.5px] tracking-[0.18em] text-bone-faint">
                // OFFICIAL TRAILER · CAPTURED FROM THE UNITY BUILD
              </p>
            </Reveal>
          ) : (
            /* ---------- HONEST PLACEHOLDER STATE ---------- */
            <Reveal>
              <div className="relative mx-auto max-w-5xl border border-line-2">
                <div className="trailer-slot relative flex aspect-video flex-col items-center justify-center gap-3">
                  <p className="font-osd text-6xl tracking-[0.12em] text-[#3c3a41]">NO SIGNAL</p>
                  <p className="text-[11px] tracking-[0.28em] text-[#5a5548]">
                    TRAILER PLACEHOLDER — VIDEO EMBED SLOT
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-[10px] tracking-[0.2em] text-bone-faint">
                    <Play size={11} className="fill-current" /> EMBED ACTIVATES AUTOMATICALLY
                    ONCE A URL IS SET
                  </p>
                </div>
                <span className="absolute left-3 top-3 border border-blood/40 bg-void/75 px-2 py-1 text-[9.5px] tracking-[0.2em] text-bone-dim">
                  POSTER · PLACEHOLDER
                </span>
                <CornerBrackets />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* planned edit — shown until the real trailer replaces it */}
      <section className="mt-20 border-t border-line bg-coal py-16">
        <div className="wrap">
          <Reveal>
            <p className="mb-8 text-[11px] tracking-[0.26em] text-bone-faint">
              {url ? "// THE ORIGINAL PLANNED EDIT" : "// PLANNED EDIT · 45–60s · NOT YET FILMED"}
            </p>
          </Reveal>
          <Reveal>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-3">
              {SITE.trailerBeats.map((beat, i) => (
                <li
                  key={beat}
                  className="bg-coal px-4 py-3.5 text-[11px] tracking-[0.1em] text-bone-dim"
                >
                  <span className="mr-2 text-blood-2">{String(i + 1).padStart(2, "0")}</span>
                  {beat}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal>
            <p className="mt-8 max-w-2xl text-[12.5px] leading-relaxed text-bone-dim">
              This beat sheet is the plan, not footage — every shot above will be recorded inside
              the Unity build. No fabricated gameplay will appear on this site, ever.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
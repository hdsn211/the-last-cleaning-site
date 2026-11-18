// ============================================================
// /download — Windows build page. Every region is an
// INDEPENDENT data gate driven by content/site.ts:
//   button       ← windowsDownloadUrl (no URL = no button, ever)
//   version/size ← windowsVersion / windowsSize
//   requirements ← windowsRequirements
// The page cannot show specs or links you haven't provided.
// ============================================================

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, HardDrive } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/content/site";

export const metadata: Metadata = { title: "Download" };

export default function DownloadPage() {
  const url = SITE.release.windowsDownloadUrl;
  const version = SITE.release.windowsVersion;
  const size = SITE.release.windowsSize;
  const reqs = SITE.release.windowsRequirements;

  // Derived data — only the rows that actually have a value.
  // The "row is …" part is a TYPE PREDICATE: it tells TypeScript
  // "after this filter, value is definitely a string", so the
  // JSX below can render it without null checks.
  const META = [
    { label: "VERSION", value: version },
    { label: "FILE SIZE", value: size },
  ].filter((row): row is { label: string; value: string } => row.value !== null);

  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Download"
            title="Get the game."
            sub={
              url
                ? "The Windows build, distributed via itch.io. Only ever download from this page or our itch.io page — beware of reuploads."
                : "No build has been released. The panel below activates on release day — nothing here downloads yet, and it won't pretend to."
            }
          />
        </div>
      </section>

      {/* the download panel */}
      <section className="mt-16 border-t border-line py-16">
        <div className="wrap">
          <Reveal>
            <div className="border border-line-2 border-t-2 border-t-blood-dim bg-coal bg-[radial-gradient(640px_300px_at_50%_0%,rgba(90,20,20,0.13),transparent_70%)] px-6 py-14 text-center">
              <p className="text-[11.5px] tracking-[0.24em] text-blood-2">
                RELEASE STATUS: {url ? "AVAILABLE" : "NOT YET AVAILABLE"}
              </p>
              <h2 className="title-glow mt-5 font-head text-3xl text-blood md:text-4xl">
                Windows build
              </h2>

              <div className="mt-10 flex justify-center">
                {url ? (
                  /* ---------- REAL DOWNLOAD ---------- */
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-[#8c2c2a] bg-blood-deep px-10 py-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#eeddd2] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#742121] hover:shadow-[0_10px_26px_rgba(120,28,26,0.22)]"
                  >
                    <Download size={14} />
                    Download for Windows
                  </a>
                ) : (
                  /* ---------- HONEST PENDING STATE ---------- */
                  <div className="relative flex min-w-[280px] flex-col items-center gap-2 border border-line-2 bg-ash px-10 py-9">
                    <HardDrive size={22} strokeWidth={1.5} className="mb-1 text-blood-2" aria-hidden />
                    <span className="font-head text-lg text-bone">Download for Windows</span>
                    <span className="text-[10.5px] tracking-[0.2em] text-bone-dim">
                      WINDOWS 10 / 11 · 64-BIT
                    </span>
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 border-2 border-blood/60 bg-void/80 px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.3em] text-[#c14b3f]"
                    >
                      COMING SOON
                    </span>
                  </div>
                )}
              </div>

              {/* metadata rows — each appears only when its data exists */}
              {META.length > 0 ? (
                <dl className="mx-auto mt-10 grid max-w-md gap-px border border-line bg-line">
                  {META.map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-6 bg-coal px-5 py-3.5 text-xs"
                    >
                      <dt className="tracking-[0.16em] text-bone-faint">{row.label}</dt>
                      <dd className="tracking-[0.06em] text-bone">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-10 text-[11px] tracking-[0.16em] text-bone-faint">
                  // VERSION AND FILE SIZE WILL APPEAR HERE ONCE THE FIRST BUILD IS PACKAGED
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* system requirements — a real table only when specs exist */}
      <section className="border-t border-line bg-coal py-16">
        <div className="wrap">
          <Reveal>
            <p className="mb-8 text-[11px] tracking-[0.26em] text-bone-faint">
              // SYSTEM REQUIREMENTS {reqs ? "" : "· PENDING"}
            </p>
          </Reveal>
          {reqs ? (
            <Reveal>
              <dl className="mx-auto max-w-2xl divide-y divide-line border border-line-2 bg-ash">
                {reqs.map((r) => (
                  <div key={r.label} className="flex justify-between gap-6 px-5 py-3.5 text-xs">
                    <dt className="tracking-[0.16em] text-bone-faint">{r.label}</dt>
                    <dd className="text-right text-bone">{r.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mx-auto mt-4 max-w-2xl text-[11px] text-bone-faint">
                // PROVIDED BY THE DEVELOPER · VERIFIED ON THE RELEASE BUILD
              </p>
            </Reveal>
          ) : (
            <Reveal>
              <p className="max-w-2xl text-[13px] leading-relaxed text-bone-dim">
                The PSX-inspired art direction keeps hardware demands modest — any standard modern
                PC should run it. A detailed minimum/recommended specification table will be
                published here <strong className="text-bone">only</strong> with real figures from
                the release build — never guesses.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* distribution note */}
      <section className="border-t border-line py-16">
        <div className="wrap flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <p className="max-w-xl text-[13px] leading-relaxed text-bone-dim">
              Distribution is planned for itch.io — browser and Windows. Until then, the closest
              thing to playing is the standby slot on{" "}
              <Link href="/play" className="text-blood-2 hover:text-bone">the Play page</Link>.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/play"
              className="inline-flex items-center gap-2 text-[11.5px] tracking-[0.2em] text-blood-2 transition-colors hover:text-bone"
            >
              PLAY IN BROWSER <ArrowRight size={13} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
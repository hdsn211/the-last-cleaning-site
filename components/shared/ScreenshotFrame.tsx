// ============================================================
// SCREENSHOT FRAME — renders one entry from content/screenshots.
// src set   → next/image with the real capture
// src null  → labeled placeholder art (seeded, deterministic)
// This single component is the entire placeholder system:
// when real screenshots arrive, you edit ONLY the content file.
// ============================================================

import Image from "next/image";
import type { Screenshot } from "@/content/screenshots";

/** Red viewfinder corners, reused by other components too. */
export function CornerBrackets() {
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 border-l border-t border-blood/70" />
      <span aria-hidden className="pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 border-r border-t border-blood/70" />
      <span aria-hidden className="pointer-events-none absolute bottom-2.5 left-2.5 h-4 w-4 border-b border-l border-blood/70" />
      <span aria-hidden className="pointer-events-none absolute bottom-2.5 right-2.5 h-4 w-4 border-b border-r border-blood/70" />
    </>
  );
}

type Props = { shot: Screenshot; priority?: boolean; className?: string };

export default function ScreenshotFrame({ shot, priority = false, className = "" }: Props) {
  return (
    <figure
      className={`group overflow-hidden border border-line-2 bg-void transition-colors duration-300 hover:border-blood-dim ${className}`}
    >
      <div className="relative aspect-video overflow-hidden bg-[#0a090d]">
        {shot.src ? (
          <Image
            src={shot.src}
            alt={shot.label}
            fill
            priority={priority}
            sizes="(min-width:1024px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:brightness-125"
          />
        ) : (
          <PlaceholderArt seed={shot.id} />
        )}
        <span className="absolute left-3 top-3 z-10 border border-blood/40 bg-void/75 px-2 py-1 text-[9.5px] tracking-[0.2em] text-bone-dim">
          {shot.src ? "SCREENSHOT" : "PLACEHOLDER"}
        </span>
        <CornerBrackets />
      </div>
      <figcaption className="flex items-baseline justify-between gap-3 border-t border-line px-3 py-2.5">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-bone">
          {shot.label}
        </span>
        <span className="text-[10px] text-bone-faint">{shot.note}</span>
      </figcaption>
    </figure>
  );
}

/**
 * Dim interior placeholder — varies slightly per screenshot id.
 * IMPORTANT: seeded from the id's characters, NOT Math.random().
 * The server and the browser must produce IDENTICAL markup, and
 * randomness breaks that (a "hydration mismatch" error). Deterministic = safe.
 */
function PlaceholderArt({ seed }: { seed: string }) {
  const h = [...seed].reduce((a, c) => a + c.charCodeAt(0), 0);
  const gx = 22 + (h % 56);
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 160 90"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect width="160" height="90" fill="#0a090d" />
      <ellipse cx={gx + 10} cy="36" rx="44" ry="28" fill="#161320" opacity="0.55" />
      <rect x={gx} y="18" width="18" height="30" fill="#111019" stroke="#221d2c" strokeWidth="1.5" />
      <rect y="62" width="160" height="28" fill="#0c0b10" />
      <rect width="160" height="90" fill="url(#dith)" />
    </svg>
  );
}
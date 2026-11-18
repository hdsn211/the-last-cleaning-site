// ============================================================
// HERO — full-screen opening. Background is either the real
// capture (SITE.heroImage) or the placeholder corridor scene.
// Sits UNDER the transparent header on purpose.
// ============================================================

import Image from "next/image";
import { Play, Gamepad2, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import VhsClock from "@/components/effects/VhsClock";
import { SITE } from "@/content/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-void">
      {/* background layer */}
      <div className="absolute inset-0" aria-hidden>
        {SITE.heroImage ? (
          <Image src={SITE.heroImage} alt="" fill priority sizes="100vw" className="object-cover" />
        ) : (
          <HeroScene />
        )}
        {/* readability gradients — text stays legible over any art */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,7,8,0.92)_0%,rgba(7,7,8,0.6)_45%,rgba(7,7,8,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-void)_2%,transparent_32%)]" />
      </div>

      {/* VHS on-screen display */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 hidden font-osd text-[21px] tracking-wider text-bone/50 sm:block"
      >
        <span className="absolute left-7 top-24">▶ PLAY</span>
        <span className="absolute right-7 top-24 flex items-center gap-2">
          <span className="rec-dot inline-block h-2.5 w-2.5 rounded-full bg-[#8e2f2a]" />
          REC
        </span>
        <span className="absolute bottom-6 left-7">PM 11:58 · SP</span>
        <VhsClock />
      </div>

      {/* copy */}
      <div className="wrap relative z-10 pb-24 pt-32">
        <p className="mb-6 text-[11px] tracking-[0.24em] text-bone-faint">
          <span className="text-blood-2">//</span> SURVIVAL HORROR · SINGLE-PLAYER ·{" "}
          <span className="text-blood-2">{SITE.status}</span>
        </p>
        <h1 className="title-flicker title-glow font-head leading-[0.95] text-blood">
          <span className="block text-[clamp(1rem,2.4vw,1.6rem)] tracking-[0.34em] text-[#93413a]">
            THE LAST
          </span>
          <span className="mt-2 block text-[clamp(2.6rem,7.5vw,5.2rem)]">CLEANING</span>
        </h1>
        <p className="mt-6 text-sm tracking-[0.12em] text-bone">
          <span className="text-blood-dim">—</span> {SITE.tagline}
        </p>
        <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-bone-dim">
          A first-person survival horror game in development, built in Unity 6 with a PSX-inspired
          look. Clean the house. Keep the lights on. Notice what changes when they don&apos;t.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Button href="/trailer" icon={<Play size={12} className="fill-current" />}>
            Watch trailer
          </Button>
          <Button href="/play" variant="ghost" icon={<Gamepad2 size={13} />} badge="SOON">
            Play game
          </Button>
          <Button href="/download" variant="ghost" icon={<Download size={13} />}>
            Download
          </Button>
        </div>
        <p className="mt-7 text-[10.5px] tracking-[0.08em] text-bone-faint">
          * In development — no playable build yet. Background art is a placeholder.
        </p>
      </div>

      {/* scroll cue */}
      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5"
      >
        <span className="scroll-cue-line relative block h-11 w-px overflow-hidden bg-gradient-to-b from-[#5c5650] to-transparent" />
        <span className="text-[9px] tracking-[0.4em] text-bone-faint">SCROLL</span>
      </div>
    </section>
  );
}

/** Placeholder corridor scene — swapped out when SITE.heroImage is set. */
function HeroScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 800 450"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="800" height="450" fill="#0a090c" />
      <polygon points="0,0 800,0 552,140 248,140" fill="#0c0b0f" />
      <polygon points="0,0 248,140 248,310 0,450" fill="#0e0d11" />
      <polygon points="800,0 552,140 552,310 800,450" fill="#0e0d11" />
      <polygon points="0,450 800,450 552,310 248,310" fill="#131017" />
      <g stroke="#1a1524" strokeWidth="1" opacity="0.45">
        <line x1="60" y1="450" x2="262" y2="310" />
        <line x1="230" y1="450" x2="335" y2="310" />
        <line x1="400" y1="450" x2="400" y2="310" />
        <line x1="570" y1="450" x2="465" y2="310" />
        <line x1="740" y1="450" x2="538" y2="310" />
      </g>
      <rect x="248" y="140" width="304" height="170" fill="#100e13" />
      <rect x="366" y="176" width="68" height="134" fill="#08070a" stroke="#221b2c" strokeWidth="2" />
      <line x1="400" y1="140" x2="400" y2="166" stroke="#1c1726" strokeWidth="2" />
      <polygon points="387,166 413,166 409,182 391,182" fill="#16121d" />
      <circle cx="400" cy="188" r="4" fill="#2b2114" opacity="0.85" />
      <ellipse cx="400" cy="250" rx="110" ry="70" fill="#1d1710" opacity="0.15" />
      <ellipse cx="400" cy="340" rx="320" ry="70" fill="#15121d" opacity="0.22" />
      <path d="M92,450 L112,384 L168,384 L188,450 Z" fill="#050408" />
      <rect x="106" y="377" width="66" height="9" rx="2" fill="#07060a" />
      <line x1="188" y1="440" x2="242" y2="256" stroke="#050408" strokeWidth="7" />
      <path d="M226,266 L258,262 L266,304 L216,308 Z" fill="#050408" />
      <rect width="800" height="450" fill="url(#dith)" />
    </svg>
  );
}
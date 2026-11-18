// ============================================================
// NOT FOUND — Next.js renders this automatically for any
// URL that doesn't match a page. Themed, so even the 404
// stays in the horror atmosphere.
// ============================================================

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-[11px] tracking-[0.3em] text-blood-2">// ERROR 404</p>
      <h1 className="title-glow mt-5 font-head text-4xl text-blood md:text-5xl">NOTHING HERE</h1>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-bone-dim">
        This page doesn&apos;t exist — or the house rearranged itself again.
      </p>
      <Link
        href="/"
        className="mt-9 border border-line-2 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-bone transition-all duration-200 hover:-translate-y-0.5 hover:border-blood-dim"
      >
        Back to safety
      </Link>
    </section>
  );
}
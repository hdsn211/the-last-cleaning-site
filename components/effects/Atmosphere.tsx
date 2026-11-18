// ============================================================
// ATMOSPHERE — the full-screen VHS film layers.
// Rendered once in layout.tsx, fixed above everything,
// pointer-events-none so it never blocks a single click.
// The grain sitting OVER the header is intentional — cinematic.
// ============================================================

export default function Atmosphere() {
  return (
    <>
      <div aria-hidden className="vhs-vignette pointer-events-none fixed inset-0 z-[70]" />
      <div aria-hidden className="vhs-scanlines pointer-events-none fixed inset-0 z-[71]" />
      <div aria-hidden className="vhs-rollbar pointer-events-none fixed inset-x-0 z-[72] h-40" />
      <div aria-hidden className="vhs-grain pointer-events-none fixed -inset-32 z-[73]" />
    </>
  );
}
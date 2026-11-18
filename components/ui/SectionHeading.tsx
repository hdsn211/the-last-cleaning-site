// ============================================================
// SECTION HEADING — the "// LABEL" + distressed-red title block
// used to open every section on every page.
// ============================================================

type Props = {
  label: string; // small red kicker, e.g. "About the game"
  title: string; // big distressed heading
  sub?: string;  // optional paragraph under the title
  center?: boolean;
};

export default function SectionHeading({ label, title, sub, center = false }: Props) {
  return (
    <header className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p
        className={`mb-4 flex items-center gap-3.5 text-[11.5px] font-medium uppercase tracking-[0.26em] text-blood-2 ${
          center ? "justify-center" : ""
        }`}
      >
        <span>//</span> {label}
        {!center && <span className="h-px w-16 bg-gradient-to-r from-blood-dim to-transparent" />}
      </p>
      <h2 className="title-glow font-head text-3xl leading-tight text-blood md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-[13.5px] leading-relaxed text-bone-dim">{sub}</p>}
    </header>
  );
}
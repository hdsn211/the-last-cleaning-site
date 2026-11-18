// ============================================================
// SVG DEFS — shared SVG building blocks, mounted ONCE in
// layout.tsx. Invisible. Placeholder art elsewhere references
// this pattern with fill="url(#dith)".
// ============================================================

export default function SvgDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      <defs>
        <pattern id="dith" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="#000" opacity="0.28" />
          <circle cx="3" cy="3" r="0.8" fill="#000" opacity="0.28" />
        </pattern>
      </defs>
    </svg>
  );
}
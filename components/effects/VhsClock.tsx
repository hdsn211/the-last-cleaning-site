"use client";

// ============================================================
// VHS CLOCK — running timecode, ticks ~24 times a second.
// CLIENT component (uses an interval). Note the trick: it
// updates the text THROUGH A REF, not through state — React
// never re-renders, the browser just edits one text node.
// The cheapest possible way to animate text.
// ============================================================

import { useEffect, useRef } from "react";

export default function VhsClock() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frames = 0;
    let seconds = 0;
    const pad = (n: number) => String(n).padStart(2, "0");
    const id = setInterval(() => {
      frames = (frames + 1) % 24;               // fake 24fps film counter
      if (frames === 0) seconds++;
      if (ref.current) {
        ref.current.textContent = `TC ${pad(Math.floor(seconds / 3600))}:${pad(
          Math.floor(seconds / 60) % 60
        )}:${pad(seconds % 60)}:${pad(frames)}`;
      }
    }, 42);
    return () => clearInterval(id);
  }, []);

  return (
    <span ref={ref} className="absolute bottom-6 right-7 tabular-nums">
      TC 00:00:00:00
    </span>
  );
}
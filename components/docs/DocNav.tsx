"use client";

// ============================================================
// DOC NAV — the documentation sidebar with scroll spy.
// Watches every section with IntersectionObserver and
// highlights the one currently in the upper third of the
// viewport. Links are plain anchors — no JS needed to jump.
// ============================================================

import { useEffect, useState } from "react";
import type { DocSection } from "@/content/docs";

export default function DocNav({ sections }: { sections: DocSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(`doc-${s.id}`))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // a section becomes "current" when its top edge crosses
          // into the upper third of the viewport
          if (entry.isIntersecting) {
            setActive(entry.target.id.replace("doc-", ""));
          }
        }
      },
      { rootMargin: "-15% 0px -75% 0px" }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Documentation sections">
      <p className="mb-4 text-[10px] tracking-[0.26em] text-bone-faint">// CONTENTS</p>
      <ul className="space-y-1">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#doc-${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              className={`flex items-baseline gap-2.5 border-l-2 py-2 pl-3 text-[11px] tracking-[0.1em] transition-colors ${
                active === s.id
                  ? "border-blood-2 text-bone"
                  : "border-line text-bone-dim hover:border-line-2 hover:text-bone"
              }`}
            >
              <span className={active === s.id ? "text-blood-2" : "text-bone-faint"}>{s.num}</span>
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
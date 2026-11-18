"use client";

// ============================================================
// REVEAL — fades content in when it scrolls into view.
// CLIENT component: it reads the browser's IntersectionObserver
// and holds a piece of state. Everything inside <Reveal> is
// hidden (opacity 0) until it enters the viewport, then gets
// the .reveal-in animation from globals.css.
// ============================================================

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);   // a stable "handle" to this div in the DOM
  const [shown, setShown] = useState(false);  // has it entered the viewport yet?

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect visitors who turned off animations in their OS settings.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    // Browser API: "watch this element, tell me when it becomes visible."
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect(); // animate once, then stop watching
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" } // trigger at ~12% visible
    );
    io.observe(el);
    return () => io.disconnect(); // cleanup on unmount
  }, []);

  return <div ref={ref} className={`${className} ${shown ? "reveal-in" : "reveal"}`}>{children}</div>;
}
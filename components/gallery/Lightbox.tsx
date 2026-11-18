"use client";

// ============================================================
// LIGHTBOX — full-screen image viewer.
// Pure presentation + keyboard handling: it receives WHICH
// image is open and WHAT to do on close/navigate from its
// parent (GalleryGrid). It owns no "which image" state itself.
// Keyboard: Escape closes · ← → navigate · Tab stays usable.
// ============================================================

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ScreenshotFrame from "@/components/shared/ScreenshotFrame";
import type { Screenshot } from "@/content/screenshots";

type Props = {
  shots: Screenshot[];
  index: number | null;                                  // null = closed
  onClose: () => void;
  onNavigate: (dir: 1 | -1) => void;
};

export default function Lightbox({ shots, index, onClose, onNavigate }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;

  // Global keyboard handling — only while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, onNavigate]);

  // Lock page scroll behind the overlay + move focus in.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [isOpen]);

  if (index === null) return null;
  const shot = shots[index];

  return (
    // z-[60]: above the header (z-50), BELOW the film grain (z-70+) —
    // the VHS layers stay over the lightbox on purpose. Cinematic.
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${shot.label}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-void/90 p-4 sm:p-8"
      onClick={onClose}
    >
      {/* clicking the backdrop (the div above) closes — clicks here don't */}
      <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[11px] tracking-[0.26em] text-blood-2">
            {String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
          </p>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close image viewer"
            className="flex h-10 w-10 items-center justify-center border border-line-2 text-bone transition-colors hover:border-blood-dim"
          >
            <X size={18} />
          </button>
        </div>

        <ScreenshotFrame shot={shot} priority className="w-full" />

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate(-1)}
            aria-label="Previous image"
            className="flex h-10 items-center gap-2 border border-line-2 px-4 text-[11px] tracking-[0.2em] text-bone-dim transition-colors hover:border-blood-dim hover:text-bone"
          >
            <ChevronLeft size={15} /> PREV
          </button>
          <p className="hidden text-[10.5px] tracking-[0.18em] text-bone-faint sm:block">
            ← → TO NAVIGATE · ESC TO CLOSE
          </p>
          <button
            onClick={() => onNavigate(1)}
            aria-label="Next image"
            className="flex h-10 items-center gap-2 border border-line-2 px-4 text-[11px] tracking-[0.2em] text-bone-dim transition-colors hover:border-blood-dim hover:text-bone"
          >
            NEXT <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
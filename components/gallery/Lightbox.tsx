
"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ScreenshotFrame from "@/components/shared/ScreenshotFrame";
import type { Screenshot } from "@/content/screenshots";

type Props = {
  shots: Screenshot[];
  index: number | null;
  onClose: () => void;
  onNavigate: (dir: 1 | -1) => void;
};

export default function Lightbox({
  shots,
  index,
  onClose,
  onNavigate,
}: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (index === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, onClose, onNavigate]);

  if (index === null) return null;

  const shot = shots[index];
  if (!shot) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${shot.label}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-blood-2">
              THE LAST CLEANING
            </p>

            <p className="mt-1 text-[10px] tracking-[0.2em] text-bone-faint">
              IMAGE {String(index + 1).padStart(2, "0")} /{" "}
              {String(shots.length).padStart(2, "0")}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="flex h-10 w-10 items-center justify-center border border-line-2 bg-ash/50 text-bone transition hover:border-blood hover:bg-blood/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* IMAGE AND NAVIGATION */}
        <div className="relative border border-line-2 bg-void p-1 shadow-2xl shadow-black/50">
          <ScreenshotFrame
            shot={shot}
            priority
            className="w-full border-0"
          />

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={() => onNavigate(-1)}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/75 text-white transition hover:border-blood hover:bg-blood/80 sm:left-5 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={22} />
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={() => onNavigate(1)}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/75 text-white transition hover:border-blood hover:bg-blood/80 sm:right-5 sm:h-12 sm:w-12"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-[11px] tracking-[0.2em] text-bone">
              {shot.label.toUpperCase()}
            </p>

            <p className="mt-1 text-[10px] text-bone-faint">
              {shot.note}
            </p>
          </div>

          <p className="text-[9px] tracking-[0.2em] text-bone-faint">
            ← → NAVIGATE <span className="mx-2">/</span> ESC CLOSE
          </p>
        </div>
      </div>
    </div>
  );
}

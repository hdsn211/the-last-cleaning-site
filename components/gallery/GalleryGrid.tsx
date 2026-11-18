"use client";

// ============================================================
// GALLERY GRID — owns the ONE piece of state (which image is
// open) and passes it down to the Lightbox. Thumbnails are
// real <button>s so keyboard users can open the viewer too.
// "Lifting state up": six thumbnails, one overlay, one state.
// ============================================================

import { useCallback, useRef, useState } from "react";
import Lightbox from "@/components/gallery/Lightbox";
import ScreenshotFrame from "@/components/shared/ScreenshotFrame";
import type { Screenshot } from "@/content/screenshots";

export default function GalleryGrid({ shots }: { shots: Screenshot[] }) {
  // index of the open image, or null = closed
  const [index, setIndex] = useState<number | null>(null);

  // so we can give keyboard focus back to the thumbnail that opened the viewer
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus(); // focus returns where it came from
  }, []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setIndex((cur) =>
        cur === null ? cur : (cur + dir + shots.length) % shots.length
      );
    },
    [shots.length]
  );

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((shot, i) => (
          <button
            key={shot.id}
            type="button"
            onClick={(e) => {
              lastTrigger.current = e.currentTarget; // remember the opener
              setIndex(i);
            }}
            aria-haspopup="dialog"
            aria-label={`Open image viewer — ${shot.label}`}
            className="cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a8453c]"
          >
            <ScreenshotFrame shot={shot} priority={i < 3} />
          </button>
        ))}
      </div>

      <Lightbox shots={shots} index={index} onClose={close} onNavigate={navigate} />
    </>
  );
}
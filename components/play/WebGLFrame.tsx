"use client";

// ============================================================
// WEBGL FRAME — mounts the real itch.io embed when it exists.
// CLIENT component (uses refs, state and the Fullscreen API):
//  · LOADING overlay until the iframe fires onLoad
//  · FULLSCREEN button wraps the embed via requestFullscreen()
// The Fullscreen API only works from a real user gesture —
// which is exactly what this button click is.
// ============================================================

import { useEffect, useRef, useState } from "react";
import { Maximize, Minimize } from "lucide-react";

type Props = { src: string; title: string };

export default function WebGLFrame({ src, title }: Props) {
  const shellRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Track whether WE are the fullscreen element → swap the icon.
  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = () => {
    const el = shellRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else if (el.requestFullscreen) {
      void el.requestFullscreen();
    }
  };

  return (
    <div
      ref={shellRef}
      className="relative mx-auto aspect-video w-full max-w-5xl border border-line-2 bg-void"
    >
      {loading && (
        <div className="trailer-slot absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
          <p className="font-osd text-5xl tracking-[0.12em] text-[#3c3a41]">
            LOADING<span className="cursor-blink">▌</span>
          </p>
          <p className="text-[11px] tracking-[0.28em] text-[#5a5548]">
            STARTING THE UNITY WEBGL BUILD — FIRST LOAD TAKES A MOMENT
          </p>
        </div>
      )}

      <iframe
        src={src}
        title={title}
        onLoad={() => setLoading(false)}
        allow="fullscreen; autoplay"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />

      <button
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        className="absolute bottom-3 right-3 z-20 flex h-9 items-center gap-2 border border-line-2 bg-void/85 px-3 text-[10.5px] tracking-[0.2em] text-bone-dim transition-colors hover:border-blood-dim hover:text-bone"
      >
        {isFullscreen ? <Minimize size={13} /> : <Maximize size={13} />}
        {isFullscreen ? "EXIT" : "FULLSCREEN"}
      </button>
    </div>
  );
}
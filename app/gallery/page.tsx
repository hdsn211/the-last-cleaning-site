// ============================================================
// /gallery — six frames + lightbox. Data comes entirely from
// content/screenshots.ts; add a screenshot there and it
// appears here, in the lightbox, everywhere.
// ============================================================

import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { SCREENSHOTS } from "@/content/screenshots";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32">
        <div className="wrap">
          <SectionHeading
            label="Gallery"
            title="Inside the house."
            sub="Placeholder frames for now — click any frame to inspect it. Each one swaps one-for-one with a real Unity capture."
          />
          <Reveal>
            <GalleryGrid shots={SCREENSHOTS} />
          </Reveal>
          <Reveal>
            <aside className="mt-14 border-l-2 border-blood-dim py-1 pl-5">
              <p className="text-[11px] tracking-[0.26em] text-blood-2">// MAINTENANCE NOTE</p>
              <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-bone-dim">
                To replace a placeholder: save the capture (16:9, JPG/WebP, under ~400&nbsp;KB) to{" "}
                <code className="text-bone">public/images/screens/&lt;id&gt;.jpg</code>, then set{" "}
                <code className="text-bone">src</code> for that entry in{" "}
                <code className="text-bone">content/screenshots.ts</code>. The frame label flips
                from PLACEHOLDER to SCREENSHOT automatically — here, on the homepage previews, and
                on the About page.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
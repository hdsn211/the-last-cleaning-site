
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScreenshotFrame from "@/components/shared/ScreenshotFrame";
import { SCREENSHOTS } from "@/content/screenshots";

export default function GalleryPreview() {
  // Display the first three screenshots from the main gallery.
  const previewShots = SCREENSHOTS.slice(0, 3);

  // Check whether at least one real Unity capture is available.
  const hasRealScreenshots = previewShots.some((shot) => shot.src !== null);

  return (
    <section className="border-t border-line bg-void py-20 md:py-28">
      <div className="wrap">

        {/* Section heading */}
        <Reveal>
          <SectionHeading
            label="Gallery"
            title="Inside the house."
            sub={
              hasRealScreenshots
                ? "A glimpse inside THE LAST CLEANING. Explore the environments, details, and atmosphere of the game."
                : "A first look at the environments of THE LAST CLEANING. Real Unity captures will appear here as development progresses."
            }
          />
        </Reveal>

        {/* Screenshot grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewShots.map((shot, index) => (
            <Reveal key={shot.id}>
              <Link
                href="/gallery"
                aria-label={`Explore gallery — ${shot.label}`}
                className="group block outline-none focus-visible:ring-2 focus-visible:ring-blood"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  <ScreenshotFrame
                    shot={shot}
                    priority={index === 0}
                    className="transition-all duration-300 group-hover:border-blood-dim"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Gallery button */}
        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-3">
            <p className="text-[10px] tracking-[0.25em] text-bone-faint">
              // EXPLORE THE ENVIRONMENT
            </p>

            <Button href="/gallery" variant="ghost">
              View full gallery
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

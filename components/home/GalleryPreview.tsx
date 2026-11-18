// Gallery teaser — three placeholder frames, links to /gallery.

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScreenshotFrame from "@/components/shared/ScreenshotFrame";
import { SCREENSHOTS } from "@/content/screenshots";

export default function GalleryPreview() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <Reveal>
          <SectionHeading
            label="Gallery"
            title="Inside the house."
            sub="Placeholder frames — each one swaps one-for-one with a Unity capture when it's ready."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SCREENSHOTS.slice(0, 3).map((shot) => (
            <Reveal key={shot.id}>
              <Link
                href="/gallery"
                aria-label={`Open the gallery — ${shot.label}`}
                className="block"
              >
                <ScreenshotFrame shot={shot} />
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Reveal>
            <Button href="/gallery" variant="ghost">
              View full gallery
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { SCREENSHOTS } from "@/content/screenshots";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="wrap">

        {/* Gallery heading */}
        <SectionHeading
          label="Gallery"
          title="Inside the house."
          sub="Explore the environments, details, and atmosphere of THE LAST CLEANING."
        />

        {/* Gallery images and lightbox */}
        <Reveal>
          <GalleryGrid shots={SCREENSHOTS} />
        </Reveal>

      </div>
    </section>
  );
}

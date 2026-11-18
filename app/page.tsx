// ============================================================
// HOMEPAGE — a composed list of section components.
// Reordering, removing or adding a section = moving one line.
// ============================================================

import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturesPreview from "@/components/home/FeaturesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import TrailerTeaser from "@/components/home/TrailerTeaser";
import ReleaseCta from "@/components/home/ReleaseCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturesPreview />
      <GalleryPreview />
      <TrailerTeaser />
      <ReleaseCta />
    </>
  );
}
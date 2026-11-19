
// ============================================================
// SITE CONTENT — THE LAST CLEANING
// Central source for website content and release information.
// ============================================================

export const SITE = {
  title: "THE LAST CLEANING",
  tagline: "One last job. One long night.",

  description:
    "A first-person survival horror game inspired by PSX-era horror. You are a hired cleaner, and the night shift is about to take a terrifying turn.",

  status: "RELEASED",

  // Social links
  links: {
    itch: null as string | null,
    youtube: null as string | null,
    steam: null as string | null,
    bluesky: null as string | null,
  },

  // Release assets
  release: {
    trailerUrl: "/videos/trailer.mp4",
    webglBuildUrl: null as string | null,
    windowsDownloadUrl: null as string | null,
    windowsVersion: null as string | null,
    windowsSize: null as string | null,

    windowsRequirements: null as
      | { label: string; value: string }[]
      | null,
  },

  // Trailer sequence
  trailerBeats: [
    "Black screen — unsettling ambience",
    "The cleaner arrives at the property",
    "Cleaning and exploration",
    "The power goes out",
    "Basement investigation",
    "A glimpse in the darkness",
    "Stalking — flashlight and bat defense",
    "The escape sequence",
    "Title reveal",
  ],

  // Homepage background
  heroImage: "images/house-background.png",
};

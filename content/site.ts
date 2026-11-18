// ============================================================
// SITE CONTENT — the single source of truth.
// Titles, statuses, links and release data live here.
// To update the site, edit THIS file — not the components.
// (Think of it as a ScriptableObject: data, not logic.)
// ============================================================

export const SITE = {
  title: "THE LAST CLEANING",
  tagline: "One last job. One long night.",
  description:
    "A first-person survival horror game inspired by PSX-era horror. You are a hired cleaner, and the night shift is about to go wrong. Currently in development.",
  status: "IN DEVELOPMENT",

  // Social links — set to a real URL string when one exists.
  // While null, the site shows a "PENDING" state.
  links: {
    itch: null as string | null,
    youtube: null as string | null,
    steam: null as string | null,
    bluesky: null as string | null,
  },

  // Release assets — fill in as your Unity builds are produced.
  // null = the UI shows "COMING SOON". The site physically cannot
  // display a fake download or a fake trailer, because there is
  // no URL to point at.
  release: {
    trailerUrl: null as string | null,
    webglBuildUrl: null as string | null,
    windowsDownloadUrl: null as string | null,
    windowsVersion: null as string | null,
    windowsSize: null as string | null,
    // System requirements — fill in ONLY with real specs, like:
    // windowsRequirements: [
    //   { label: "OS",        value: "Windows 10 / 11 (64-bit)" },
    //   { label: "PROCESSOR", value: "…" },
    //   { label: "MEMORY",    value: "8 GB RAM" },
    //   { label: "GRAPHICS",  value: "…" },
    //   { label: "STORAGE",   value: "2 GB available space" },
    // ],
    windowsRequirements: null as { label: string; value: string }[] | null,
  },

  // Planned trailer edit (45–60s) — shown as "planned", never as existing footage.
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

  // Drop a real capture at public/images/hero-bg.jpg and set
  // heroImage: "/images/hero-bg.jpg". null = placeholder art.
  heroImage: null as string | null,
};
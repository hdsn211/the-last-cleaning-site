// ============================================================
// DOCS — the documentation sections.
// Every section carries an honest status:
//   WRITTEN — stable, safe to rely on
//   DRAFT   — planned design, will change as the build evolves
//   PENDING — nothing documented yet
// Add a section object here and both the page AND the
// sidebar navigation update automatically.
// ============================================================

export type DocStatus = "WRITTEN" | "DRAFT" | "PENDING";

export type DocSection = {
  id: string; // anchor id → #doc-<id>
  num: string;
  title: string;
  status: DocStatus;
  paragraphs: string[];
  rows?: { term: string; value: string }[]; // optional key-value table
  list?: string[];                          // optional bullet list
};

export const DOC_SECTIONS: DocSection[] = [
  {
    id: "overview",
    num: "DOC-01",
    title: "Game overview",
    status: "DRAFT",
    paragraphs: [
      "THE LAST CLEANING is a first-person survival horror game. You take the role of a hired cleaner arriving at a property for an ordinary cleaning job, which must be finished before the evening ends.",
      "As the night progresses the power fails, strange events occur, and a hostile creature begins stalking the house. The player must survive the night and find a way to escape.",
    ],
  },
  {
    id: "story",
    num: "DOC-02",
    title: "Story and setting",
    status: "DRAFT",
    paragraphs: [
      "The setting is a single property — a quiet house with a basement — over the course of one night shift. The story is told through the job itself: the work order, the environment, and what changes after the lights go out.",
      "Full story details are withheld on purpose. This section will expand closer to release, without spoiling what players should discover in the house themselves.",
    ],
  },
  {
    id: "controls",
    num: "DOC-03",
    title: "Controls",
    status: "DRAFT",
    paragraphs: [
      "The intended control scheme, following standard first-person conventions. Bindings are not final and may change during development.",
    ],
    rows: [
      { term: "MOVE", value: "W A S D" },
      { term: "LOOK", value: "Mouse" },
      { term: "INTERACT", value: "E" },
      { term: "FLASHLIGHT", value: "F" },
      { term: "SPRINT", value: "Shift" },
      { term: "CROUCH", value: "C" },
      { term: "PAUSE", value: "Esc" },
    ],
  },
  {
    id: "mechanics",
    num: "DOC-04",
    title: "Gameplay mechanics",
    status: "DRAFT",
    paragraphs: ["The core loop, as currently designed:"],
    list: [
      "Cleaning objectives — work through the job room by room.",
      "Power management — the fuse box and the lights are central to the night.",
      "Exploration — search the property for items and a way out.",
      "Hiding — when hunted, break line of sight and stay quiet.",
      "Escape — reach an exit before the shift ends you.",
    ],
  },
  {
    id: "monster",
    num: "DOC-05",
    title: "Monster behavior",
    status: "DRAFT",
    paragraphs: [
      "The creature is primarily active after the power failure. It stalks the player through the house; being seen is dangerous, and survival depends on evasion rather than confrontation.",
      "Detailed behavior — detection rules, patrol logic, reactions to light and sound — is documented internally and will be published after release, to avoid spoiling the discovery that makes it scary.",
      "A melee defense tool is planned as a last resort. It delays; it does not win.",
    ],
  },
  {
    id: "flashlight",
    num: "DOC-06",
    title: "Flashlight mechanics",
    status: "DRAFT",
    paragraphs: [
      "The flashlight is the primary tool for exploring the house after dark. It reveals what the dark hides — and is your only reliable light source once the power fails.",
      "Specific mechanics (battery model, how the creature behaves around light) are being finalized and will be documented here once locked.",
    ],
  },
  {
    id: "technical",
    num: "DOC-07",
    title: "Technical information",
    status: "WRITTEN",
    paragraphs: ["Confirmed technical facts about the build:"],
    rows: [
      { term: "ENGINE", value: "Unity 6" },
      { term: "RENDER PIPELINE", value: "Universal Render Pipeline (URP)" },
      { term: "ART DIRECTION", value: "PSX-inspired low-poly, VHS presentation" },
      { term: "TARGET PLATFORMS", value: "Windows (64-bit) · Web browser (WebGL)" },
      { term: "DISTRIBUTION", value: "itch.io" },
    ],
  },
  {
    id: "dev-notes",
    num: "DOC-08",
    title: "Development notes",
    status: "PENDING",
    paragraphs: [
      "Development notes and build changelogs will be posted here as milestones are reached. Nothing has been published yet.",
    ],
  },
  {
    id: "known-issues",
    num: "DOC-09",
    title: "Known issues",
    status: "PENDING",
    paragraphs: [
      "No public build exists yet, so there is no public issue list. Once builds ship, this section will list known issues per release, each with its status (open / fixed / workaround available).",
    ],
  },
  {
    id: "credits",
    num: "DOC-10",
    title: "Credits and asset acknowledgements",
    status: "PENDING",
    paragraphs: [
      "Full credits — developer, tools, third-party assets, audio and special thanks — live on the Credits page. Acknowledgements will be completed as final assets are locked, and every third-party asset will be listed with its license.",
    ],
  },
];
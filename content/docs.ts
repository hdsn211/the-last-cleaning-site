
export type DocStatus = "WRITTEN";

export type DocSection = {
  id: string;
  num: string;
  title: string;
  status: DocStatus;
  paragraphs: string[];
  rows?: { term: string; value: string }[];
  list?: string[];
};

export const DOC_SECTIONS: DocSection[] = [
  {
    id: "overview",
    num: "DOC-01",
    title: "Game overview",
    status: "WRITTEN",
    paragraphs: [
      "THE LAST CLEANING is a first-person survival horror game developed by 6 Studio. Players take the role of a hired cleaner arriving at a property for what appears to be an ordinary cleaning job.",
      "As the night progresses, the power fails, strange events unfold, and a hostile creature begins stalking the house. What starts as a routine job becomes a fight for survival.",
      "Explore the property, complete your objectives, face the darkness, and find a way to escape.",
      "The game is playable directly through the official website using a supported desktop browser."
    ],
  },
  {
    id: "story",
    num: "DOC-02",
    title: "Story and setting",
    status: "WRITTEN",
    paragraphs: [
      "The story takes place inside a quiet residential property during a night shift. You arrive as a hired cleaner, expecting nothing more than an ordinary job.",
      "The house gradually becomes unsettling as unusual events begin to occur. When the power goes out, the familiar environment becomes dangerous, and something begins moving through the darkness.",
      "The story unfolds through the environment and the player's experience. Some details are intentionally left undisclosed to preserve the horror and discovery."
    ],
  },
  {
    id: "controls",
    num: "DOC-03",
    title: "Controls",
    status: "WRITTEN",
    paragraphs: [
      "The following are the intended keyboard and mouse controls for the desktop browser experience. Check the in-game instructions if a control differs in the deployed build."
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
    status: "WRITTEN",
    paragraphs: [
      "Survival depends on completing your work while exploring an increasingly dangerous environment. Players must pay attention to their surroundings and react to changes inside the property."
    ],
    list: [
      "Cleaning objectives — complete the assigned cleaning tasks.",
      "Power management — the house's electrical system and lighting are important to survival.",
      "Exploration — investigate rooms and search the property.",
      "Evasion — avoid the creature when it begins hunting you.",
      "Escape — find a way out and survive the night."
    ],
  },
  {
    id: "monster",
    num: "DOC-05",
    title: "Monster behavior",
    status: "WRITTEN",
    paragraphs: [
      "A hostile creature becomes a threat as the night progresses, particularly after the power failure.",
      "The creature stalks the player through the house. Staying alert, understanding your surroundings, and avoiding unnecessary encounters are important to survival.",
      "The creature is not something players should approach carelessly. Survival is primarily about avoiding danger rather than confronting it."
    ],
  },
  {
    id: "flashlight",
    num: "DOC-06",
    title: "Flashlight mechanics",
    status: "WRITTEN",
    paragraphs: [
      "The flashlight is an important tool for navigating the property when the lights go out.",
      "Use it to illuminate dark areas, explore your surroundings, and maintain visibility while moving through the house.",
      "Be mindful of the darkness. Visibility becomes an important part of surviving the night."
    ],
  },
  {
    id: "technical",
    num: "DOC-07",
    title: "Technical information",
    status: "WRITTEN",
    paragraphs: [
      "THE LAST CLEANING is developed using Unity 6 and features a PSX-inspired visual direction with a VHS-style presentation."
    ],
    rows: [
      { term: "GAME ENGINE", value: "Unity 6" },
      { term: "RENDER PIPELINE", value: "Universal Render Pipeline (URP)" },
      { term: "ART DIRECTION", value: "PSX-inspired low-poly, VHS presentation" },
      { term: "PLAYABLE PLATFORM", value: "Desktop web browser (WebGL)" },
      { term: "DISTRIBUTION", value: "Official THE LAST CLEANING website" },
    ],
  },
  {
    id: "dev-notes",
    num: "DOC-08",
    title: "Development notes",
    status: "WRITTEN",
    paragraphs: [
      "THE LAST CLEANING has reached its public playable release on the official website.",
      "The game is developed by 6 Studio. Development focuses on delivering a first-person survival horror experience with a PSX-inspired atmosphere.",
      "Future improvements, updates, and development announcements will be documented here as they become available."
    ],
  },
  {
    id: "known-issues",
    num: "DOC-09",
    title: "Known issues",
    status: "WRITTEN",
    paragraphs: [
      "This section documents verified issues affecting the publicly available game.",
      "If you encounter a problem while playing, note what happened, what you were doing, and which browser you were using. This information can help the development team investigate and reproduce the issue.",
      "Only confirmed issues and verified fixes will be listed here. No unverified problems are presented as known bugs."
    ],
  },
  {
    id: "credits",
    num: "DOC-10",
    title: "Credits and asset acknowledgements",
    status: "WRITTEN",
    paragraphs: [
      "THE LAST CLEANING is developed by 6 Studio.",
      "The development team, tools, third-party assets, and acknowledgements are recognized on the official Credits page.",
      "Third-party asset acknowledgements and licenses are listed as their information is verified."
    ],
  },
];

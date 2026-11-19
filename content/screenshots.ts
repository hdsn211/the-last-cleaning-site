
export type Screenshot = {
  id: string;
  label: string;
  note: string;
  src: string | null;
};

export const SCREENSHOTS: Screenshot[] = [
  {
    id: "house-interior",
    label: "House exterior",
    note: "Unity 6 · Property entrance",
    src: "/images/screens/house-interior.png",
  },
  {
    id: "cleaning-phase",
    label: "Cleaning phase",
    note: "Awaiting Unity capture · 16:9",
    src: "/images/screens/cleaning.png",
  },
  {
    id: "basement-fusebox",
    label: "Basement — fuse box",
    note: "Awaiting Unity capture · 16:9",
    src: "/images/screens/fusebox.png",
  },
  {
    id: "monster-encounter",
    label: "Monster encounter",
    note: "Awaiting Unity capture · 16:9",
    src: "/images/screens/bedroom.png",
  },
  {
    id: "flashlight",
    label: "Flashlight exploration",
    note: "Awaiting Unity capture · 16:9",
    src: "/images/screens/flashlight.png",
  },
  {
    id: "bedroom-drawer",
    label: "Bedroom — locked drawer",
    note: "Awaiting Unity capture · 16:9",
    src: "/images/screens/bedroom.png",
  },
];

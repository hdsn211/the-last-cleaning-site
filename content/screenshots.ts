// ============================================================
// SCREENSHOTS — the gallery's data.
// To add a real Unity capture:
//   1. save it to  public/images/screens/<id>.jpg  (16:9 aspect)
//   2. change  src: null  to  src: "/images/screens/<id>.jpg"
// Until then, every entry renders as a clearly labeled placeholder.
// ============================================================

export type Screenshot = {
  id: string;          // future filename: /images/screens/<id>.jpg
  label: string;       // caption shown under the frame
  note: string;        // small note in the caption bar
  src: string | null;  // null = placeholder; set the path once captured
};

export const SCREENSHOTS: Screenshot[] = [
  { id: "house-interior",    label: "House interior",          note: "swap with Unity capture · 16:9", src: null },
  { id: "cleaning-phase",    label: "Cleaning phase",          note: "swap with Unity capture · 16:9", src: null },
  { id: "basement-fusebox",  label: "Basement — fuse box",     note: "swap with Unity capture · 16:9", src: null },
  { id: "monster-encounter", label: "Monster encounter",       note: "swap with Unity capture · 16:9", src: null },
  { id: "flashlight",        label: "Flashlight exploration",  note: "swap with Unity capture · 16:9", src: null },
  { id: "bedroom-drawer",    label: "Bedroom — locked drawer", note: "swap with Unity capture · 16:9", src: null },
];
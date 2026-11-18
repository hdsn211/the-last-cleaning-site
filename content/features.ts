// ============================================================
// FEATURES — gameplay feature list with honest dev statuses.
// Never claim something is done when it isn't: the status
// labels here are rendered directly on the site.
// ============================================================

import {
  Footprints,
  Gamepad2,
  SprayCan,
  Flashlight,
  Eye,
  EyeOff,
  DoorOpen,
  type LucideIcon,
} from "lucide-react";

// The honest states a feature can be in. This is a "union type":
// a value may ONLY be one of these exact strings. Typo it — e.g.
// "IN DEVELOPMANT" — and VS Code underlines it immediately.
export type DevStatus =
  | "IN DEVELOPMENT"
  | "COMING SOON"
  | "PLANNED"
  | "PLACEHOLDER"
  | "PENDING";

export type Feature = {
  icon: LucideIcon; // an icon component from lucide-react, stored like data
  title: string;
  body: string;
  status: DevStatus;
};

export const FEATURES: Feature[] = [
  { icon: Footprints, title: "First-person survival horror", body: "Walk the house from a first-person view. Rooms look different on the way in than they do on the way out.", status: "IN DEVELOPMENT" },
  { icon: Gamepad2,   title: "PSX-inspired visuals",         body: "Low-poly geometry, dithered textures and a CRT-friendly palette — retro on purpose, readable by design.", status: "IN DEVELOPMENT" },
  { icon: SprayCan,   title: "Cleaning objectives",          body: "Mop, scrub, sort and tidy. A quiet job — as long as you're the only thing working late.", status: "IN DEVELOPMENT" },
  { icon: Flashlight, title: "Flashlight exploration",       body: "A weak beam against a lot of dark. It shows you the path — and everything standing in it.", status: "IN DEVELOPMENT" },
  { icon: Eye,        title: "A creature that stalks you",   body: "Something else is in the house tonight. Learn its pattern. Don't learn it twice.", status: "IN DEVELOPMENT" },
  { icon: EyeOff,     title: "Hiding & survival",            body: "When the lights go out, stop being where you are. Closets, curtains, under the bed. Hold your breath.", status: "PLANNED" },
  { icon: DoorOpen,   title: "Finding a way out",            body: "The exits don't stay friendly after sunset. Find another way out before the job finds you.", status: "PLANNED" },
];
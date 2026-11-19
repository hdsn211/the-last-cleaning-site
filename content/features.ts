
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

export type DevStatus =
  | "RELEASED"
  | "IN DEVELOPMENT"
  | "COMING SOON"
  | "PLANNED"
  | "PLACEHOLDER"
  | "PENDING";

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  status: DevStatus;
};

export const FEATURES: Feature[] = [
  {
    icon: Footprints,
    title: "First-person survival horror",
    body: "Explore the house from a first-person perspective. Experience the night through the eyes of the cleaner.",
    status: "RELEASED",
  },
  {
    icon: Gamepad2,
    title: "PSX-inspired visuals",
    body: "Discover low-poly environments, retro-inspired textures, and a classic PSX survival horror atmosphere.",
    status: "RELEASED",
  },
  {
    icon: SprayCan,
    title: "Cleaning objectives",
    body: "Complete your cleaning duties by mopping floors and picking up trash before the night takes a dark turn.",
    status: "RELEASED",
  },
  {
    icon: Flashlight,
    title: "Flashlight exploration",
    body: "Use your flashlight to navigate dark rooms and explore the house. Watch carefully for anything lurking nearby.",
    status: "RELEASED",
  },
  {
    icon: Eye,
    title: "A creature that stalks you",
    body: "Something else is inside the house. Stay alert, avoid danger, and survive the encounter.",
    status: "RELEASED",
  },
  {
    icon: EyeOff,
    title: "Hiding & survival",
    body: "Hide from the creature under tables or inside cabinets. Choose your hiding spot carefully to stay out of sight.",
    status: "RELEASED",
  },
  {
    icon: DoorOpen,
    title: "Finding a way out",
    body: "Find your way through the house and escape the danger waiting inside.",
    status: "RELEASED",
  },
];

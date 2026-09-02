import type { LucideIcon } from "lucide-react";
import { Bot, Landmark, MapPinned, Store } from "lucide-react";

export type ValueProposition = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const valuePropositions: ValueProposition[] = [
  {
    id: "smart-planning",
    title: "Smart Planning",
    description:
      "Build itineraries around your pace, interests, and travel style — not a fixed package brochure.",
    icon: Bot,
  },
  {
    id: "local-experiences",
    title: "Local Experiences",
    description:
      "Meet artisans, hosts, and neighbourhood businesses that rarely appear on hotel booking sites.",
    icon: Landmark,
  },
  {
    id: "hidden-gems",
    title: "Hidden Gems",
    description:
      "Find quieter coasts, temple towns, and lagoons before the crowds do — with crowd-aware cues.",
    icon: MapPinned,
  },
  {
    id: "local-businesses",
    title: "Empower Local Businesses",
    description:
      "Help hotels, guides, and small operators gain visibility, guests, and a clearer view of demand.",
    icon: Store,
  },
];

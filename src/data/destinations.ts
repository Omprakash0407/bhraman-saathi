import type { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "puri",
    name: "Puri",
    location: "Odisha",
    region: "East India",
    summary:
      "Sacred temple town on the Bay of Bengal, known for Jagannath Temple, golden beaches, and Rath Yatra.",
    imageUrl:
      "/images/destinations/puri.jpg",
    tags: ["Spiritual", "Beach", "Culture"],
    isHiddenGem: false,
    crowdLevel: "high",
  },
  {
    id: "konark",
    name: "Konark",
    location: "Odisha",
    region: "East India",
    summary:
      "Home of the UNESCO-listed Sun Temple, a 13th-century chariot in stone facing the eastern sea.",
    imageUrl:
      "/images/destinations/konark.jpg",
    tags: ["Heritage", "UNESCO", "Architecture"],
    isHiddenGem: false,
    crowdLevel: "moderate",
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    location: "Odisha",
    region: "East India",
    summary:
      "The temple city and gateway to Odisha, mixing ancient shrines with a growing food and craft scene.",
    imageUrl:
      "/images/destinations/bhubaneswar.jpg",
    tags: ["Temples", "City", "Food"],
    isHiddenGem: false,
    crowdLevel: "moderate",
  },
  {
    id: "chilika",
    name: "Chilika",
    location: "Odisha",
    region: "East India",
    summary:
      "Asia's largest brackish lagoon — winter birds, Irrawaddy dolphins, and fishing villages on quiet islands.",
    imageUrl:
      "/images/destinations/chillika.jpg",
    tags: ["Nature", "Wildlife", "Lagoon"],
    isHiddenGem: true,
    crowdLevel: "low",
  },
  {
    id: "daringbadi",
    name: "Daringbadi",
    location: "Odisha",
    region: "East India",
    summary:
      "Known as the Kashmir of Odisha — misty hills, coffee plantations, pine forests, and pristine waterfalls in the Eastern Ghats.",
    imageUrl:
      "/images/destinations/daringbadi.jpg",
    tags: ["Hill Station", "Nature", "Coffee"],
    isHiddenGem: true,
    crowdLevel: "low",
  },
  {
    id: "satkosia",
    name: "Satkosia",
    location: "Odisha",
    region: "East India",
    summary:
      "A gorge sanctuary along the Mahanadi River where crocodiles bask, elephants roam, and deep forests meet the river.",
    imageUrl:
      "/images/destinations/satkosia.jpg",
    tags: ["Wildlife", "Sanctuary", "River"],
    isHiddenGem: true,
    crowdLevel: "low",
  },
  {
    id: "raghurajpur",
    name: "Raghurajpur",
    location: "Odisha",
    region: "East India",
    summary:
      "A heritage crafts village where every home is a gallery — Pattachitra scroll painters, palm-leaf engravers, and traditional artisans.",
    imageUrl:
      "/images/destinations/raghurajpur.jpg",
    tags: ["Heritage", "Crafts", "Art"],
    isHiddenGem: true,
    crowdLevel: "low",
  },
  {
    id: "bhitarkanika",
    name: "Bhitarkanika",
    location: "Odisha",
    region: "East India",
    summary:
      "India's second-largest mangrove ecosystem — saltwater crocodiles, kingfishers, creeks, and untouched coastal wilderness.",
    imageUrl:
      "/images/destinations/bhitarkanika.jpg",
    tags: ["Mangrove", "Wildlife", "Coastal"],
    isHiddenGem: true,
    crowdLevel: "low",
  },
];

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((destination) => destination.id === id);
}

export function getHiddenGems(): Destination[] {
  return destinations.filter((destination) => destination.isHiddenGem);
}

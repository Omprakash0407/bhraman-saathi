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
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
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
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1400&q=80",
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
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=80",
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
      "Asia’s largest brackish lagoon — winter birds, Irrawaddy dolphins, and fishing villages on quiet islands.",
    imageUrl:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1400&q=80",
    tags: ["Nature", "Wildlife", "Lagoon"],
    isHiddenGem: true,
    crowdLevel: "low",
  },
];

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((destination) => destination.id === id);
}

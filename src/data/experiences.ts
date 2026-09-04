import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "pattachitra-studio",
    title: "Pattachitra studio visit",
    destinationId: "puri",
    hostName: "Raghurajpur artisans",
    summary:
      "Watch scroll painters grind natural colours and try a miniature motif in a heritage crafts village.",
    imageUrl:
      "/images/experiences/pattachitra.jpg",
    durationHours: 3,
    price: 1800,
    currency: "INR",
    rating: 4.8,
    isLocal: true,
  },
  {
    id: "chilika-dawn-cruise",
    title: "Dawn cruise with Chilika fishers",
    destinationId: "chilika",
    hostName: "Satapada boat collective",
    summary:
      "Join a morning route across the lagoon, look for dolphins, and share a simple catch-of-the-day breakfast.",
    imageUrl:
      "/images/experiences/chilika-cruise.jpg",
    durationHours: 4,
    price: 2500,
    currency: "INR",
    rating: 4.9,
    isLocal: true,
  },
  {
    id: "old-town-temple-walk",
    title: "Old Town temple walk",
    destinationId: "bhubaneswar",
    hostName: "Mukteshwar heritage guides",
    summary:
      "Walk the cluster of Kalinga temples at dusk and hear how stone carvers still shape the city’s skyline.",
    imageUrl:
      "/images/experiences/temple-walk.jpg",
    durationHours: 2.5,
    price: 1200,
    currency: "INR",
    rating: 4.7,
    isLocal: true,
  },
];

export function getExperiencesByDestinationId(destinationId: string): Experience[] {
  return experiences.filter((experience) => experience.destinationId === destinationId);
}

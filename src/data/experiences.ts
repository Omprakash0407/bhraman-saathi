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
      "https://images.unsplash.com/photo-1452869544442-ff6d5eff54e2?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    durationHours: 2.5,
    price: 1200,
    currency: "INR",
    rating: 4.7,
    isLocal: true,
  },
];

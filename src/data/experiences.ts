import type { Experience } from "@/types";
import { getAssetPath } from "@/lib/utils";

export const experiences: Experience[] = [
  {
    id: "pattachitra-studio",
    title: "Pattachitra studio visit",
    destinationId: "puri",
    hostName: "Raghurajpur artisans",
    hostType: "artisan",
    summary:
      "Watch scroll painters grind natural colours and try a miniature motif in a heritage crafts village.",
    description:
      "Step into the world of Odisha's most cherished art form. In the heritage village of Raghurajpur, visit a family studio where Pattachitra has been practiced for generations. Watch artisans prepare natural pigments from stones and minerals, see the intricate brushwork techniques passed down through centuries, and try your hand at painting a traditional motif under expert guidance.",
    imageUrl: getAssetPath("/images/experiences/pattachitra.jpg"),
    durationHours: 3,
    price: 1800,
    currency: "INR",
    rating: 4.8,
    isLocal: true,
    category: "crafts",
    whatYoullExperience: [
      "Natural pigment preparation demonstration",
      "Traditional brushwork techniques",
      "Hands-on painting session with expert guidance",
      "Storytelling about Pattachitra's cultural significance",
      "Visit to multiple artisan family studios",
    ],
    responsibleTourism:
      "Directly supports artisan families keeping a 500-year-old tradition alive. Your participation helps sustain this intangible cultural heritage and provides fair income to skilled craftspeople.",
    locationName: "Raghurajpur, Odisha",
    locationCoordinates: {
      latitude: 19.9167,
      longitude: 85.8333,
    },
  },
  {
    id: "chilika-dawn-cruise",
    title: "Dawn cruise with Chilika fishers",
    destinationId: "chilika",
    hostName: "Satapada boat collective",
    hostType: "boat-collective",
    summary:
      "Join a morning route across the lagoon, look for dolphins, and share a simple catch-of-the-day breakfast.",
    description:
      "Experience Chilika Lagoon through the eyes of those who know it best. Join local fishermen at dawn as they navigate the tranquil waters in traditional boats. Spot the famous Irrawaddy dolphins in their natural habitat, learn about sustainable fishing practices, and enjoy a freshly prepared breakfast with the day's catch served on a quiet island.",
    imageUrl: getAssetPath("/images/experiences/chilika-cruise.jpg"),
    durationHours: 4,
    price: 2500,
    currency: "INR",
    rating: 4.9,
    isLocal: true,
    category: "nature",
    whatYoullExperience: [
      "Traditional boat navigation techniques",
      "Dolphin watching in natural habitat",
      "Sustainable fishing practice demonstration",
      "Fresh seafood breakfast with local families",
      "Bird watching at Nalabana Island",
    ],
    responsibleTourism:
      "Supports the local fishing cooperative and promotes sustainable tourism practices that respect the lagoon's delicate ecosystem. Your visit helps alternative livelihoods that don't harm the environment.",
    locationName: "Satapada, Chilika, Odisha",
    locationCoordinates: {
      latitude: 19.7167,
      longitude: 85.3833,
    },
  },
  {
    id: "old-town-temple-walk",
    title: "Old Town temple walk",
    destinationId: "bhubaneswar",
    hostName: "Mukteshwar heritage guides",
    hostType: "heritage-guides",
    summary:
      "Walk the cluster of Kalinga temples at dusk and hear how stone carvers still shape the city's skyline.",
    description:
      "Discover Bhubaneswar's ancient temple cluster as the sun sets and the stones glow golden. Led by heritage guides from families of temple custodians, explore the magnificent Kalinga architecture, learn about the living traditions that continue today, and visit stone carving workshops where artisans still sculpt temple components using age-old techniques.",
    imageUrl: getAssetPath("/images/experiences/temple-walk.jpg"),
    durationHours: 2.5,
    price: 1200,
    currency: "INR",
    rating: 4.7,
    isLocal: true,
    category: "heritage",
    whatYoullExperience: [
      "Guided tour of Kalinga temple architecture",
      "Living temple traditions and rituals",
      "Stone carving workshop visit",
      "Sunset photography opportunities",
      "Stories from temple custodian families",
    ],
    responsibleTourism:
      "Supports heritage guides from traditional temple custodian families and helps preserve oral histories and architectural knowledge. Your visit contributes to the maintenance of these living monuments.",
    locationName: "Old Town, Bhubaneswar, Odisha",
    locationCoordinates: {
      latitude: 20.2387,
      longitude: 85.8392,
    },
  },
];

export function getExperiencesByDestinationId(destinationId: string): Experience[] {
  return experiences.filter((experience) => experience.destinationId === destinationId);
}

export function getExperienceById(id: string): Experience | undefined {
  return experiences.find((experience) => experience.id === id);
}

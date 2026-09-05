import type { Destination } from "@/types";
import { getAssetPath } from "@/lib/utils";

export const destinations: Destination[] = [
  {
    id: "puri",
    name: "Puri",
    location: "Odisha",
    region: "East India",
    summary:
      "Sacred temple town on the Bay of Bengal, known for Jagannath Temple, golden beaches, and Rath Yatra.",
    imageUrl: getAssetPath("/images/Destinations/puri.jpg"),
    tags: ["Spiritual", "Beach", "Culture"],
    isHiddenGem: false,
    crowdLevel: "high",
    travelEssentials: {
      howToReach: {
        airport: "Biju Patnaik Airport, Bhubaneswar (60 km)",
        railway: "Puri Railway Station (well-connected)",
        localTransport: "Auto-rickshaws, taxis, and local buses available"
      },
      bestTime: {
        season: "October to March",
        description: "Pleasant weather for temple visits and beach activities. Avoid peak summer months."
      },
      safetyTips: [
        "Dress modestly when visiting temples",
        "Be cautious during crowded Rath Yatra periods",
        "Follow local guidance during beach activities"
      ],
      responsibleTravel: [
        "Respect temple dress codes and photography rules",
        "Support local artisans and food vendors",
        "Keep beaches clean and avoid plastic waste"
      ]
    }
  },
  {
    id: "konark",
    name: "Konark",
    location: "Odisha",
    region: "East India",
    summary:
      "Home of the UNESCO-listed Sun Temple, a 13th-century chariot in stone facing the eastern sea.",
    imageUrl: getAssetPath("/images/Destinations/konark.jpg"),
    tags: ["Heritage", "UNESCO", "Architecture"],
    isHiddenGem: false,
    crowdLevel: "moderate",
    travelEssentials: {
      howToReach: {
        airport: "Biju Patnaik Airport, Bhubaneswar (65 km)",
        railway: "Konark Railway Station (limited connectivity)",
        localTransport: "Taxis and auto-rickshaws from Puri or Bhubaneswar"
      },
      bestTime: {
        season: "October to February",
        description: "Ideal weather for exploring the temple complex. Early morning visits recommended."
      },
      safetyTips: [
        "Wear comfortable walking shoes for temple exploration",
        "Carry water and sun protection",
        "Follow designated pathways within the complex"
      ],
      responsibleTravel: [
        "Respect the sacred nature of the temple",
        "Do not touch or climb on temple structures",
        "Support local guides for authentic historical information"
      ]
    }
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    location: "Odisha",
    region: "East India",
    summary:
      "The temple city and gateway to Odisha, mixing ancient shrines with a growing food and craft scene.",
    imageUrl: getAssetPath("/images/Destinations/bhubaneswar.jpg"),
    tags: ["Temples", "City", "Food"],
    isHiddenGem: false,
    crowdLevel: "moderate",
    travelEssentials: {
      howToReach: {
        airport: "Biju Patnaik Airport, Bhubaneswar (3 km)",
        railway: "Bhubaneswar Railway Station (major junction)",
        localTransport: "City buses, auto-rickshaws, and app-based cabs"
      },
      bestTime: {
        season: "October to March",
        description: "Comfortable weather for temple tours. Avoid extreme summer heat."
      },
      safetyTips: [
        "Dress appropriately for temple visits",
        "Be aware of your surroundings in crowded areas",
        "Use reliable transportation for late-night travel"
      ],
      responsibleTravel: [
        "Respect temple customs and protocols",
        "Support local handicraft artisans",
        "Choose eco-friendly accommodation options"
      ]
    }
  },
  {
    id: "chilika",
    name: "Chilika",
    location: "Odisha",
    region: "East India",
    summary:
      "Asia's largest brackish lagoon — winter birds, Irrawaddy dolphins, and fishing villages on quiet islands.",
    imageUrl: getAssetPath("/images/Destinations/chillika.jpg"),
    tags: ["Nature", "Wildlife", "Lagoon"],
    isHiddenGem: true,
    crowdLevel: "low",
    travelEssentials: {
      howToReach: {
        airport: "Biju Patnaik Airport, Bhubaneswar (100 km)",
        railway: "Balugaon Railway Station (nearest)",
        localTransport: "Boat services from Satapada and local buses"
      },
      bestTime: {
        season: "November to February",
        description: "Best season for bird watching and dolphin sightings. Pleasant boat rides."
      },
      safetyTips: [
        "Follow boat safety guidelines",
        "Carry life jackets when required",
        "Stay on designated paths during wildlife viewing"
      ],
      responsibleTravel: [
        "Maintain distance from wildlife",
        "Do not litter in the lagoon",
        "Support local boat operators and fishing communities"
      ]
    }
  },
  {
    id: "daringbadi",
    name: "Daringbadi",
    location: "Odisha",
    region: "East India",
    summary:
      "Known as the Kashmir of Odisha — misty hills, coffee plantations, pine forests, and pristine waterfalls in the Eastern Ghats.",
    imageUrl: getAssetPath("/images/Destinations/daringbadi.jpg"),
    tags: ["Hill Station", "Nature", "Coffee"],
    isHiddenGem: true,
    crowdLevel: "low",
    travelEssentials: {
      howToReach: {
        airport: "Biju Patnaik Airport, Bhubaneswar (200 km)",
        railway: "Berhampur Railway Station (nearest)",
        localTransport: "Local buses and hired taxis from major towns"
      },
      bestTime: {
        season: "December to February",
        description: "Ideal for viewing waterfalls and coffee plantations. Avoid monsoon season."
      },
      safetyTips: [
        "Carry warm clothing for chilly evenings",
        "Use local guides for waterfall visits",
        "Stay on marked trails during forest walks"
      ],
      responsibleTravel: [
        "Respect local coffee plantations",
        "Do not disturb wildlife or natural habitats",
        "Support local homestays and businesses"
      ]
    }
  },
  {
    id: "satkosia",
    name: "Satkosia",
    location: "Odisha",
    region: "East India",
    summary:
      "A gorge sanctuary along the Mahanadi River where crocodiles bask, elephants roam, and deep forests meet the river.",
    imageUrl: getAssetPath("/images/Destinations/satkosia.jpg"),
    tags: ["Wildlife", "Sanctuary", "River"],
    isHiddenGem: true,
    crowdLevel: "low",
    travelEssentials: {
      howToReach: {
        airport: "Biju Patnaik Airport, Bhubaneswar (120 km)",
        railway: "Angul Railway Station (nearest)",
        localTransport: "Forest department vehicles and local transport"
      },
      bestTime: {
        season: "November to April",
        description: "Best for wildlife sightings and river activities. Avoid peak monsoon."
      },
      safetyTips: [
        "Always accompany forest guides",
        "Maintain safe distance from wildlife",
        "Follow sanctuary rules and regulations"
      ],
      responsibleTravel: [
        "Do not feed or disturb wildlife",
        "Stay on designated safari paths",
        "Support conservation efforts and local communities"
      ]
    }
  },
  {
    id: "raghurajpur",
    name: "Raghurajpur",
    location: "Odisha",
    region: "East India",
    summary:
      "A heritage crafts village where every home is a gallery — Pattachitra scroll painters, palm-leaf engravers, and traditional artisans.",
    imageUrl: getAssetPath("/images/Destinations/raghurajpur.jpg"),
    tags: ["Heritage", "Crafts", "Art"],
    isHiddenGem: true,
    crowdLevel: "low",
    travelEssentials: {
      howToReach: {
        airport: "Biju Patnaik Airport, Bhubaneswar (15 km)",
        railway: "Puri Railway Station (12 km)",
        localTransport: "Auto-rickshaws and taxis from Puri or Bhubaneswar"
      },
      bestTime: {
        season: "October to March",
        description: "Pleasant weather for village walks and craft demonstrations. Year-round cultural experiences."
      },
      safetyTips: [
        "Respect artisans' workspace and tools",
        "Ask permission before taking photographs",
        "Support fair trade when purchasing crafts"
      ],
      responsibleTravel: [
        "Appreciate the time and skill artisans invest",
        "Purchase directly from artists when possible",
        "Learn about the cultural significance of crafts"
      ]
    }
  },
  {
    id: "bhitarkanika",
    name: "Bhitarkanika",
    location: "Odisha",
    region: "East India",
    summary:
      "India's second-largest mangrove ecosystem — saltwater crocodiles, kingfishers, creeks, and untouched coastal wilderness.",
    imageUrl: getAssetPath("/images/Destinations/bhitarkanika.jpg"),
    tags: ["Mangrove", "Wildlife", "Coastal"],
    isHiddenGem: true,
    crowdLevel: "low",
    travelEssentials: {
      howToReach: {
        airport: "Biju Patnaik Airport, Bhubaneswar (160 km)",
        railway: "Bhadrak Railway Station (nearest)",
        localTransport: "Boat services from Chandbali and local buses"
      },
      bestTime: {
        season: "November to February",
        description: "Ideal for crocodile sightings and bird watching. Avoid monsoon for safety."
      },
      safetyTips: [
        "Follow official boat safety protocols",
        "Maintain distance from crocodiles",
        "Carry insect repellent and sun protection"
      ],
      responsibleTravel: [
        "Do not disturb wildlife or nesting sites",
        "Follow eco-friendly boat practices",
        "Support local conservation programs"
      ]
    }
  },
];

export function getDestinationById(id: string): Destination | undefined {
  return destinations.find((destination) => destination.id === id);
}

export function getHiddenGems(): Destination[] {
  return destinations.filter((destination) => destination.isHiddenGem);
}

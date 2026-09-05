import type { Destination, Experience } from "@/types";
import { destinations, experiences } from "@/data";

export type TripPreferences = {
  destination: string;
  duration: "1-2" | "3-4" | "5-7";
  travellers: number;
  budget: "budget" | "moderate" | "premium";
  interests: ("heritage" | "nature" | "beach" | "wildlife" | "culture" | "food" | "local-experiences")[];
  travelStyle: "relaxed" | "balanced" | "adventure";
};

export type ItineraryDay = {
  day: number;
  morning: string;
  afternoon: string;
  evening: string;
  localExperience?: Experience;
};

export type TripItinerary = {
  destination: Destination;
  duration: string;
  travellers: number;
  budget: string;
  travelStyle: string;
  interests: string[];
  days: ItineraryDay[];
  estimatedBudget: {
    stay: string;
    food: string;
    transport: string;
    experiences: string;
    total: string;
  };
};

export const durationOptions = [
  { value: "1-2", label: "1–2 Days" },
  { value: "3-4", label: "3–4 Days" },
  { value: "5-7", label: "5–7 Days" },
] as const;

export const budgetOptions = [
  { value: "budget", label: "Budget" },
  { value: "moderate", label: "Moderate" },
  { value: "premium", label: "Premium" },
] as const;

export const interestOptions = [
  { value: "heritage", label: "Heritage" },
  { value: "nature", label: "Nature" },
  { value: "beach", label: "Beach" },
  { value: "wildlife", label: "Wildlife" },
  { value: "culture", label: "Culture" },
  { value: "food", label: "Food" },
  { value: "local-experiences", label: "Local Experiences" },
] as const;

export const travelStyleOptions = [
  { value: "relaxed", label: "Relaxed" },
  { value: "balanced", label: "Balanced" },
  { value: "adventure", label: "Adventure" },
] as const;

// Destination-specific activity templates
const destinationActivityTemplates: Record<string, {
  morning: string[];
  afternoon: string[];
  evening: string[];
}> = {
  puri: {
    morning: [
      "Visit Jagannath Temple for morning darshan",
      "Beach sunrise walk at Puri Beach",
      "Explore Pattachitra artisan village",
      "Local market visit for souvenirs",
      "Heritage architecture tour of old Puri",
    ],
    afternoon: [
      "Relax at Puri Beach",
      "Explore temple complex surroundings",
      "Local cuisine experience - traditional Odia food",
      "Craft workshop participation",
      "Cultural site exploration",
    ],
    evening: [
      "Sunset at Puri Beach",
      "Temple evening aarti at Jagannath Temple",
      "Local street food tour",
      "Cultural performance",
      "Relaxed dinner at local restaurant",
    ],
  },
  konark: {
    morning: [
      "Visit Sun Temple UNESCO World Heritage Site",
      "Heritage architecture tour of Konark",
      "Explore Chandrabhaga Beach area",
      "Local artisan village visit",
      "Photography of temple sculptures",
    ],
    afternoon: [
      "Detailed Sun Temple exploration",
      "Craft workshop - stone carving demonstration",
      "Coastal area exploration",
      "Local cuisine experience",
      "Scenic viewpoint visit",
    ],
    evening: [
      "Sunset view at Chandrabhaga Beach",
      "Cultural performance",
      "Traditional Odia dinner experience",
      "Photography at scenic spots",
      "Village cultural program",
    ],
  },
  bhubaneswar: {
    morning: [
      "Visit Lingaraj Temple complex",
      "Heritage architecture tour of Temple City",
      "Explore Udayagiri and Khandagiri caves",
      "Local market visit",
      "Museum and cultural site exploration",
    ],
    afternoon: [
      "Temple hopping tour - Parasurameswara, Mukteswara",
      "Local cuisine experience",
      "Craft workshop participation",
      "Cultural site exploration",
      "Scenic viewpoint visit",
    ],
    evening: [
      "Temple evening aarti",
      "Local street food tour",
      "Cultural performance",
      "Relaxed dinner at local restaurant",
      "Photography at temple complexes",
    ],
  },
  chilika: {
    morning: [
      "Boat safari on Chilika Lagoon",
      "Bird watching at Nalabana Island",
      "Visit fishing villages",
      "Nature photography session",
      "Explore lagoon ecosystem",
    ],
    afternoon: [
      "Dolphin watching boat tour",
      "Local fishing village experience",
      "Nature trail walk",
      "Local cuisine experience - fresh seafood",
      "Scenic viewpoint visit",
    ],
    evening: [
      "Sunset boat ride on Chilika",
      "Village cultural program",
      "Local seafood dinner experience",
      "Photography at scenic spots",
      "Nature trail walk",
    ],
  },
  daringbadi: {
    morning: [
      "Hill station nature walk",
      "Visit waterfalls - Badaghagara, Belghar",
      "Coffee plantation tour",
      "Forest exploration and trekking",
      "Scenic viewpoint visit",
    ],
    afternoon: [
      "Nature photography session",
      "Wildlife spotting in forest areas",
      "Trekking to scenic viewpoints",
      "Local tribal village experience",
      "Coffee tasting experience",
    ],
    evening: [
      "Sunset viewpoint visit",
      "Nature trail walk",
      "Local tribal cultural program",
      "Relaxed dinner with local cuisine",
      "Photography at scenic spots",
    ],
  },
  satkosia: {
    morning: [
      "Satkosia Gorge boat safari",
      "Wildlife sanctuary visit",
      "Nature walk in forest reserve",
      "Bird watching along river banks",
      "Scenic viewpoint visit",
    ],
    afternoon: [
      "River rafting experience",
      "Forest exploration and trekking",
      "Wildlife photography session",
      "Local fishing village visit",
      "Nature trail walk",
    ],
    evening: [
      "Sunset at Satkosia Gorge",
      "Nature trail walk",
      "Village cultural program",
      "Relaxed dinner with local cuisine",
      "Photography at scenic spots",
    ],
  },
  raghurajpur: {
    morning: [
      "Visit Pattachitra artisan village",
      "Heritage craft demonstration",
      "Artisan workshop participation",
      "Traditional painting class",
      "Village heritage walk",
    ],
    afternoon: [
      "Craft workshop participation",
      "Local artisan interaction",
      "Traditional Odia cuisine experience",
      "Cultural site exploration",
      "Scenic village photography",
    ],
    evening: [
      "Village cultural program",
      "Traditional performance",
      "Local street food tour",
      "Artisan dinner experience",
      "Photography at artisan workshops",
    ],
  },
  bhitarkanika: {
    morning: [
      "Boat safari through mangroves",
      "Bird watching at sanctuary",
      "Visit crocodile breeding center",
      "Nature photography session",
      "Explore mangrove ecosystem",
    ],
    afternoon: [
      "Wildlife boat safari",
      "Fishing village experience",
      "Nature trail walk",
      "Local cuisine experience",
      "Scenic viewpoint visit",
    ],
    evening: [
      "Sunset boat ride",
      "Village cultural program",
      "Local seafood dinner",
      "Photography at scenic spots",
      "Nature trail walk",
    ],
  },
};

// Fallback generic activities for unknown destinations
const genericActivityTemplates = {
  morning: [
    "Explore local attractions",
    "Nature walk and sightseeing",
    "Local market visit",
    "Heritage site exploration",
    "Scenic viewpoint visit",
  ],
  afternoon: [
    "Cultural site exploration",
    "Local cuisine experience",
    "Nature photography session",
    "Scenic viewpoint visit",
    "Relax and enjoy the surroundings",
  ],
  evening: [
    "Cultural performance",
    "Local street food tour",
    "Photography at scenic spots",
    "Relaxed dinner at local restaurant",
    "Enjoy the evening atmosphere",
  ],
};

// Helper function to get destination-specific activities based on interests
function getActivitiesByInterests(
  destinationId: string,
  interests: string[],
  timeOfDay: "morning" | "afternoon" | "evening"
): string[] {
  // Get destination-specific templates or fallback to generic
  const templates = destinationActivityTemplates[destinationId] || genericActivityTemplates;
  const allActivities = templates[timeOfDay];
  
  if (interests.length === 0) {
    return allActivities;
  }
  
  // Collect matching activities for all selected interests
  let matchingActivities: string[] = [];
  
  // Check each interest and collect matching activities
  interests.forEach(interest => {
    if (interest === "heritage" || interest === "culture") {
      const matches = allActivities.filter(activity => 
        activity.includes("temple") || 
        activity.includes("heritage") || 
        activity.includes("cultural") ||
        activity.includes("architecture") ||
        activity.includes("monument") ||
        activity.includes("ancient")
      );
      matchingActivities = [...matchingActivities, ...matches];
    }
    if (interest === "nature" || interest === "wildlife") {
      const matches = allActivities.filter(activity => 
        activity.includes("nature") || 
        activity.includes("wildlife") || 
        activity.includes("bird") ||
        activity.includes("sanctuary") ||
        activity.includes("forest") ||
        activity.includes("waterfall") ||
        activity.includes("mangrove") ||
        activity.includes("lagoon") ||
        activity.includes("gorge") ||
        activity.includes("hill")
      );
      matchingActivities = [...matchingActivities, ...matches];
    }
    if (interest === "beach") {
      const matches = allActivities.filter(activity => 
        activity.includes("beach") || 
        activity.includes("coastal") ||
        activity.includes("sunrise") || 
        activity.includes("sunset")
      );
      matchingActivities = [...matchingActivities, ...matches];
    }
    if (interest === "food") {
      const matches = allActivities.filter(activity => 
        activity.includes("cuisine") || 
        activity.includes("food") || 
        activity.includes("restaurant") ||
        activity.includes("dinner") ||
        activity.includes("seafood")
      );
      matchingActivities = [...matchingActivities, ...matches];
    }
    if (interest === "local-experiences") {
      const matches = allActivities.filter(activity => 
        activity.includes("artisan") || 
        activity.includes("craft") || 
        activity.includes("village") ||
        activity.includes("local") ||
        activity.includes("tribal") ||
        activity.includes("workshop")
      );
      matchingActivities = [...matchingActivities, ...matches];
    }
  });
  
  // Remove duplicates and return matching activities, or all activities if no matches
  const uniqueActivities = [...new Set(matchingActivities)];
  return uniqueActivities.length > 0 ? uniqueActivities : allActivities;
}

// Helper function to get duration in days
function getDurationInDays(duration: string): number {
  switch (duration) {
    case "1-2": return 2;
    case "3-4": return 4;
    case "5-7": return 7;
    default: return 3;
  }
}

// Helper function to calculate estimated budget
function calculateBudget(
  duration: string,
  travellers: number,
  budgetLevel: string
): TripItinerary["estimatedBudget"] {
  const days = getDurationInDays(duration);
  const multiplier = travellers;
  
  // Base costs per person per day (in INR)
  const baseCosts = {
    budget: { stay: 800, food: 400, transport: 200, experiences: 200 },
    moderate: { stay: 1500, food: 600, transport: 400, experiences: 400 },
    premium: { stay: 3000, food: 1200, transport: 800, experiences: 800 },
  };
  
  const costs = baseCosts[budgetLevel as keyof typeof baseCosts];
  
  const stay = costs.stay * days * multiplier;
  const food = costs.food * days * multiplier;
  const transport = costs.transport * days * multiplier;
  const experiences = costs.experiences * days * multiplier;
  const total = stay + food + transport + experiences;
  
  // Add some variance for ranges
  const stayRange = `${Math.round(stay * 0.8).toLocaleString("en-IN")}–${Math.round(stay * 1.2).toLocaleString("en-IN")}`;
  const foodRange = `${Math.round(food * 0.8).toLocaleString("en-IN")}–${Math.round(food * 1.2).toLocaleString("en-IN")}`;
  const transportRange = `${Math.round(transport * 0.8).toLocaleString("en-IN")}–${Math.round(transport * 1.2).toLocaleString("en-IN")}`;
  const experiencesRange = `${Math.round(experiences * 0.8).toLocaleString("en-IN")}–${Math.round(experiences * 1.2).toLocaleString("en-IN")}`;
  const totalRange = `${Math.round(total * 0.8).toLocaleString("en-IN")}–${Math.round(total * 1.2).toLocaleString("en-IN")}`;
  
  return {
    stay: `₹${stayRange}`,
    food: `₹${foodRange}`,
    transport: `₹${transportRange}`,
    experiences: `₹${experiencesRange}`,
    total: `₹${totalRange}`,
  };
}

// Main function to generate itinerary
export function generateItinerary(preferences: TripPreferences): TripItinerary {
  const destination = destinations.find(d => d.id === preferences.destination);
  if (!destination) {
    throw new Error("Destination not found");
  }
  
  const days = getDurationInDays(preferences.duration);
  const itineraryDays: ItineraryDay[] = [];
  
  // Get relevant experiences for the destination
  const destinationExperiences = experiences.filter(
    exp => exp.destinationId === preferences.destination
  );
  
  // Customize activities based on destination
  const destinationPrefix = destination.name;
  
  for (let i = 1; i <= days; i++) {
    const morningActivities = getActivitiesByInterests(preferences.destination, preferences.interests, "morning");
    const afternoonActivities = getActivitiesByInterests(preferences.destination, preferences.interests, "afternoon");
    const eveningActivities = getActivitiesByInterests(preferences.destination, preferences.interests, "evening");
    
    // Select activities (simple cycling through available options)
    const morning: string = morningActivities.length > 0 
      ? (morningActivities[(i - 1) % morningActivities.length] || `Explore ${destinationPrefix}`)
      : `Explore ${destinationPrefix}`;
    const afternoon: string = afternoonActivities.length > 0 
      ? (afternoonActivities[(i - 1) % afternoonActivities.length] || `Relax and enjoy local cuisine in ${destinationPrefix}`)
      : `Relax and enjoy local cuisine in ${destinationPrefix}`;
    const evening: string = eveningActivities.length > 0 
      ? (eveningActivities[(i - 1) % eveningActivities.length] || `Enjoy the evening atmosphere in ${destinationPrefix}`)
      : `Enjoy the evening atmosphere in ${destinationPrefix}`;
    
    // Add local experience on day 2 or middle day
    let localExperience: Experience | undefined;
    if (i === 2 || (days > 2 && i === Math.ceil(days / 2))) {
      if (destinationExperiences.length > 0) {
        localExperience = destinationExperiences[(i - 1) % destinationExperiences.length];
      }
    }
    
    itineraryDays.push({
      day: i,
      morning,
      afternoon,
      evening,
      localExperience,
    });
  }
  
  return {
    destination,
    duration: durationOptions.find(opt => opt.value === preferences.duration)?.label || preferences.duration,
    travellers: preferences.travellers,
    budget: budgetOptions.find(opt => opt.value === preferences.budget)?.label || preferences.budget,
    travelStyle: travelStyleOptions.find(opt => opt.value === preferences.travelStyle)?.label || preferences.travelStyle,
    interests: preferences.interests.map(interest => 
      interestOptions.find(opt => opt.value === interest)?.label || interest
    ),
    days: itineraryDays,
    estimatedBudget: calculateBudget(preferences.duration, preferences.travellers, preferences.budget),
  };
}

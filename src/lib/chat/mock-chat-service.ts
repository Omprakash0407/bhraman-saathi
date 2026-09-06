import type { ChatService, ChatResponse } from "./types";
import {
  destinations,
  getHiddenGems,
  experiences,
  getExperiencesByDestinationId,
} from "@/data";
import { generateItinerary, type TripPreferences } from "@/data/planner";
import { routes } from "@/lib/routes";
import type { Destination, Experience } from "@/types";

class MockChatService implements ChatService {
  async sendMessage(message: string): Promise<ChatResponse> {
    // Simulate thinking delay
    await this.delay(800 + Math.random() * 400);

    const lowerMessage = message.toLowerCase();

    // 1. Greeting detection
    if (this.isGreeting(lowerMessage)) {
      return this.handleGreeting();
    }

    // 2. Trip planning (highest priority for travel intent)
    if (this.isTripPlanningQuery(lowerMessage)) {
      return this.handleTripPlanningQuery(lowerMessage);
    }

    // 3. Travel essentials
    if (this.isTravelEssentialsQuery(lowerMessage)) {
      return this.handleTravelEssentialsQuery(lowerMessage);
    }

    // 4. Specific experience entity detection (before generic experience query)
    const matchedExperience = this.findExperienceInQuery(lowerMessage);
    if (matchedExperience) {
      return this.handleSpecificExperience(matchedExperience);
    }

    // 5. Experience discovery (generic)
    if (this.isExperienceQuery(lowerMessage)) {
      return this.handleExperienceQuery(lowerMessage);
    }

    // 6. Hidden gems
    if (this.isHiddenGemQuery(lowerMessage)) {
      return this.handleHiddenGemQuery(lowerMessage);
    }

    // 7. Destination information
    if (this.isDestinationQuery(lowerMessage)) {
      return this.handleDestinationQuery(lowerMessage);
    }

    // 8. General fallback
    return this.handleFallback();
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private findExperienceInQuery(query: string): Experience | null {
    // Common words to ignore when matching (function words only)
    const stopWords = new Set([
      "the", "a", "an", "tell", "me", "about", "what", "is", "i", "want", "to", "visit", "show"
    ]);

    // Normalize query: remove punctuation and stop words
    const normalizedQuery = query
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(word => !stopWords.has(word));

    if (normalizedQuery.length === 0) {
      return null;
    }

    // Score each experience based on word matches
    const scoredExperiences = experiences.map(exp => {
      const expWords = exp.title.toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(word => !stopWords.has(word));

      // Count matching words (require partial match)
      const matches = normalizedQuery.filter(queryWord =>
        expWords.some(expWord =>
          expWord.includes(queryWord) || queryWord.includes(expWord)
        )
      ).length;

      // Calculate match percentage
      const matchPercentage = matches / Math.max(normalizedQuery.length, expWords.length);

      return {
        experience: exp,
        score: matchPercentage,
        matches
      };
    });

    // Find best match (highest score with at least some matches)
    // Require at least 30% match and at least 1 word match
    const bestMatch = scoredExperiences
      .filter(item => item.matches > 0 && item.score >= 0.3)
      .sort((a, b) => b.score - a.score)[0];

    return bestMatch ? bestMatch.experience : null;
  }

  private handleSpecificExperience(experience: Experience): ChatResponse {
    const destination = destinations.find(d => d.id === experience.destinationId);

    return {
      message: this.formatSpecificExperience(experience, destination?.name),
      actions: [
        {
          type: "view-experience",
          label: "View Experience",
          href: `${routes.public.experiences}/${experience.id}`,
        },
        {
          type: "open-maps",
          label: "Open in Google Maps",
          data: {
            latitude: experience.locationCoordinates.latitude,
            longitude: experience.locationCoordinates.longitude,
          },
        },
        {
          type: "plan-trip",
          label: "Plan Trip",
          href: routes.tourist.planner,
        },
      ],
      suggestions: [
        `What experiences can I try in ${destination?.name || "Odisha"}?`,
        `Tell me about ${destination?.name || "this destination"}`,
        `Plan a trip to ${destination?.name || "this destination"}`,
      ],
    };
  }

  private formatSpecificExperience(experience: Experience, destinationName?: string): string {
    const location = experience.locationName || (destinationName ? destinationName : "Odisha");

    return `**${experience.title}**

${experience.description}

**Details:**
• Duration: ${experience.durationHours} hours
• Price: ₹${experience.price}
• Rating: ${experience.rating}/5
• Category: ${experience.category}
• Host: ${experience.hostName}

**What you'll experience:**
${experience.whatYoullExperience.map(item => `• ${item}`).join("\n")}

**Responsible Tourism:**
${experience.responsibleTourism}

This experience is located in ${location}. Would you like me to help you plan a trip around this experience?`;
  }

  private isGreeting(message: string): boolean {
    const greetings = ["hi", "hello", "hey", "namaste", "hola"];
    return greetings.some((greeting) => message === greeting || message.startsWith(greeting));
  }

  private handleGreeting(): ChatResponse {
    return {
      message: "Namaste! 👋 I'm Saathi. I can help you discover destinations, hidden gems, local experiences, travel essentials, or plan a trip. What would you like to explore?",
      suggestions: [
        "Tell me about Puri",
        "Show me hidden gems",
        "Plan a 3-day trip to Bhubaneswar",
        "How can I travel responsibly?",
      ],
    };
  }

  private isDestinationQuery(message: string): boolean {
    const destinationKeywords = ["tell me about", "what is", "where should i go", "destination", "visit", "information about", "details about"];
    return destinationKeywords.some((kw) => message.includes(kw));
  }

  private handleDestinationQuery(message: string): ChatResponse {
    // Find matching destination
    const matchedDestination = destinations.find((dest) =>
      message.includes(dest.name.toLowerCase())
    );

    if (matchedDestination) {
      return {
        message: this.formatDestinationInfo(matchedDestination),
        actions: [
          {
            type: "view-destination",
            label: "View Destination",
            href: `${routes.public.destinations}/${matchedDestination.id}`,
          },
          {
            type: "open-maps",
            label: "Open in Google Maps",
            data: {
              latitude: matchedDestination.locationCoordinates.latitude,
              longitude: matchedDestination.locationCoordinates.longitude,
            },
          },
          {
            type: "plan-trip",
            label: "Plan Trip",
            href: routes.tourist.planner,
          },
        ],
        suggestions: [
          `How do I reach ${matchedDestination.name}?`,
          `What experiences can I try in ${matchedDestination.name}?`,
          `Plan a trip to ${matchedDestination.name}`,
        ],
      };
    }

    // General destination question
    return {
      message: this.formatDestinationSuggestions(),
      suggestions: destinations.slice(0, 4).map((d) => `Tell me about ${d.name}`),
    };
  }

  private formatDestinationInfo(destination: typeof destinations[0]): string {
    const gemBadge = destination.isHiddenGem ? " (Hidden Gem)" : "";
    return `${destination.name}${gemBadge}

${destination.summary}

**Location:** ${destination.location}, ${destination.region}

**Tags:** ${destination.tags.join(", ")}

**Crowd Level:** ${destination.crowdLevel}

I can help you plan a trip to ${destination.name} or tell you more about travel essentials, experiences, and hidden gems in the area.`;
  }

  private formatDestinationSuggestions(): string {
    const featured = destinations.slice(0, 5);
    const gemList = getHiddenGems().slice(0, 3);

    return `Here are some popular destinations in Odisha:

${featured.map((d) => `• **${d.name}** - ${d.summary}`).join("\n")}

**Hidden Gems:**
${gemList.map((g) => `• **${g.name}** - ${g.summary}`).join("\n")}

Would you like me to tell you more about any of these destinations or help you plan a trip?`;
  }

  private isHiddenGemQuery(message: string): boolean {
    return (
      message.includes("hidden gem") ||
      message.includes("hidden gems") ||
      message.includes("less crowded") ||
      message.includes("offbeat")
    );
  }

  private handleHiddenGemQuery(message: string): ChatResponse {
    const hiddenGems = getHiddenGems();

    if (hiddenGems.length === 0) {
      return {
        message: "I couldn't find any hidden gems in our database right now.",
      };
    }

    // Check if asking about gems near a specific location
    const locationMatch = destinations.find((dest) =>
      message.includes(dest.name.toLowerCase())
    );

    if (locationMatch) {
      const nearbyGems = hiddenGems.filter((gem) =>
        gem.location.toLowerCase().includes(locationMatch.location.toLowerCase())
      );

      if (nearbyGems.length > 0) {
        return {
          message: this.formatHiddenGems(nearbyGems, `near ${locationMatch.name}`),
          suggestions: nearbyGems.map((g) => `Tell me about ${g.name}`),
        };
      }
    }

    return {
      message: this.formatHiddenGems(hiddenGems, "in Odisha"),
      suggestions: hiddenGems.slice(0, 4).map((g) => `Tell me about ${g.name}`),
    };
  }

  private formatHiddenGems(gems: Destination[], location: string): string {
    return `Here are hidden gems ${location}:

${gems.map((g) => `• **${g.name}** - ${g.summary}`).join("\n")}

These are lesser-known destinations with lower crowd levels. Perfect for authentic experiences!`;
  }

  private isExperienceQuery(message: string): boolean {
    return (
      message.includes("experience") ||
      message.includes("experiences") ||
      message.includes("what can i do") ||
      message.includes("what can i experience") ||
      message.includes("activities") ||
      message.includes("things to do")
    );
  }

  private handleExperienceQuery(message: string): ChatResponse {
    // Check if asking about experiences in a specific location
    const locationMatch = destinations.find((dest) =>
      message.includes(dest.name.toLowerCase())
    );

    if (locationMatch) {
      const destinationExperiences = getExperiencesByDestinationId(locationMatch.id);

      if (destinationExperiences.length > 0) {
        return {
          message: this.formatExperiences(destinationExperiences, locationMatch.name),
          suggestions: destinationExperiences.map((e) => `Tell me about ${e.title}`),
        };
      }

      return {
        message: `I don't have specific experiences listed for ${locationMatch.name} yet, but I can help you plan a trip there!`,
      };
    }

    // General experience question
    return {
      message: this.formatExperiences(experiences.slice(0, 5), "Odisha"),
      suggestions: experiences.slice(0, 4).map((e) => `Tell me about ${e.title}`),
    };
  }

  private formatExperiences(expList: Experience[], location: string): string {
    return `Here are local experiences you can try in ${location}:

${expList.map((e) => `• **${e.title}** - ${e.summary}\n  *Duration:* ${e.durationHours} hours | *Price:* ₹${e.price} | *Rating:* ${e.rating}/5`).join("\n\n")}

These experiences are hosted by local artisans, guides, and communities. Each one supports local tourism and offers authentic cultural exchange.`;
  }

  private isTravelEssentialsQuery(message: string): boolean {
    return (
      message.includes("how do i reach") ||
      message.includes("how to reach") ||
      message.includes("getting there") ||
      message.includes("transport") ||
      message.includes("best time") ||
      message.includes("when should i visit") ||
      message.includes("when to visit") ||
      message.includes("safety") ||
      message.includes("safe") ||
      message.includes("responsibly") ||
      message.includes("responsible travel") ||
      message.includes("travel responsibly")
    );
  }

  private handleTravelEssentialsQuery(message: string): ChatResponse {
    const destinationMatch = destinations.find((dest) =>
      message.includes(dest.name.toLowerCase())
    );

    // Check for specific travel essential types first
    const isHowToReach = message.includes("reach") || message.includes("how to") || message.includes("getting there") || message.includes("transport");
    const isBestTime = message.includes("best time") || message.includes("when should") || message.includes("when to visit");
    const isSafety = message.includes("safety") || message.includes("safe");
    const isResponsible = message.includes("responsibly") || message.includes("responsible travel");

    if (destinationMatch && destinationMatch.travelEssentials) {
      const essentials = destinationMatch.travelEssentials;

      if (isHowToReach) {
        return {
          message: this.formatHowToReach(destinationMatch.name, essentials.howToReach),
          actions: [
            {
              type: "view-destination",
              label: "View Destination",
              href: `${routes.public.destinations}/${destinationMatch.id}`,
            },
            {
              type: "open-maps",
              label: "Open in Google Maps",
              data: {
                latitude: destinationMatch.locationCoordinates.latitude,
                longitude: destinationMatch.locationCoordinates.longitude,
              },
            },
            {
              type: "plan-trip",
              label: "Plan Trip",
              href: routes.tourist.planner,
            },
          ],
          suggestions: [
            `Best time to visit ${destinationMatch.name}`,
            `Safety tips for ${destinationMatch.name}`,
          ],
        };
      }

      if (isBestTime) {
        return {
          message: this.formatBestTime(essentials.bestTime),
          actions: [
            {
              type: "view-destination",
              label: "View Destination",
              href: `${routes.public.destinations}/${destinationMatch.id}`,
            },
            {
              type: "open-maps",
              label: "Open in Google Maps",
              data: {
                latitude: destinationMatch.locationCoordinates.latitude,
                longitude: destinationMatch.locationCoordinates.longitude,
              },
            },
            {
              type: "plan-trip",
              label: "Plan Trip",
              href: routes.tourist.planner,
            },
          ],
          suggestions: [
            `How do I reach ${destinationMatch.name}?`,
            `Safety tips for ${destinationMatch.name}`,
          ],
        };
      }

      if (isSafety) {
        return {
          message: this.formatSafetyTips(essentials.safetyTips),
          actions: [
            {
              type: "view-destination",
              label: "View Destination",
              href: `${routes.public.destinations}/${destinationMatch.id}`,
            },
            {
              type: "open-maps",
              label: "Open in Google Maps",
              data: {
                latitude: destinationMatch.locationCoordinates.latitude,
                longitude: destinationMatch.locationCoordinates.longitude,
              },
            },
            {
              type: "plan-trip",
              label: "Plan Trip",
              href: routes.tourist.planner,
            },
          ],
          suggestions: [
            `How do I reach ${destinationMatch.name}?`,
            `Responsible travel tips`,
          ],
        };
      }

      if (isResponsible) {
        return {
          message: this.formatResponsibleTravel(essentials.responsibleTravel),
          actions: [
            {
              type: "view-destination",
              label: "View Destination",
              href: `${routes.public.destinations}/${destinationMatch.id}`,
            },
            {
              type: "open-maps",
              label: "Open in Google Maps",
              data: {
                latitude: destinationMatch.locationCoordinates.latitude,
                longitude: destinationMatch.locationCoordinates.longitude,
              },
            },
            {
              type: "plan-trip",
              label: "Plan Trip",
              href: routes.tourist.planner,
            },
          ],
          suggestions: [
            `Safety tips for ${destinationMatch.name}`,
            `Hidden gems near ${destinationMatch.name}`,
          ],
        };
      }
    }

    // General responsible travel question (without specific destination)
    if (isResponsible) {
      return {
        message: `**Responsible Travel Tips:**

• Respect local customs, especially at religious sites
• Support local artisans and businesses
• Choose eco-friendly accommodation and transport
• Maintain distance from wildlife
• Do not litter in natural areas
• Learn about local culture before visiting
• Ask permission before photographing people

Would you like destination-specific responsible travel tips?`,
        suggestions: destinations.slice(0, 3).map((d) => `Responsible travel tips for ${d.name}`),
      };
    }

    // General travel essentials question without destination
    return {
      message: "I can help you with travel essentials like how to reach destinations, best time to visit, safety tips, and responsible travel guidance. Just ask about a specific destination!",
      suggestions: destinations.slice(0, 3).map((d) => `How do I reach ${d.name}?`),
    };
  }

  private formatHowToReach(destination: string, howToReach: { airport: string; railway: string; localTransport: string }): string {
    return `**How to reach ${destination}:**

✈️ **By Air:** ${howToReach.airport}

🚂 **By Rail:** ${howToReach.railway}

🚗 **Local Transport:** ${howToReach.localTransport}`;
  }

  private formatBestTime(bestTime: { season: string; description: string }): string {
    return `**Best Time to Visit:**

📅 **Season:** ${bestTime.season}

${bestTime.description}`;
  }

  private formatSafetyTips(tips: string[]): string {
    return `**Safety Tips:**

${tips.map((tip, i) => `${i + 1}. ${tip}`).join("\n")}`;
  }

  private formatResponsibleTravel(tips: string[]): string {
    return `**Responsible Travel:**

${tips.map((tip, i) => `${i + 1}. ${tip}`).join("\n")}`;
  }

  private isTripPlanningQuery(message: string): boolean {
    return (
      message.includes("plan a trip") ||
      message.includes("plan a") ||
      message.includes("plan my") ||
      message.includes("itinerary") ||
      message.includes("under") ||
      (message.includes("budget") && (message.includes("trip") || message.includes("₹")))
    );
  }

  private handleTripPlanningQuery(message: string): ChatResponse {
    // Extract destination
    const destinationMatch = destinations.find((dest) =>
      message.includes(dest.name.toLowerCase())
    );

    // Extract duration
    const durationMatch = message.match(/(\d+)\s*day/i);
    const duration = durationMatch && durationMatch[1] ? parseInt(durationMatch[1]) : 3;

    // Extract budget
    let budget: TripPreferences["budget"] = "moderate";
    if (message.includes("budget") || message.includes("under")) {
      const budgetMatch = message.match(/under\s*₹?\s*(\d+)/i);
      if (budgetMatch && budgetMatch[1]) {
        const amount = parseInt(budgetMatch[1]);
        if (amount < 3000) budget = "budget";
        else if (amount > 10000) budget = "premium";
      }
    }

    if (destinationMatch) {
      try {
        const durationKey = duration <= 2 ? "1-2" : duration <= 4 ? "3-4" : "5-7";
        const preferences: TripPreferences = {
          destination: destinationMatch.id,
          duration: durationKey,
          travellers: 2,
          budget,
          interests: ["heritage", "culture", "local-experiences"],
          travelStyle: "balanced",
        };

        const itinerary = generateItinerary(preferences);

        return {
          message: this.formatItinerary(itinerary),
          suggestions: [
            `Tell me about ${destinationMatch.name}`,
            `What experiences can I try in ${destinationMatch.name}?`,
            `How do I reach ${destinationMatch.name}?`,
          ],
        };
      } catch (error) {
        return {
          message: "I had trouble generating that itinerary. Let me help you plan it differently!",
        };
      }
    }

    // General trip planning question
    return {
      message: `I'd love to help you plan a trip! Here are some destinations you can choose from:

${destinations.slice(0, 5).map((d) => `• **${d.name}**`).join("\n")}

Just tell me something like "Plan a 3-day trip to Puri" or "Plan a trip to Konark" and I'll create a personalized itinerary for you!`,
      suggestions: destinations.slice(0, 4).map((d) => `Plan a trip to ${d.name}`),
    };
  }

  private formatItinerary(itinerary: {
    destination: Destination;
    duration: string;
    travellers: number;
    budget: string;
    travelStyle: string;
    interests: string[];
    days: Array<{
      day: number;
      morning: string;
      afternoon: string;
      evening: string;
      localExperience?: Experience;
    }>;
    estimatedBudget: {
      stay: string;
      food: string;
      transport: string;
      experiences: string;
      total: string;
    };
  }): string {
    const daysList = itinerary.days
      .map(
        (day) => `
**Day ${day.day}:**
• Morning: ${day.morning}
• Afternoon: ${day.afternoon}
• Evening: ${day.evening}
${day.localExperience ? `• Experience: ${day.localExperience.title} (₹${day.localExperience.price})` : ""}`
      )
      .join("\n");

    return `Here's your personalized trip to **${itinerary.destination.name}**:

**Duration:** ${itinerary.duration}
**Travellers:** ${itinerary.travellers}
**Budget:** ${itinerary.budget}
**Travel Style:** ${itinerary.travelStyle}

${daysList}

**Estimated Budget:**
• Stay: ${itinerary.estimatedBudget.stay}
• Food: ${itinerary.estimatedBudget.food}
• Transport: ${itinerary.estimatedBudget.transport}
• Experiences: ${itinerary.estimatedBudget.experiences}
• **Total: ${itinerary.estimatedBudget.total}**

Would you like me to adjust this itinerary or tell you more about any of these destinations?`;
  }

  private handleFallback(): ChatResponse {
    return {
      message: `I can help you discover destinations, hidden gems, local experiences, travel essentials, and plan your trip. Here are some things you can ask me:

• "Tell me about Puri"
• "Show me hidden gems"
• "What can I experience in Raghurajpur?"
• "How do I reach Chilika?"
• "Plan a 3-day trip to Bhubaneswar"
• "How can I travel responsibly?"

What would you like to explore?`,
      suggestions: [
        "Tell me about Puri",
        "Show me hidden gems",
        "Plan a 3-day trip to Bhubaneswar",
        "How can I travel responsibly?",
      ],
    };
  }
}

export const mockChatService = new MockChatService();

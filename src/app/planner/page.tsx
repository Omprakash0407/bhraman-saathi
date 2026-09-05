"use client";

import { useState } from "react";

import { PlannerHero } from "@/components/planner/planner-hero";
import { TripPreferencesForm } from "@/components/planner/trip-preferences-form";
import { TripResult } from "@/components/planner/trip-result";
import { generateItinerary, type TripPreferences, type TripItinerary } from "@/data/planner";

export default function PlannerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<TripItinerary | null>(null);

  const handleFormSubmit = (preferences: TripPreferences) => {
    setIsLoading(true);
    
    // Simulate loading state
    setTimeout(() => {
      try {
        const generatedItinerary = generateItinerary(preferences);
        setItinerary(generatedItinerary);
      } catch (error) {
        console.error("Error generating itinerary:", error);
        alert("There was an error generating your itinerary. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleReset = () => {
    setItinerary(null);
  };

  return (
    <main>
      <PlannerHero />
      
      {!itinerary ? (
        <TripPreferencesForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      ) : (
        <TripResult itinerary={itinerary} onReset={handleReset} />
      )}
    </main>
  );
}

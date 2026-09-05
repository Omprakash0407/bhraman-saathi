"use client";

import { useState } from "react";
import { MapPin, Calendar, Users, Wallet, Heart, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/common/page-container";
import { destinations } from "@/data";
import {
  durationOptions,
  budgetOptions,
  interestOptions,
  travelStyleOptions,
  type TripPreferences,
} from "@/data/planner";

type TripPreferencesFormProps = {
  onSubmit: (preferences: TripPreferences) => void;
  isLoading?: boolean;
};

type Interest = (typeof interestOptions)[number]["value"];

export function TripPreferencesForm({
  onSubmit,
  isLoading = false,
}: TripPreferencesFormProps) {
  const [destination, setDestination] = useState<string>("");
  const [duration, setDuration] =
    useState<TripPreferences["duration"]>("3-4");
  const [travellers, setTravellers] = useState<number>(2);
  const [budget, setBudget] =
    useState<TripPreferences["budget"]>("moderate");
  const [interests, setInterests] = useState<Interest[]>([]);
  const [travelStyle, setTravelStyle] =
    useState<TripPreferences["travelStyle"]>("balanced");

  const toggleInterest = (interest: Interest) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!destination) {
      alert("Please select a destination");
      return;
    }

    if (interests.length === 0) {
      alert("Please select at least one interest");
      return;
    }

    onSubmit({
      destination,
      duration,
      travellers,
      budget,
      interests,
      travelStyle,
    });
  };

  return (
    <section className="bg-surface py-12 sm:py-16">
      <PageContainer>
        <form onSubmit={handleSubmit} className="max-w-3xl space-y-8">
          {/* Destination */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <MapPin className="size-4 text-highlight" />
              Destination / Region
            </label>

            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
              required
            >
              <option value="">Select a destination</option>

              {destinations.map((dest) => (
                <option key={dest.id} value={dest.id}>
                  {dest.name}, {dest.location}
                </option>
              ))}
            </select>
          </div>

          {/* Duration and Travellers */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Calendar className="size-4 text-highlight" />
                Trip Duration
              </label>

              <div className="flex gap-2">
                {durationOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setDuration(
                        option.value as TripPreferences["duration"]
                      )
                    }
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                      duration === option.value
                        ? "border-highlight bg-highlight text-highlight-foreground"
                        : "border-border bg-background hover:bg-muted"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Users className="size-4 text-highlight" />
                Number of Travellers
              </label>

              <input
                type="number"
                min="1"
                max="20"
                value={travellers}
                onChange={(e) =>
                  setTravellers(
                    Math.max(1, parseInt(e.target.value) || 1)
                  )
                }
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring"
                required
              />
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Wallet className="size-4 text-highlight" />
              Budget
            </label>

            <div className="flex gap-2">
              {budgetOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setBudget(
                      option.value as TripPreferences["budget"]
                    )
                  }
                  className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    budget === option.value
                      ? "border-highlight bg-highlight text-highlight-foreground"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Heart className="size-4 text-highlight" />
              Interests (select multiple)
            </label>

            <div className="flex flex-wrap gap-2">
              {interestOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleInterest(option.value)}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    interests.includes(option.value)
                      ? "border-highlight bg-highlight text-highlight-foreground"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Travel Style */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Compass className="size-4 text-highlight" />
              Travel Style
            </label>

            <div className="flex gap-2">
              {travelStyleOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setTravelStyle(
                      option.value as TripPreferences["travelStyle"]
                    )
                  }
                  className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    travelStyle === option.value
                      ? "border-highlight bg-highlight text-highlight-foreground"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              variant="highlight"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading
                ? "Creating your personalized journey..."
                : "Create My Trip"}
            </Button>
          </div>
        </form>
      </PageContainer>
    </section>
  );
}
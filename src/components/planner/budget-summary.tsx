import { Wallet, Home, Utensils, Car, Ticket } from "lucide-react";

import { cn } from "@/lib/utils";
import type { TripItinerary } from "@/data/planner";

type BudgetSummaryProps = {
  budget: TripItinerary["estimatedBudget"];
  className?: string;
};

export function BudgetSummary({ budget, className }: BudgetSummaryProps) {
  const budgetItems = [
    { label: "Stay", value: budget.stay, icon: Home },
    { label: "Food", value: budget.food, icon: Utensils },
    { label: "Transport", value: budget.transport, icon: Car },
    { label: "Experiences", value: budget.experiences, icon: Ticket },
  ];

  return (
    <div className={cn("rounded-2xl border border-border bg-card p-6 shadow-card", className)}>
      <div className="mb-4 flex items-center gap-2">
        <Wallet className="size-5 text-highlight" />
        <h3 className="text-xl font-semibold text-foreground">Estimated Budget</h3>
      </div>

      <div className="space-y-3">
        {budgetItems.map((item) => (
          <div key={item.label} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="size-4" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
            <span className="text-sm font-semibold text-foreground">{item.value}</span>
          </div>
        ))}

        <div className="mt-4 flex items-center justify-between pt-3">
          <span className="text-base font-semibold text-foreground">Total</span>
          <span className="text-lg font-bold text-highlight">{budget.total}</span>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        * These are demo/mock estimates only. Actual costs may vary based on season, availability, and personal choices.
      </p>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Destinations | Viram",
  description: "Discover destinations, hidden gems, and authentic places across India with Viram.",
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

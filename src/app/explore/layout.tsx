import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Destinations | Bhraman Saathi",
  description: "Discover destinations, hidden gems, and authentic places across India with Bhraman Saathi.",
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

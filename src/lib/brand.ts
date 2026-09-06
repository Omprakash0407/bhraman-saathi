export const brand = {
  name: "Viram",
  tagline: "Your intelligent companion for discovering, planning and experiencing travel.",
  shortDescription:
    "A smart tourism ecosystem connecting tourists, hotels, travel agencies, and local businesses.",
} as const;

export const siteMetadata = {
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description: brand.tagline,
} as const;

export const brand = {
  name: "Virām",
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

/**
 * Placeholder URL for the Local Suggestions Google Form.
 * This will be replaced with the actual Google Form URL when created.
 *
 * Intended workflow:
 * Local person → Google Form → Google Sheet → Manual verification by Virām team → Approved suggestion added to destination
 */
export const LOCAL_SUGGESTION_FORM_URL = "https://forms.google.com/placeholder-local-suggestions-form";

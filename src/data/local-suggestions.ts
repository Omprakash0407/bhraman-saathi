import type { LocalSuggestion } from "@/types";

export const localSuggestions: LocalSuggestion[] = [
  // Puri - Temple rituals and traditions
  {
    id: "puri-rath-yatra-rituals",
    destinationId: "puri",
    category: "rituals-traditions",
    title: "Sacred Temple Kitchen Secrets",
    description: "The Jagannath Temple's kitchen (Mahaprasad) serves thousands daily using ancient firewood cooking techniques passed down through generations of temple cooks.",
    culturalContext: "Only temple servitors (Sevayats) from specific hereditary families are allowed in the sacred kitchen area."
  },
  {
    id: "puri-devadasi-tradition",
    destinationId: "puri",
    category: "rituals-traditions",
    title: "Temple Dance Traditions",
    description: "The Mahari dance tradition, once performed by Devadasis in the temple, continues in modified form during festival seasons with trained classical dancers.",
    culturalContext: "This classical Odissi dance form has roots in temple rituals and was historically an integral part of worship."
  },
  {
    id: "puri-suna-mesh",
    destinationId: "puri",
    category: "local-stories",
    title: "Golden Throne Legends",
    description: "The Suna Besha (Golden Attire) ceremony involves adorning the deities with gold ornaments weighing over 200 kg, a tradition that has continued for centuries.",
    culturalContext: "The gold ornaments are stored in the temple treasury and brought out only during specific festival days."
  },
  // Daringbadi - Tribal communities and local customs
  {
    id: "daringbadi-kondh-tribe",
    destinationId: "daringbadi",
    category: "tribes-communities",
    title: "Kondh Tribal Life",
    description: "The Kondh tribes of the Eastern Ghats maintain their traditional agricultural practices and seasonal festivals that mark the agricultural cycle.",
    culturalContext: "Many Kondh villages still follow traditional governance systems and celebrate harvest festivals with community feasts."
  },
  {
    id: "daringbadi-coffee-plantations",
    destinationId: "daringbadi",
    category: "crafts-artisans",
    title: "Coffee Plantation Heritage",
    description: "Local coffee growers have been cultivating Arabica coffee in these hills for over 50 years, using organic methods passed down through families.",
    culturalContext: "The coffee processing techniques follow traditional methods, with some families still using manual pulping and sun-drying."
  },
  {
    id: "daringbadi-dongria-kondh",
    destinationId: "daringbadi",
    category: "village-customs",
    title: "Dongria Kondh Sacred Groves",
    description: "The Dongria Kondh community maintains sacred groves in the forest areas where traditional rituals and community gatherings are held.",
    culturalContext: "These groves are considered sacred and are protected through customary law passed down through generations."
  },
  // Raghurajpur - Crafts and artisans
  {
    id: "raghurajpur-pattachitra",
    destinationId: "raghurajpur",
    category: "crafts-artisans",
    title: "Pattachitra Scroll Painting",
    description: "Every home in Raghurajpur practices Pattachitra, the ancient art of painting stories on cloth using natural colors derived from stones, plants, and minerals.",
    culturalContext: "The traditional colors include white from conch shells, yellow from haritali stone, and red from hingula stone."
  },
  {
    id: "raghurajpur-palm-leaf",
    destinationId: "raghurajpur",
    category: "crafts-artisans",
    title: "Palm Leaf Engraving",
    description: "Artisans engrave intricate stories and religious texts on dried palm leaves using traditional iron styluses, creating manuscripts that last centuries.",
    culturalContext: "This craft was historically used to preserve religious texts and royal records before paper became common."
  },
  {
    id: "raghurajpur-gotipua",
    destinationId: "raghurajpur",
    category: "local-music-dance",
    title: "Gotipua Dance Traditions",
    description: "The Gotipua dance form, performed by young boys dressed as girls, originated in temple villages and is practiced in households here.",
    culturalContext: "This precursor to classical Odissi dance was traditionally performed as an offering to deities during festivals."
  },
  // Chilika - Fisher communities and local traditions
  {
    id: "chilika-fisher-communities",
    destinationId: "chilika",
    category: "tribes-communities",
    title: "Fisher Community Traditions",
    description: "The traditional fishing communities around Chilika use sustainable fishing methods passed down through generations, respecting the lagoon's ecosystem.",
    culturalContext: "Specific fishing practices are regulated by community customs that determine when and where fishing can occur."
  },
  {
    id: "chilika-dolphin-reverence",
    destinationId: "chilika",
    category: "local-stories",
    title: "Irrawaddy Dolphin Reverence",
    description: "Local fishing communities have traditional beliefs about the Irrawaddy dolphins, considering them as guardians of the lagoon and avoiding harmful practices.",
    culturalContext: "Traditional fishermen sometimes believe dolphins help guide them to fish shoals and avoid areas where dolphins are present."
  },
  {
    id: "chilika-bird-festival",
    destinationId: "chilika",
    category: "festivals-fairs",
    title: "Annual Bird Festival",
    description: "The local communities organize an annual bird watching festival celebrating the migratory birds that visit Chilika, combining conservation awareness with cultural events.",
    culturalContext: "This festival has evolved from traditional community gatherings into a larger celebration of the lagoon's biodiversity."
  },
  // Konark - Temple crafts and cultural traditions
  {
    id: "konark-stone-carving",
    destinationId: "konark",
    category: "crafts-artisans",
    title: "Traditional Stone Carving",
    description: "Artisans in villages near Konark continue the stone carving traditions that built the Sun Temple, though on a smaller scale for temple architecture and sculptures.",
    culturalContext: "The traditional tools and techniques used today are similar to those employed by the original temple builders."
  },
  {
    id: "konark-navagraha",
    destinationId: "konark",
    category: "rituals-traditions",
    title: "Navagraha Temple Rituals",
    description: "The nine planetary deities (Navagraha) at the Sun Temple complex have specific worship rituals that local families have maintained for generations.",
    culturalContext: "Each planetary deity is associated with specific offerings and prayer timings according to traditional astrological practices."
  },
  {
    id: "konark-dance-festival",
    destinationId: "konark",
    category: "festivals-fairs",
    title: "Konark Dance Festival",
    description: "The annual dance festival at the Sun Temple amphitheater brings classical dancers from across India, continuing the temple's tradition as a center for performing arts.",
    culturalContext: "This modern festival is inspired by the temple's original function as a venue for cultural and religious performances."
  }
];

export function getLocalSuggestionsByDestinationId(destinationId: string): LocalSuggestion[] {
  return localSuggestions.filter((suggestion) => suggestion.destinationId === destinationId);
}

export function getLocalSuggestionById(id: string): LocalSuggestion | undefined {
  return localSuggestions.find((suggestion) => suggestion.id === id);
}
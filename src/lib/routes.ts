/**
 * Future application routes.
 * Pages are not implemented yet; this map keeps navigation and API clients aligned later.
 */
export const routes = {
  public: {
    home: "/",
    explore: "/explore",
    destinations: "/destinations",
    experiences: "/experiences",
    hotels: "/hotels",
    about: "/about",
  },
  tourist: {
    planner: "/planner",
    myTrips: "/my-trips",
    recommendations: "/recommendations",
    bookings: "/bookings",
    profile: "/profile",
  },
  business: {
    home: "/business",
    listings: "/business/listings",
    bookings: "/business/bookings",
    analytics: "/business/analytics",
    profile: "/business/profile",
  },
} as const;

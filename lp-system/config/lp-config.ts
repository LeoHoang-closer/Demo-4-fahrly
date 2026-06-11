export interface LPEntry {
  slug: string;
  locale: string;
  title: string;
}

export const lpRegistry: LPEntry[] = [
  {
    slug: "fleet-ops",
    locale: "en",
    title: "Fleet Ops — Mileage & Cost Tracking for SMB Fleets",
  },
  {
    slug: "planning-routes",
    locale: "en",
    title: "Fahrly — Route Planning for Last Mile Delivery",
  },
];

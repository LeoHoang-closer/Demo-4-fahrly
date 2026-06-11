export interface SidebarItem {
  icon: string;
  label: string;
  active: boolean;
}

export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  deltaPositive: boolean;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface DashboardData {
  topbar: {
    logo: string;
    userInitials: string;
  };
  sidebar: {
    items: SidebarItem[];
  };
  cards: MetricCard[];
  chart: {
    title: string;
    type: "line" | "bar";
    data: ChartDataPoint[];
  };
  table: {
    columns: string[];
    rows: string[][];
  };
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted: boolean;
}

export interface LPContent {
  slug: string;
  locale: string;
  accentColor: string;
  bookingUrl: string;
  seo: {
    title: string;
    description: string;
  };
  navbar: {
    logo: string;
    ctaLabel: string;
  };
  hero: {
    headline: string;
    subhead: string;
    ctaLabel: string;
  };
  problemSolution: {
    pains: string[];
    solution: string;
  };
  pricing: {
    headline: string;
    tiers: PricingTier[];
  };
  finalCta: {
    headline: string;
    ctaLabel: string;
  };
  dashboard: DashboardData;
}

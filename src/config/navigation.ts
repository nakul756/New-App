import {
  LayoutDashboard,
  FileText,
  Search,
  Palette,
  Eye,
  Truck,
  TrendingUp,
  Store,
  Coins,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  credits?: string;
}

export const mainNavItems: NavItem[] = [
  {
    title: "Overview",
    href: "/overview",
    icon: LayoutDashboard,
    description: "Dashboard overview and key metrics",
  },
  {
    title: "Listings",
    href: "/listings",
    icon: FileText,
    description: "AI Product Listing Generator",
    credits: "2 credits",
  },
  {
    title: "SEO Scanner",
    href: "/seo-scanner",
    icon: Search,
    description: "Store SEO Scanner & Fixer",
    credits: "2-15 credits",
  },
  {
    title: "Ad Studio",
    href: "/ad-studio",
    icon: Palette,
    description: "AI Ad Studio",
    credits: "5 credits",
  },
  {
    title: "Competitors",
    href: "/competitors",
    icon: Eye,
    description: "Competitor Intelligence",
    credits: "1-3 credits",
  },
  {
    title: "Suppliers",
    href: "/suppliers",
    icon: Truck,
    description: "Supplier Discovery Engine",
    credits: "5 credits",
  },
  {
    title: "Research",
    href: "/research",
    icon: TrendingUp,
    description: "Winning Product Research",
    credits: "8 credits",
  },
  {
    title: "Store Builder",
    href: "/store-builder",
    icon: Store,
    description: "AI Store Builder",
    credits: "10-15 credits",
  },
];

export const bottomNavItems: NavItem[] = [
  {
    title: "Credits",
    href: "/credits",
    icon: Coins,
    description: "Credit balance and top-ups",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Account and store settings",
  },
];

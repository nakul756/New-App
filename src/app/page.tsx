import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  FileText,
  Search,
  Palette,
  Eye,
  Truck,
  TrendingUp,
  Store,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Product Listing Generator",
    description: "Upload a photo or enter details — AI writes title, description, bullets, and SEO meta tags",
    credits: "2 credits",
  },
  {
    icon: Search,
    title: "SEO Scanner & Fixer",
    description: "Scan your store for SEO issues, get a health score (A-F), and auto-fix alt text with AI",
    credits: "2-15 credits",
  },
  {
    icon: Palette,
    title: "AI Ad Studio",
    description: "Generate ad copy and visual mockups for Facebook, Instagram, Google, and TikTok",
    credits: "5 credits",
  },
  {
    icon: Eye,
    title: "Competitor Intelligence",
    description: "Track competitor prices, get alerts, and receive AI-powered pricing suggestions",
    credits: "1-3 credits",
  },
  {
    icon: Truck,
    title: "Supplier Discovery",
    description: "Find and compare reliable suppliers across AliExpress, CJ, and Alibaba",
    credits: "5 credits",
  },
  {
    icon: TrendingUp,
    title: "Winning Product Research",
    description: "Discover trending products with growth scores, social buzz, and saturation analysis",
    credits: "8 credits",
  },
  {
    icon: Store,
    title: "AI Store Builder",
    description: "Build your store from scratch — niche selection, blueprint, product pages, and audit",
    credits: "10-15 credits",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SellerKit</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started Free</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container py-24 text-center space-y-8">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            AI-Powered Toolkit for{" "}
            <span className="text-primary">Shopify Sellers</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            7 AI modules to help you create listings, scan SEO, design ads,
            track competitors, find suppliers, research products, and build
            your store — all in one platform.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="/signup">
            <Button size="lg">
              Start Free Trial — 50 Credits
            </Button>
          </Link>
          <Link href="/listings">
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          No credit card required. 3-day free trial with full Pro access.
        </p>
      </section>

      {/* Features */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          7 AI Modules to Scale Your Store
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Each module is powered by AI and uses a simple credit system.
          Pay only for what you use.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-lg border p-6 space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {feature.credits}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 text-center">
        <div className="mx-auto max-w-2xl space-y-6 rounded-lg border bg-card p-12">
          <h2 className="text-3xl font-bold">Ready to grow your store?</h2>
          <p className="text-muted-foreground">
            Plans start at $9/mo. Get 50 credits free during your trial.
          </p>
          <Link href="/signup">
            <Button size="lg">Start Free Trial</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SellerKit. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

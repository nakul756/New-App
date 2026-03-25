import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Store, Lightbulb, Map, FileText, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Niche Selection",
    credits: 10,
    icon: Lightbulb,
    description: "Input your interests and get 5 niche suggestions with market data, competition levels, and profit potential.",
  },
  {
    step: 2,
    title: "Store Blueprint",
    credits: 10,
    icon: Map,
    description: "Get a complete store structure: collections, pages, navigation, policies, and color scheme.",
  },
  {
    step: 3,
    title: "Product Pages",
    credits: 2,
    icon: FileText,
    description: "Generate complete product listings using Module 1. Upload photos or enter details for AI-powered pages.",
  },
  {
    step: 4,
    title: "Store Audit",
    credits: 15,
    icon: ShieldCheck,
    description: "Full health check: SEO score, issues, priority fixes, and estimated revenue impact.",
  },
];

export default function StoreBuilderPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Store className="h-8 w-8 text-primary" />
            AI Store Builder
          </h1>
          <p className="text-muted-foreground">
            Build your Shopify store from scratch with AI guidance
          </p>
        </div>
        <Badge variant="secondary">10-15 credits per step</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.step} className="relative">
              <div className="absolute top-4 right-4">
                <Badge variant="outline">{item.credits} credits</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {item.step}
                  </div>
                  <Icon className="h-5 w-5" />
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Start Step {item.step}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

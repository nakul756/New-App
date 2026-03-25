import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { PLANS } from "@/lib/stripe";

const planFeatures: Record<string, string[]> = {
  starter: ["50 credits/month", "Manual product entry", "Copy/paste export", "Email support (72hr)"],
  growth: ["150 credits/month", "1 Shopify store", "Ad mockups", "PDF export", "Weekly competitor digest"],
  pro: ["400 credits/month", "Up to 3 stores", "AI pricing suggestions", "Full store audit", "PDF + CSV export"],
  business: ["1,000 credits/month", "Unlimited stores", "White-label audit", "API access", "Live chat support", "5 team seats"],
};

export function PricingTable() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Object.entries(PLANS).map(([key, plan]) => (
        <Card key={key} className={key === "pro" ? "border-primary shadow-lg" : ""}>
          <CardHeader>
            {key === "pro" && <Badge className="w-fit mb-2">Most Popular</Badge>}
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>
              <span className="text-2xl font-bold">${plan.monthlyPrice / 100}</span>/mo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2">
              {planFeatures[key]?.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={key === "pro" ? "default" : "outline"}>
              Get Started
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

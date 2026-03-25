import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, Sparkles, AlertCircle, BarChart3, ShoppingBag, Search } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Winning Product Research</h1>
          <p className="text-muted-foreground">
            Discover trending products with high profit potential
          </p>
        </div>
        <Badge variant="secondary">8 credits per research</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Research Products</CardTitle>
          <CardDescription>
            Enter a niche or let AI suggest trending categories
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="niche">Niche or Category</Label>
            <Input id="niche" placeholder="e.g., home fitness, pet accessories" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="price-range">Price Range ($)</Label>
              <Input id="price-range" placeholder="10-50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="target-market">Target Market</Label>
              <Input id="target-market" placeholder="e.g., US, Europe" />
            </div>
          </div>
          <div className="flex gap-2">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Research Now
            </Button>
            <Button variant="outline">
              <Sparkles className="mr-2 h-4 w-4" />
              AI Suggest Niche
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Order Growth", icon: TrendingUp, desc: "Trending products by growth rate" },
          { title: "Social Buzz", icon: BarChart3, desc: "Social media mention analysis" },
          { title: "Competition", icon: ShoppingBag, desc: "Market saturation check" },
          { title: "Verdicts", icon: AlertCircle, desc: "High potential / Saturated / Rising" },
        ].map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Icon className="h-5 w-5 text-primary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

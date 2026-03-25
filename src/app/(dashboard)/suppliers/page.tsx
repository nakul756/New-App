import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Star, AlertTriangle, Calculator, Bookmark } from "lucide-react";

export default function SuppliersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Supplier Discovery</h1>
          <p className="text-muted-foreground">
            Find and compare reliable suppliers across platforms
          </p>
        </div>
        <Badge variant="secondary">5 credits per search</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Suppliers</CardTitle>
          <CardDescription>
            Search across AliExpress, CJ Dropshipping, and Alibaba
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="product-search">Product Name or Category</Label>
            <Input id="product-search" placeholder="e.g., wireless earbuds, yoga mats" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="max-price">Max Price ($)</Label>
              <Input id="max-price" type="number" placeholder="50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="origin">Ship From</Label>
              <Input id="origin" placeholder="e.g., China, US" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="min-rating">Min Rating</Label>
              <Input id="min-rating" type="number" placeholder="4.0" />
            </div>
          </div>
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Find Suppliers
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Reliability Score", icon: Star, desc: "AI-ranked by trustworthiness" },
          { title: "Price Comparison", icon: Calculator, desc: "Cross-platform price table" },
          { title: "Risk Flags", icon: AlertTriangle, desc: "Red flags and warnings" },
          { title: "Save & Compare", icon: Bookmark, desc: "Bookmark top suppliers" },
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

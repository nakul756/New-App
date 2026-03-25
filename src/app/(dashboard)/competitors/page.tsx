import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, TrendingDown, Bell, LineChart } from "lucide-react";

export default function CompetitorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Competitor Intelligence</h1>
          <p className="text-muted-foreground">
            Track competitor prices and get AI pricing suggestions
          </p>
        </div>
        <Badge variant="secondary">1 credit/check — 3 credits for AI suggestion</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Track a Competitor</CardTitle>
          <CardDescription>
            Enter a competitor product URL to start monitoring
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="competitor-url">Competitor Product URL</Label>
            <Input id="competitor-url" placeholder="https://competitor-store.com/product" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="my-price">Your Price ($)</Label>
              <Input id="my-price" type="number" placeholder="29.99" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alert-threshold">Alert Threshold (%)</Label>
              <Input id="alert-threshold" type="number" placeholder="10" />
            </div>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Start Tracking
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <LineChart className="h-5 w-5 text-primary" />
              Price History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Interactive charts showing price changes over time.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bell className="h-5 w-5 text-yellow-500" />
              Smart Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Email alerts when prices breach your threshold.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingDown className="h-5 w-5 text-green-500" />
              AI Pricing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Margin-aware suggestions: &quot;Match at $31.99 to keep 45% margin.&quot;
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

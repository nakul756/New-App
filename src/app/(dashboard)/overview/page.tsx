import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, ShoppingCart, Package, Coins, TrendingUp } from "lucide-react";

const stats = [
  { title: "Credits Remaining", value: "50", icon: Coins, change: "Trial active" },
  { title: "Total Revenue", value: "$0.00", icon: DollarSign, change: "Connect store" },
  { title: "Products Listed", value: "0", icon: Package, change: "Start listing" },
  { title: "Orders", value: "0", icon: ShoppingCart, change: "Sync store" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to SellerKit. Your AI-powered Shopify toolkit.
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          <TrendingUp className="mr-1 h-3 w-3" />
          Free Trial — 3 days
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with your most-used tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>1. Generate your first product listing (2 credits)</p>
            <p>2. Scan your store&apos;s SEO health (15 credits)</p>
            <p>3. Create AI-powered ad copy (5 credits)</p>
            <p>4. Track a competitor&apos;s pricing (1 credit)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and credit usage</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No activity yet. Start using AI tools to see your history here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

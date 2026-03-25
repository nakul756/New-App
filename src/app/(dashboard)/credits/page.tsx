import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";

const packs = [
  { name: "Starter Pack", credits: 50, price: "$5", perCredit: "$0.10" },
  { name: "Power Pack", credits: 200, price: "$16", perCredit: "$0.08" },
  { name: "Bulk Pack", credits: 500, price: "$30", perCredit: "$0.06" },
];

export default function CreditsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Credits</h1>
        <p className="text-muted-foreground">
          Manage your credit balance and purchase top-ups
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-primary" />
            Current Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold">50 credits</div>
          <p className="text-sm text-muted-foreground mt-1">
            Trial credits — resets with your subscription plan
          </p>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Top-Up Packs (Never Expire)</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {packs.map((pack) => (
            <Card key={pack.name}>
              <CardHeader>
                <CardTitle>{pack.name}</CardTitle>
                <CardDescription>
                  {pack.credits} credits — {pack.perCredit}/credit
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">{pack.price}</div>
                <Button className="w-full">Buy Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Credit History</CardTitle>
          <CardDescription>Recent credit usage and purchases</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No transactions yet. Credits are deducted when you use AI tools.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

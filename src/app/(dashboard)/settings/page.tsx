import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account, billing, and Shopify connection
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Shopify Connection</CardTitle>
            <CardDescription>Connect your Shopify store for syncing and one-click publishing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="store-url">Shopify Store URL</Label>
              <Input id="store-url" placeholder="mystore.myshopify.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-token">API Access Token</Label>
              <Input id="api-token" type="password" placeholder="shpat_..." />
            </div>
            <Button>Connect Store</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing & Subscription</CardTitle>
            <CardDescription>Manage your plan and payment method</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <p className="font-medium">Free Trial</p>
              <p className="text-sm text-muted-foreground">
                3-day trial with 50 credits. No credit card required.
              </p>
            </div>
            <Button variant="outline">Upgrade Plan</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

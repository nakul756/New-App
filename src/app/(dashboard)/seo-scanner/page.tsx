import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ShieldCheck, ImageIcon, AlertTriangle, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SeoScannerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">SEO Scanner & Fixer</h1>
          <p className="text-muted-foreground">
            Scan your store for SEO issues and fix them with AI
          </p>
        </div>
        <Badge variant="secondary">2 credits/image — 15 credits/full scan</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Start a Scan</CardTitle>
          <CardDescription>
            Connect your Shopify store or enter a URL to begin
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="store-url">Shopify Store URL</Label>
            <Input id="store-url" placeholder="mystore.myshopify.com" />
          </div>
          <div className="flex gap-2">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Full Store Scan (15 credits)
            </Button>
            <Button variant="outline">
              <ImageIcon className="mr-2 h-4 w-4" />
              Single Image Scan (2 credits)
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              Health Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get an A-F grade for your store&apos;s SEO health with actionable fixes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Missing Alt Text
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Find images with missing or weak alt text and auto-generate with AI.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <ArrowUpRight className="h-5 w-5 text-blue-500" />
              Traffic Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Estimated monthly visitors you&apos;re losing due to SEO issues.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

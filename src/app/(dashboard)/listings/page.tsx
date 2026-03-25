import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Upload, Sparkles, Copy } from "lucide-react";

export default function ListingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Product Listing Generator</h1>
          <p className="text-muted-foreground">
            AI-powered product listings from photos or descriptions
          </p>
        </div>
        <Badge variant="secondary">2 credits per listing</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Photo-to-Listing
            </CardTitle>
            <CardDescription>
              Upload a product photo and AI detects the product, writing title,
              description, bullets, and meta tags automatically.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-2">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Drag and drop a product image, or click to upload
              </p>
              <Button variant="outline" size="sm">Choose File</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Text-to-Listing
            </CardTitle>
            <CardDescription>
              Enter product name and keywords to generate optimized listings
              in 3 different tones.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">Enter product details to generate:</p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>SEO-optimized title</li>
              <li>Full description (3 tone variations)</li>
              <li>5-7 bullet points</li>
              <li>Meta title & description</li>
              <li>Suggested tags</li>
            </ul>
            <Button className="w-full">
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Listing
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Copy className="h-5 w-5" />
            Content History
          </CardTitle>
          <CardDescription>Previously generated listings</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Your generated listings will appear here. Copy, edit, or regenerate anytime.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

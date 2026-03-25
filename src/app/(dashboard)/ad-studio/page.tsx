import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Image, Target, BarChart3 } from "lucide-react";

const platforms = ["Facebook", "Instagram", "Google", "TikTok"];

export default function AdStudioPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Ad Studio</h1>
          <p className="text-muted-foreground">
            Create ad copy and visual mockups for any platform
          </p>
        </div>
        <Badge variant="secondary">5 credits per ad set</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create New Ad</CardTitle>
          <CardDescription>
            Select a platform and upload your product to generate ad variations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            {platforms.map((platform) => (
              <Button key={platform} variant="outline" size="sm">
                {platform}
              </Button>
            ))}
          </div>
          <Button className="w-full">
            <Palette className="mr-2 h-4 w-4" />
            Generate Ad Set
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Ad Copy", icon: Palette, desc: "3-5 headline + body + CTA variations" },
          { title: "Visual Mockups", icon: Image, desc: "See your ad in the platform feed" },
          { title: "Audience Tips", icon: Target, desc: "AI-powered targeting recommendations" },
          { title: "Engagement Score", icon: BarChart3, desc: "Predicted engagement rating" },
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

"use client";

import { Download, ImagePlus, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";
import { generatedImages } from "@/constants/mock-data";

export function ImageGeneratorPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Creative Studio" title="AI Image Generator" description="Create prompt boards, preview visual directions, and save image concepts for campaigns and product storytelling." />
      <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Image prompt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea defaultValue="Premium enterprise AI dashboard on a bright workstation, blue and cyan interface details, realistic SaaS product photography, clean lighting" />
            <div className="flex flex-wrap gap-2">
              {["16:9", "Product", "Clean", "UI Focus"].map((tag) => (
                <Badge key={tag} variant="slate">{tag}</Badge>
              ))}
            </div>
            <Button className="w-full" variant="premium">
              <WandSparkles aria-hidden /> Generate
            </Button>
          </CardContent>
        </Card>
        <div className="grid gap-4 md:grid-cols-3">
          {generatedImages.map((label, index) => (
            <Card key={label} className="overflow-hidden">
              <div className={`flex aspect-[4/3] items-center justify-center border-b ${index === 0 ? "bg-sky-100 dark:bg-sky-950" : index === 1 ? "bg-cyan-100 dark:bg-cyan-950" : "bg-slate-100 dark:bg-slate-900"}`}>
                <ImagePlus className="size-12 text-primary" aria-hidden />
              </div>
              <CardHeader>
                <CardTitle className="text-sm">{label}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full">
                  <Download aria-hidden /> Save concept
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

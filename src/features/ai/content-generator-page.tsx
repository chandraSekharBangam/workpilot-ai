"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Copy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";

const generatorSchema = z.object({
  type: z.enum(["Blog", "Email", "LinkedIn", "Instagram"]),
  topic: z.string().min(6, "Describe the topic in at least 6 characters."),
  audience: z.string().min(3, "Add an audience."),
  tone: z.string().min(3, "Add a tone."),
});

type GeneratorValues = z.infer<typeof generatorSchema>;

export function ContentGeneratorPage() {
  const form = useForm<GeneratorValues>({
    resolver: zodResolver(generatorSchema),
    defaultValues: {
      type: "Blog",
      topic: "Launch announcement for WorkPilot AI analytics",
      audience: "B2B SaaS operators",
      tone: "Confident, concise, useful",
    },
  });

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="AI Writer" title="AI Content Generator" description="Generate blog drafts, email campaigns, LinkedIn posts, and Instagram captions from one validated form." />
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <CardHeader>
            <CardTitle>Content brief</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={form.handleSubmit(() => undefined)}>
              <div className="space-y-2">
                <Label htmlFor="type">Format</Label>
                <select id="type" className="h-10 w-full rounded-md border bg-background px-3 text-sm" {...form.register("type")}>
                  <option>Blog</option>
                  <option>Email</option>
                  <option>LinkedIn</option>
                  <option>Instagram</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Textarea id="topic" {...form.register("topic")} />
                {form.formState.errors.topic ? <p className="text-xs text-destructive">{form.formState.errors.topic.message}</p> : null}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="audience">Audience</Label>
                  <Input id="audience" {...form.register("audience")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Input id="tone" {...form.register("tone")} />
                </div>
              </div>
              <Button type="submit" variant="premium" className="w-full">
                <Sparkles aria-hidden /> Generate copy
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Generated draft</CardTitle>
            <Button variant="outline" size="sm">
              <Copy aria-hidden /> Copy
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border bg-background p-5">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="cyan">SEO ready</Badge>
                <Badge variant="slate">B2B tone</Badge>
                <Badge variant="outline">3 variants</Badge>
              </div>
              <h2 className="text-xl font-semibold">Make AI work visible, governed, and useful</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                WorkPilot AI gives teams a single command center for daily AI work. Draft campaign assets, summarize documents,
                generate creative direction, and track usage patterns without scattering prompts across disconnected tools.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                The result is faster execution with the control operators expect: prompt history, favorites, billing context,
                user roles, analytics, and admin-ready reporting.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

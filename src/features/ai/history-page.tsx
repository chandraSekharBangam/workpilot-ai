"use client";

import Link from "next/link";
import { Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/shared/page-header";
import { aiTools, promptHistory, recentActivity } from "@/constants/mock-data";

export function HistoryPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Knowledge trail" title="History" description="Search prompts, revisit outputs, and keep favorites close to daily workflows." />
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <Input className="pl-9" placeholder="Search prompt history..." />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {promptHistory.map((prompt, index) => (
              <div key={prompt} className="rounded-md border bg-background p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium">{prompt}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Used {index + 2} times this month</p>
                  </div>
                  <Badge variant={index % 2 === 0 ? "cyan" : "slate"}>{index % 2 === 0 ? "Favorite" : "Recent"}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Favorites</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {aiTools.filter((tool) => tool.favorite).map((tool) => (
              <Link key={tool.id} href={tool.href} className="flex items-center gap-3 rounded-md border bg-background p-3 transition-colors hover:bg-secondary/50">
                <Star className="size-4 text-primary" aria-hidden />
                <span className="text-sm font-medium">{tool.name}</span>
              </Link>
            ))}
            <Button asChild variant="outline" className="w-full">
              <Link href="/chat">Create new favorite</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Activity log</CardTitle>
        </CardHeader>
        <CardContent className="divide-y">
          {recentActivity.map((item) => (
            <div key={item.id} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

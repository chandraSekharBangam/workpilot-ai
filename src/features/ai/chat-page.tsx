"use client";

import { Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";
import { chatMessages, promptHistory } from "@/constants/mock-data";

export function ChatPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="AI Assistant" title="AI Chat" description="A focused assistant workspace for research, strategy, summaries, and operational reasoning." />
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <Card className="min-h-[640px]">
          <CardHeader className="border-b">
            <CardTitle>Strategy session</CardTitle>
          </CardHeader>
          <CardContent className="flex min-h-[560px] flex-col justify-between pt-5">
            <div className="space-y-4">
              {chatMessages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div className={`max-w-[82%] rounded-lg px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-primary text-primary-foreground" : "border bg-background"}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border bg-background p-3">
              <Textarea placeholder="Ask WorkPilot AI to research, summarize, compare, or draft..." className="min-h-24 border-0 p-0 shadow-none focus-visible:ring-0" />
              <div className="mt-3 flex items-center justify-between">
                <Badge variant="slate">Context: workspace usage</Badge>
                <Button>
                  <Send aria-hidden /> Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prompt history</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {promptHistory.map((prompt) => (
              <button key={prompt} className="w-full rounded-md border bg-background p-3 text-left text-sm leading-6 transition-colors hover:border-primary/50 hover:bg-secondary/40">
                {prompt}
              </button>
            ))}
            <div className="rounded-md bg-secondary p-4 text-sm leading-6 text-secondary-foreground">
              <Sparkles className="mb-3 size-5" aria-hidden />
              Favorite prompts are available across chat, writer, image, and document tools.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

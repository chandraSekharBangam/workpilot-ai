import Link from "next/link";
import { BookOpenText, LifeBuoy, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/shared/page-header";

const collections = [
  { title: "Getting started", description: "Set up workspaces, invite teammates, and create your first prompt workflow.", icon: BookOpenText },
  { title: "Security and roles", description: "Understand admin access, route protection, and role based workspace controls.", icon: ShieldCheck },
  { title: "Billing and usage", description: "Learn how credits, limits, invoices, and plan upgrades are represented.", icon: LifeBuoy },
  { title: "AI workflow guides", description: "Build reusable processes for chat, writing, image, and document intelligence.", icon: MessageCircleQuestion },
];

export function HelpCenterPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Help Center"
        title="Support content for a serious AI SaaS product"
        description="Search product guides, implementation notes, and workflow patterns. This page models the self-serve support experience users expect."
      />
      <div className="mt-8 max-w-2xl">
        <Input placeholder="Search guides, billing, prompts, roles..." aria-label="Search help center" />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {collections.map((collection) => (
          <Card key={collection.title} className="transition-all hover:-translate-y-1 hover:shadow-premium">
            <CardHeader>
              <collection.icon className="mb-4 size-6 text-primary" aria-hidden />
              <CardTitle>{collection.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{collection.description}</p>
              <Button asChild variant="ghost" className="mt-4 px-0">
                <Link href="/dashboard">Open guide</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

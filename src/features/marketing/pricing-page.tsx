import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { pricingPlans } from "@/constants/mock-data";

export function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Pricing"
        title="Plans that scale from solo workflows to governed teams"
        description="Pricing surfaces include clear plan hierarchy, usage language, and billing-ready patterns for a real SaaS interview discussion."
        actions={
          <Button asChild variant="premium">
            <Link href="/billing">Manage billing</Link>
          </Button>
        }
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className={plan.highlighted ? "border-primary shadow-premium" : undefined}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <p className="text-4xl font-semibold">
                {plan.price}
                <span className="text-sm font-normal text-muted-foreground"> /month</span>
              </p>
              <p className="text-sm leading-6 text-muted-foreground">{plan.description}</p>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="size-4 text-primary" aria-hidden />
                    {feature}
                  </div>
                ))}
              </div>
              <Button className="w-full" variant={plan.highlighted ? "premium" : "outline"} asChild>
                <Link href="/sign-up">Choose {plan.name}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

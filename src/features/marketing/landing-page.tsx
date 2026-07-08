"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  aiTools,
  benefits,
  faqItems,
  featureHighlights,
  pricingPlans,
  recentActivity,
  testimonials,
  usageData,
} from "@/constants/mock-data";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const usageBarHeights = ["h-[44%]", "h-[64%]", "h-[56%]", "h-[80%]", "h-[72%]", "h-[45%]", "h-[55%]"] as const;

function ProductPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-lg border bg-card shadow-premium"
    >
      <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400" />
        <span className="size-2.5 rounded-full bg-amber-400" />
        <span className="size-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs font-medium text-muted-foreground">workspace.ai/dashboard</span>
      </div>
      <div className="grid gap-0 lg:grid-cols-[240px_1fr]">
        <div className="hidden border-r bg-slate-950 p-4 text-slate-200 lg:block">
          <div className="mb-6 flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="size-4 text-cyan-300" aria-hidden />
            WorkPilot AI
          </div>
          {["Dashboard", "AI Chat", "Writer", "Images", "Documents"].map((item, index) => (
            <div
              key={item}
              className={`mb-2 rounded-md px-3 py-2 text-sm ${index === 0 ? "bg-white/10 text-white" : "text-slate-400"}`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {["72.4k", "1,248", "326", "418h"].map((value, index) => (
              <div key={value} className="rounded-md border bg-background p-4">
                <p className="text-xs text-muted-foreground">{["Credits", "Docs", "Automations", "Saved"][index]}</p>
                <p className="mt-2 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-md border bg-background p-4">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-semibold">Weekly usage</p>
                <Badge variant="cyan">Live</Badge>
              </div>
              <div className="flex h-44 items-end gap-3">
                {usageData.map((item) => (
                  <div key={item.name} className="flex flex-1 flex-col items-center gap-2">
                    <div className={`w-full rounded-t-md bg-sky-600 ${usageBarHeights[usageData.indexOf(item)]}`} />
                    <span className="text-xs text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md border bg-background p-4">
              <p className="text-sm font-semibold">Activity</p>
              <div className="mt-4 space-y-4">
                {recentActivity.slice(0, 3).map((item) => (
                  <div key={item.id} className="border-l-2 border-cyan-300 pl-3">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-md border bg-background p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-medium">Team credit budget</span>
              <span className="text-muted-foreground">68%</span>
            </div>
            <Progress value={68} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <Badge variant="cyan" className="mb-5">
              Enterprise AI productivity platform
            </Badge>
            <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-normal text-balance text-foreground sm:text-6xl lg:text-7xl">
              WorkPilot AI
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              Bring AI chat, writing, image ideation, document intelligence, prompt history, analytics, billing, and admin controls into one premium SaaS workspace.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="premium">
                <Link href="/dashboard">
                  Launch workspace <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/help-center">
                  <Play aria-hidden /> View workflow
                </Link>
              </Button>
            </div>
          </motion.div>
          <ProductPreview />
        </div>
      </section>

      <section id="features" className="border-y bg-background px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Features" title="A real product surface for AI teams" description="Every page is designed to demonstrate production frontend judgment: information architecture, reusable components, performance boundaries, and polished responsive UI." />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {featureHighlights.map((feature) => (
              <Card key={feature.title} className="transition-all hover:-translate-y-1 hover:shadow-premium">
                <CardHeader>
                  <div className="mb-4 flex size-11 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                    <feature.icon className="size-5" aria-hidden />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow="How it works" title="From prompt to governed workflow" description="Start with a tool, generate work, save the result, and keep every activity visible across history, billing, and admin dashboards." />
          <div className="grid gap-4 sm:grid-cols-3">
            {["Choose a tool", "Generate output", "Track impact"].map((step, index) => (
              <Card key={step}>
                <CardHeader>
                  <span className="text-sm font-semibold text-primary">0{index + 1}</span>
                  <CardTitle>{step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{benefits[index].description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="AI Tools" title="One dashboard, every common AI workflow" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aiTools.map((tool) => (
              <Link key={tool.id} href={tool.href} className="group rounded-lg border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-premium">
                <tool.icon className="mb-5 size-6 text-primary" aria-hidden />
                <h3 className="font-semibold group-hover:text-primary">{tool.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Pricing" title="Simple plans for serious AI work" />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={plan.highlighted ? "border-primary shadow-premium" : undefined}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="text-4xl font-semibold">
                    {plan.price}
                    <span className="text-sm font-normal text-muted-foreground"> /mo</span>
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="size-4 text-primary" aria-hidden />
                      {feature}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-background px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Customers" title="Built for teams that care about velocity and control" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="pt-5">
                  <p className="text-sm leading-7 text-foreground">{testimonial.quote}</p>
                  <div className="mt-6">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="FAQ" title="Designed like a production SaaS portfolio project" />
          <div className="space-y-4">
            {faqItems.map((item) => (
              <Card key={item.question}>
                <CardHeader>
                  <CardTitle>{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg border bg-slate-950 p-8 text-white shadow-premium md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal">Ship faster with a workspace built for AI operations.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Use the dashboard, tools, account pages, and admin flows as a portfolio-grade frontend project.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-slate-200">
              <Link href="/dashboard">Open dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t bg-background px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>WorkPilot AI. Portfolio-grade SaaS frontend.</p>
          <div className="flex gap-5">
            <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
            <Link href="/help-center" className="hover:text-foreground">Help</Link>
            <Link href="/sign-in" className="hover:text-foreground">Sign in</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

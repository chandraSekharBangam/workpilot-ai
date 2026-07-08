"use client";

import Link from "next/link";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { quickActions } from "@/constants/navigation";
import { useDashboardData } from "@/hooks/use-dashboard-data";

export function DashboardPage() {
  const { data, isLoading } = useDashboardData();

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Command center"
        title="Dashboard"
        description="Monitor usage, jump into common AI workflows, review activity, and keep team productivity visible."
        actions={
          <>
            <Button asChild variant="outline">
              <Link href="/history">View history</Link>
            </Button>
            <Button asChild variant="premium">
              <Link href="/chat">Start chat</Link>
            </Button>
          </>
        }
      />

      {isLoading || !data ? (
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-32" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.75fr]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-3">
            <div>
              <CardTitle>Usage summary</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">Tokens, images, and document actions across the current week.</p>
            </div>
            <Badge variant="cyan">+18.2%</Badge>
          </CardHeader>
          <CardContent>
            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data?.usageData ?? []}>
                  <defs>
                    <linearGradient id="tokens" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0284c7" stopOpacity={0.32} />
                      <stop offset="95%" stopColor="#0284c7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#dbe4ee" />
                  <XAxis dataKey="name" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="tokens" stroke="#0284c7" strokeWidth={2} fill="url(#tokens)" />
                  <Area type="monotone" dataKey="documents" stroke="#06b6d4" strokeWidth={2} fillOpacity={0} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
            <p className="text-sm text-muted-foreground">Common workflows with single-step entry points.</p>
          </CardHeader>
          <CardContent className="grid gap-3">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center justify-between rounded-md border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-sm"
              >
                <span className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                    <action.icon className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium">{action.title}</span>
                </span>
                <ArrowRight className="size-4 text-muted-foreground" aria-hidden />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {(data?.recentActivity ?? []).map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  {item.type === "document" ? <FileText className="size-4" aria-hidden /> : <Sparkles className="size-4" aria-hidden />}
                </div>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workspace health</CardTitle>
            <p className="text-sm text-muted-foreground">Operational signals shaped for product, engineering, and leadership reviews.</p>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            {["Policy compliant", "2.1s median response", "92% prompt reuse"].map((label) => (
              <div key={label} className="rounded-md border bg-background p-4">
                <p className="text-2xl font-semibold">{label.split(" ")[0]}</p>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StatCard as StatCardType } from "@/types";
import { cn } from "@/lib/utils";

const toneClasses: Record<StatCardType["tone"], string> = {
  blue: "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300",
  slate: "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300",
  green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
};

export function StatCard({ stat }: { stat: StatCardType }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-3">
          <p className="text-3xl font-semibold tracking-normal">{stat.value}</p>
          <span className={cn("inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium", toneClasses[stat.tone])}>
            <ArrowUpRight className="size-3" aria-hidden />
            {stat.delta}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

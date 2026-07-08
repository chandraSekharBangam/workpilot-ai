"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

function getProgressWidth(value: number) {
  if (value <= 0) return "w-0";
  if (value <= 25) return "w-1/4";
  if (value <= 50) return "w-1/2";
  if (value <= 68) return "w-[68%]";
  if (value <= 75) return "w-3/4";
  if (value <= 90) return "w-[90%]";
  return "w-full";
}

export function Progress({ className, value = 0, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root className={cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className)} {...props}>
      <ProgressPrimitive.Indicator className={cn("h-full bg-primary transition-all", getProgressWidth(Number(value)))} />
    </ProgressPrimitive.Root>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Bot, ChevronLeft, ChevronRight, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { workspaceNavItems } from "@/constants/navigation";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

function formatSegment(segment: string) {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function WorkspaceShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const collapsed = useAppStore((state) => state.sidebarCollapsed);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="min-h-screen bg-muted/30">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 hidden border-r bg-background/95 backdrop-blur-xl transition-all duration-300 lg:block",
          collapsed ? "w-20" : "w-72",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/dashboard" className="flex min-w-0 items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-slate-950 text-white dark:bg-white dark:text-slate-950">
              <Bot className="size-5" aria-hidden />
            </span>
            <span className={cn("truncate font-semibold", collapsed && "sr-only")}>WorkPilot AI</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Toggle sidebar">
            {collapsed ? <ChevronRight aria-hidden /> : <ChevronLeft aria-hidden />}
          </Button>
        </div>
        <nav className="flex flex-col gap-1 p-3">
          {workspaceNavItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                      active && "bg-secondary text-secondary-foreground",
                      collapsed && "justify-center px-0",
                    )}
                  >
                    <item.icon className="size-4 shrink-0" aria-hidden />
                    <span className={cn("truncate", collapsed && "sr-only")}>{item.title}</span>
                    {item.badge && !collapsed ? (
                      <Badge variant="cyan" className="ml-auto">
                        {item.badge}
                      </Badge>
                    ) : null}
                  </Link>
                </TooltipTrigger>
                {collapsed ? <TooltipContent side="right">{item.title}</TooltipContent> : null}
              </Tooltip>
            );
          })}
        </nav>
      </aside>
      <div className={cn("transition-all duration-300 lg:pl-72", collapsed && "lg:pl-20")}>
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/85 px-4 backdrop-blur-xl sm:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open sidebar">
            <Menu aria-hidden />
          </Button>
          <div className="min-w-0 flex-1">
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <Link href="/dashboard" className="hover:text-foreground">
                Workspace
              </Link>
              {segments.map((segment, index) => (
                <span key={segment} className="flex items-center gap-2">
                  <span>/</span>
                  <span className={index === segments.length - 1 ? "text-foreground" : undefined}>{formatSegment(segment)}</span>
                </span>
              ))}
            </div>
            <div className="relative mt-0 sm:hidden">
              <span className="font-semibold">WorkPilot AI</span>
            </div>
          </div>
          <div className="relative hidden w-full max-w-sm md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input className="pl-9" placeholder="Search tools, prompts, docs..." />
          </div>
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <Link href="/content-generator">New prompt</Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Notifications">
            <Link href="/notifications">
              <Bell aria-hidden />
            </Link>
          </Button>
        </header>
        <main className="mx-auto w-full max-w-[1540px] px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

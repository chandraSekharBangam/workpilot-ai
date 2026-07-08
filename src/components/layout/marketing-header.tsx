import Link from "next/link";
import { Bot, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketingNavItems } from "@/constants/navigation";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex size-9 items-center justify-center rounded-md bg-slate-950 text-white dark:bg-white dark:text-slate-950">
            <Bot className="size-5" aria-hidden />
          </span>
          <span>WorkPilot AI</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          {marketingNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild variant="premium">
            <Link href="/dashboard">Open app</Link>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu aria-hidden />
        </Button>
      </div>
    </header>
  );
}

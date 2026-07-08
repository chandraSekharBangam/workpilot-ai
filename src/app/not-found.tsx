import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20">
      <section className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-lg border bg-card shadow-sm">
          <Compass className="size-6 text-primary" aria-hidden />
        </div>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-primary">404</p>
        <h1 className="text-4xl font-semibold tracking-normal text-balance text-foreground sm:text-5xl">
          This workspace view does not exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-muted-foreground">
          The page may have moved, or the route was never created. Return to the dashboard and keep the flow moving.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild variant="premium">
            <Link href="/dashboard">Open dashboard</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Back home</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

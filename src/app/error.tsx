"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="max-w-lg rounded-lg border bg-card p-8 text-center shadow-sm">
        <AlertTriangle className="mx-auto mb-4 size-8 text-destructive" aria-hidden />
        <h1 className="text-2xl font-semibold">Something needs a second pass.</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          The app hit an unexpected error. Try reloading this view.
        </p>
        <Button className="mt-6" onClick={reset}>
          Try again
        </Button>
      </section>
    </main>
  );
}

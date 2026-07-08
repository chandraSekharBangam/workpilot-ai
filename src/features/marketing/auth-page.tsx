"use client";

import Link from "next/link";
import { GitBranch, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const authSchema = z.object({
  email: z.string().email("Enter a valid email."),
  password: z.string().min(8, "Use at least 8 characters."),
});

type AuthFormValues = z.infer<typeof authSchema>;

export function AuthPage({ mode }: { mode: "sign-in" | "sign-up" }) {
  const isSignIn = mode === "sign-in";
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "demo@aiworkspace.dev", password: "workspace123" },
  });

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 block text-center text-lg font-semibold">
          WorkPilot AI
        </Link>
        <Card className="shadow-premium">
          <CardHeader className="text-center">
            <CardTitle>{isSignIn ? "Welcome back" : "Create your workspace"}</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              Clerk-ready authentication with Google, GitHub, and protected app routes.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button variant="outline" type="button">
                <Mail aria-hidden /> Continue with Google
              </Button>
              <Button variant="outline" type="button">
                <GitBranch aria-hidden /> Continue with GitHub
              </Button>
            </div>
            <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              or use email
              <span className="h-px flex-1 bg-border" />
            </div>
            <form className="space-y-4" onSubmit={form.handleSubmit(() => undefined)}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...form.register("email")} />
                {form.formState.errors.email ? <p className="text-xs text-destructive">{form.formState.errors.email.message}</p> : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" {...form.register("password")} />
                {form.formState.errors.password ? <p className="text-xs text-destructive">{form.formState.errors.password.message}</p> : null}
              </div>
              <Button className="w-full" variant="premium" type="submit">
                {isSignIn ? "Sign in" : "Create account"}
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              {isSignIn ? "New to WorkPilot AI?" : "Already have an account?"}{" "}
              <Link className="font-medium text-primary hover:underline" href={isSignIn ? "/sign-up" : "/sign-in"}>
                {isSignIn ? "Create account" : "Sign in"}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

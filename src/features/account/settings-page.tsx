"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PageHeader } from "@/components/shared/page-header";
import { useAppStore } from "@/store/app-store";

export function SettingsPage() {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Preferences" title="Settings" description="Control theme, language, notification, and privacy preferences." />
      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center justify-between gap-4 rounded-md border bg-background p-4">
              <div>
                <Label>Theme</Label>
                <p className="mt-1 text-sm text-muted-foreground">Switch between light and dark mode.</p>
              </div>
              <div className="flex rounded-md border p-1">
                <Button size="sm" variant={theme === "light" ? "default" : "ghost"} onClick={() => setTheme("light")}>
                  <Sun aria-hidden /> Light
                </Button>
                <Button size="sm" variant={theme === "dark" ? "default" : "ghost"} onClick={() => setTheme("dark")}>
                  <Moon aria-hidden /> Dark
                </Button>
              </div>
            </div>
            <div className="rounded-md border bg-background p-4">
              <Label htmlFor="language">Language</Label>
              <select
                id="language"
                value={language}
                onChange={(event) => setLanguage(event.target.value as typeof language)}
                className="mt-2 h-10 w-full rounded-md border bg-background px-3 text-sm"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Workspace policies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {["Email notifications", "Weekly usage digest", "Prompt privacy mode", "Admin approval for exports"].map((setting, index) => (
              <div key={setting} className="flex items-center justify-between gap-4 rounded-md border bg-background p-4">
                <div>
                  <Label>{setting}</Label>
                  <p className="mt-1 text-sm text-muted-foreground">Configured at the workspace level.</p>
                </div>
                <Switch defaultChecked={index !== 3} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

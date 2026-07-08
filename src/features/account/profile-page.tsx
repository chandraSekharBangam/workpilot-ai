import { Camera, GitBranch, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PageHeader } from "@/components/shared/page-header";

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Account" title="Profile" description="Manage identity, preferences, security, and connected accounts." />
      <div className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <Card>
          <CardHeader>
            <CardTitle>Profile photo</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mx-auto flex size-28 items-center justify-center rounded-full bg-secondary text-3xl font-semibold text-secondary-foreground">
              AW
            </div>
            <Button className="mt-5" variant="outline">
              <Camera aria-hidden /> Upload avatar
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profile information</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="B Chandra Sekhar " />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" defaultValue="Workspace Owner" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="avery@aiworkspace.dev" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { title: "Security", icon: ShieldCheck, detail: "Two-factor authentication enabled" },
          { title: "Google", icon: Mail, detail: "Connected for SSO" },
          { title: "GitHub", icon: GitBranch, detail: "Connected for developer auth" },
        ].map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <item.icon className="mb-3 size-5 text-primary" aria-hidden />
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">{item.detail}</p>
              <Switch defaultChecked />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

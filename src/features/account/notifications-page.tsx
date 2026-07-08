import { BellRing } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";

const notifications = [
  "Credit usage crossed 65% of the monthly Pro allocation.",
  "Document Assistant completed analysis for Q3 launch memo.",
  "Mina Patel invited Jon Bell to the workspace.",
  "Admin policy updated export approval requirements.",
];

export function NotificationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Inbox" title="Notifications" description="Workspace alerts for credits, documents, policies, and collaboration activity." />
      <Card>
        <CardHeader>
          <CardTitle>Unread</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {notifications.map((notification, index) => (
            <div key={notification} className="flex items-start gap-3 rounded-md border bg-background p-4">
              <BellRing className="mt-1 size-4 text-primary" aria-hidden />
              <div className="flex-1">
                <p className="text-sm font-medium">{notification}</p>
                <p className="mt-1 text-xs text-muted-foreground">{index + 1}h ago</p>
              </div>
              <Badge variant={index === 0 ? "cyan" : "slate"}>{index === 0 ? "Usage" : "Workspace"}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

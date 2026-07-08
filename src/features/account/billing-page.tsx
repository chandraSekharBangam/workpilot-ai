import { CreditCard, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PageHeader } from "@/components/shared/page-header";

export function BillingPage() {
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Billing" title="Plan and usage" description="A billing-ready interface for plan details, invoices, credit budgets, and payment methods." />
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pro plan</CardTitle>
            <Badge variant="cyan">Renews Aug 8</Badge>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>Monthly credits</span>
                <span>122k / 180k</span>
              </div>
              <Progress value={68} />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["AI Chat", "Writer", "Images"].map((item, index) => (
                <div key={item} className="rounded-md border bg-background p-4">
                  <p className="text-sm text-muted-foreground">{item}</p>
                  <p className="mt-2 text-2xl font-semibold">{[48, 36, 16][index]}k</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment method</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 rounded-md border bg-background p-4">
              <CreditCard className="size-5 text-primary" aria-hidden />
              <div>
                <p className="text-sm font-medium">Visa ending in 4242</p>
                <p className="text-sm text-muted-foreground">Expires 04/29</p>
              </div>
            </div>
            <Button className="mt-4 w-full" variant="outline">Update payment</Button>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
        </CardHeader>
        <CardContent className="divide-y">
          {["INV-2048", "INV-2047", "INV-2046"].map((invoice) => (
            <div key={invoice} className="flex items-center justify-between py-4">
              <div>
                <p className="text-sm font-medium">{invoice}</p>
                <p className="text-sm text-muted-foreground">Paid by card</p>
              </div>
              <Button variant="ghost" size="sm">
                <Download aria-hidden /> PDF
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

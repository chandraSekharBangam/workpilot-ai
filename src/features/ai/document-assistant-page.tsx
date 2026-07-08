import { FileSearch, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";

export function DocumentAssistantPage() {
  const insights = ["12 risks extracted", "7 action items", "4 owner mentions", "2 missing clauses"];

  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Document Intelligence" title="Document Assistant" description="Upload, summarize, and extract decisions from PDFs, reports, contracts, and long-form docs." />
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader>
            <CardTitle>Upload document</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-dashed bg-background p-10 text-center">
              <UploadCloud className="mx-auto mb-4 size-10 text-primary" aria-hidden />
              <p className="font-medium">Drop a PDF, DOCX, or report</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">The demo models an upload surface without storing files.</p>
              <Button className="mt-5" variant="outline">Choose file</Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {insights.map((insight) => (
                <Badge key={insight} variant="cyan">{insight}</Badge>
              ))}
            </div>
            <div className="rounded-lg border bg-background p-5">
              <FileSearch className="mb-4 size-6 text-primary" aria-hidden />
              <p className="text-sm leading-7 text-muted-foreground">
                The uploaded launch memo recommends consolidating AI tooling before the next campaign cycle. Primary risks include
                inconsistent prompt governance, unclear budget ownership, and duplicated review workflows across content and operations teams.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

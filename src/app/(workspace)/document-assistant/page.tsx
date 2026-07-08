import type { Metadata } from "next";
import { DocumentAssistantPage } from "@/features/ai/document-assistant-page";

export const metadata: Metadata = {
  title: "Document Assistant",
};

export default function Page() {
  return <DocumentAssistantPage />;
}

import type { Metadata } from "next";
import { HelpCenterPage } from "@/features/marketing/help-center-page";

export const metadata: Metadata = {
  title: "Help Center",
  description: "WorkPilot AI support guides for AI tools, billing, roles, and workspace setup.",
};

export default function Page() {
  return <HelpCenterPage />;
}

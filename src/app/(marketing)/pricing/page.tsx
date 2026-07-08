import type { Metadata } from "next";
import { PricingPage } from "@/features/marketing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description: "WorkPilot AI pricing for solo builders, growing teams, and enterprise AI operations.",
};

export default function Page() {
  return <PricingPage />;
}

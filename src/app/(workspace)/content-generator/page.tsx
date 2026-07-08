import type { Metadata } from "next";
import { ContentGeneratorPage } from "@/features/ai/content-generator-page";

export const metadata: Metadata = {
  title: "AI Content Generator",
};

export default function Page() {
  return <ContentGeneratorPage />;
}

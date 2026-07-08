import type { Metadata } from "next";
import { ImageGeneratorPage } from "@/features/ai/image-generator-page";

export const metadata: Metadata = {
  title: "AI Image Generator",
};

export default function Page() {
  return <ImageGeneratorPage />;
}

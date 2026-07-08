import type { Metadata } from "next";
import { ChatPage } from "@/features/ai/chat-page";

export const metadata: Metadata = {
  title: "AI Chat",
};

export default function Page() {
  return <ChatPage />;
}

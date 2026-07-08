import type { Metadata } from "next";
import { NotificationsPage } from "@/features/account/notifications-page";

export const metadata: Metadata = {
  title: "Notifications",
};

export default function Page() {
  return <NotificationsPage />;
}

import type { Metadata } from "next";
import { AdminDashboardPage } from "@/features/admin/admin-dashboard-page";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function Page() {
  return <AdminDashboardPage />;
}

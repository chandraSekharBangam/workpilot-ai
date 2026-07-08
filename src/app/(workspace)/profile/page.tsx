import type { Metadata } from "next";
import { ProfilePage } from "@/features/account/profile-page";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Page() {
  return <ProfilePage />;
}

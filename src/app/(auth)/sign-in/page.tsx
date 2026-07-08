import type { Metadata } from "next";
import { AuthPage } from "@/features/marketing/auth-page";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Page() {
  return <AuthPage mode="sign-in" />;
}

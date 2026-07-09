// ============================================================
// 🔒 CLERK PROVIDER — TEMPORARILY DISABLED
// Uncomment the ClerkProvider block when Clerk keys are set in Vercel.
// ============================================================

// import { ClerkProvider } from "@clerk/nextjs"; // CLERK DISABLED
import { ClientProviders } from "@/providers/client-providers";

export function RootProviders({ children }: { children: React.ReactNode }) {
  // --- CLERK DISABLED (uncomment when ready) ---
  // const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  //
  // if (!publishableKey) {
  //   return <ClientProviders>{children}</ClientProviders>;
  // }
  //
  // return (
  //   <ClerkProvider publishableKey={publishableKey}>
  //     <ClientProviders>{children}</ClientProviders>
  //   </ClerkProvider>
  // );

  // Temporary: render without Clerk auth wrapper
  return <ClientProviders>{children}</ClientProviders>;
}

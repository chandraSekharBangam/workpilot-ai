import { ClerkProvider } from "@clerk/nextjs";
import { ClientProviders } from "@/providers/client-providers";

export function RootProviders({ children }: { children: React.ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    return <ClientProviders>{children}</ClientProviders>;
  }

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <ClientProviders>{children}</ClientProviders>
    </ClerkProvider>
  );
}

// ============================================================
// 🔒 CLERK AUTH MIDDLEWARE — TEMPORARILY DISABLED
// Uncomment the block below when Clerk keys are configured in Vercel.
// To re-enable: remove the early-return export and uncomment everything.
// ============================================================

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// --- CLERK DISABLED (uncomment when ready) ---
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
//
// const isProtectedRoute = createRouteMatcher([
//   "/dashboard(.*)",
//   "/chat(.*)",
//   "/content-generator(.*)",
//   "/image-generator(.*)",
//   "/document-assistant(.*)",
//   "/history(.*)",
//   "/profile(.*)",
//   "/settings(.*)",
//   "/billing(.*)",
//   "/notifications(.*)",
//   "/admin(.*)",
// ]);
//
// export default clerkMiddleware(async (auth, req) => {
//   if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
//     return NextResponse.next();
//   }
//   if (isProtectedRoute(req)) {
//     await auth.protect();
//   }
//   return NextResponse.next();
// });

// Temporary passthrough middleware — no auth, all routes open
export default function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)" ],
};

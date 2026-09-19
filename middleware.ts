import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * SITE_STATUS controlled suspension
 * ---------------------------------
 * SITE_STATUS=ON  → normal website
 * SITE_STATUS=OFF → every visitor sees the maintenance page
 *
 * Toggle in Vercel → Settings → Environment Variables, then Redeploy.
 */
export function middleware(request: NextRequest) {
  const status = (process.env.SITE_STATUS || "ON").toUpperCase().trim();

  // When site is ON, do nothing
  if (status === "ON") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Always allow the maintenance page and static assets
  if (
    pathname === "/maintenance" ||
    pathname.startsWith("/maintenance/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/apple-icon") ||
    pathname.startsWith("/images/")
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to maintenance
  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.rewrite(url); // rewrite (not redirect) avoids extra hop
}

export const config = {
  matcher: [
    /*
     * Match only real page routes. Explicitly skip:
     * - API
     * - Next.js internals
     * - static files with extensions
     */
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|.*\\..*).*)"
  ]
};

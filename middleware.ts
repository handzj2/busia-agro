import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * SITE_STATUS controlled suspension
 * ---------------------------------
 * Set SITE_STATUS=OFF  (or any value other than "ON") in Vercel Environment
 * Variables (or .env.local) to put the entire site into maintenance mode.
 *
 * Set SITE_STATUS=ON to restore the normal website.
 *
 * This does NOT delete the project, domain, GitHub code, database, or
 * deployment history. Flip the variable and redeploy (or wait for the next
 * build) to toggle.
 */
export function middleware(request: NextRequest) {
  const status = (process.env.SITE_STATUS || "ON").toUpperCase().trim();

  // Allow the maintenance page itself and static assets so the page can load
  if (
    status === "ON" ||
    request.nextUrl.pathname.startsWith("/maintenance") ||
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/favicon") ||
    request.nextUrl.pathname.startsWith("/icon") ||
    request.nextUrl.pathname.startsWith("/apple-icon") ||
    request.nextUrl.pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // Everything else → temporary redirect to the maintenance page
  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (if any)
     * - _next/static, _next/image
     * - favicon / icons / images (handled above as well)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|icon-192.png|icon-512.png|apple-icon.png|images/).*)"
  ]
};

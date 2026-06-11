import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Handle root redirect
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // 2. Prevent middleware from running on static files and internal Next.js paths
  if (
    pathname.includes(".") || // files like .ico, .svg, .png
    pathname.startsWith("/_next") || // internal next.js paths
    pathname.startsWith("/api") // api routes
  ) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring internal paths and static files
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

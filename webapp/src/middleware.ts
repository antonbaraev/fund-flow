import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { ROUTES } from "./routes";

export const config = {
  matcher: "/",
};

export function middleware(request: NextRequest) {
  const dashboardRoute = new URL(ROUTES.dashboard, request.url);

  return NextResponse.redirect(dashboardRoute);
}

// import { NextResponse } from "next/server";

// export function middleware(request) {
//   // Redirect user
//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "./app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account", "/account/:path*"], // where this middleware should run
};

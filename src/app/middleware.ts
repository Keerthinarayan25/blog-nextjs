import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const protectedRoutes = ["/profile","/posts/create", "/posts/edit"];

export async function middleware(request: NextRequest){
  const pathname = request.nextUrl.pathname;
  const session = getSessionCookie(request);

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if(isProtectedRoute  && !session){
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if(pathname === "/auth/login" && session){
    return NextResponse.redirect(new URL("/" , request.url));
  }
  return NextResponse.next();

}

export const config = {
  matcher: ["/profile/:path*", "/posts/create", "/posts/edit/:path*", "/auth/login", "/auth/signup"]

}
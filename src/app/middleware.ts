import { auth } from "@/app/auth";
import {NextRequest} from "next/server";
import type {Session} from "next-auth";

interface AuthenticatedRequest extends NextRequest {
  auth?: Session | null;
}

export default auth((req:AuthenticatedRequest ) => {
  const {pathname} = req.nextUrl;

  if(pathname.startsWith("/dashboard")){
    return !!req.auth;
  }
  return true;

});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
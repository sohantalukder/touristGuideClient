import Cookies from "js-cookie";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    const isLogin  = Cookies.get("auth")
    ? JSON.parse(Cookies.get("auth"))
    : null;
    if (!isLogin) {
        if (request.nextUrl.pathname.startsWith("/dashboard")) {
          return NextResponse.rewrite(new URL("/", request.url));
        }
      }else{
        if(url.pathname === "/"){
            url.pathname = "/events/create";
            return NextResponse.redirect(url);
        }
      }
    
      if (request.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.rewrite(new URL("/", request.url));
      }
}

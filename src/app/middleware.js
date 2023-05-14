import Cookies from "js-cookie";

export function middleware(request) {
    const url = request.nextUrl.clone();

    const userInfoFromStorage = Cookies.get("auth", { secret: "test" }) || null;
    if (!userInfoFromStorage?.token) {
        if (request.nextUrl.pathname.startsWith("/dashboard")) {
            return NextResponse.rewrite(new URL("/", request.url));
        }
    } else {
        if (url.pathname === "/") {
            url.pathname = "/dashboard/home";
            return NextResponse.redirect(url);
        }
    }

    if (request.nextUrl.pathname.startsWith("/login")) {
        return NextResponse.rewrite(new URL("/", request.url));
    }
}

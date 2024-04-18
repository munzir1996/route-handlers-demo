import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const response = NextResponse.next();

    const themePreference = request.cookies.get('theme');

    if (!themePreference) {
        response.cookies.set('theme', 'dark');
    }

    response.headers.set('custom-content', 'custom-value');
    console.log('niiga');
    console.log(response);
    
    return response;

    // if (request.nextUrl.pathname === '/profile') {
    //     return NextResponse.rewrite(new URL("/hello", request.url))
    // }

    // return NextResponse.redirect(new URL('/', request.url));
}

// export const config = {
//     matcher: "/profile",
// }


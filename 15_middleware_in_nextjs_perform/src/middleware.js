import { NextResponse } from "next/server";

export function middleware(request){

    // if path is not login then redirect it to login
    if(request.nextUrl.pathname !== "login"){
        return NextResponse.redirect(new URL("/login" , request.url))
    }
}

// for single
// export const config={
//     matcher:"/about/:path*"
// }

// for many

export const config={
    matcher:["/about/:path*" , "/studentlist/:path"]
}
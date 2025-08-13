import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    try {

        const path = request.nextUrl.pathname;

        const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

        const token = request.cookies.get('token')?.value || ''

        if (isPublicPath && token) {
            return NextResponse.redirect(new URL('/', request.nextUrl))
        }

        if (!isPublicPath && !token) {
            return NextResponse.redirect(new URL('/login', request.nextUrl))
        }


    }
    catch (error: any) {
        return NextResponse.json(
            {
                message: "Something went Wrong",
                success: false
            }

        )
    }

}

export const config = {
    matcher: [
        '/',
        '/login',
        '/signup',
        '/profile',
        '/verifyemail'
    ]
}
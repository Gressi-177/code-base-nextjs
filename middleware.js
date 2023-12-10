import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const session = await getToken({ req: request, secret: process.env.SECRET })
    if (!session?.data?.token) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/groups',
        '/groups/:path*'
    ],
}
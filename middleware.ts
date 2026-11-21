// middleware.ts (at the root of your project)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check for a session token in cookies
    const token = request.cookies.get('token');
    
  // If trying to access dashboard without a token, redirect to login
  if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next(); // Allow request to proceed
}

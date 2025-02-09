// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Add or remove public routes as needed
const publicRoutes = ['/', '/sign-in', '/sign-up'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the route is public
  const isPublicRoute = publicRoutes.some(route => pathname === route);

  // Allow public assets
  if (
    pathname.startsWith('/_next') || // Next.js assets
    pathname.startsWith('/api/auth') || // Auth.js API routes
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // public files like images
  ) {
    return NextResponse.next();
  }

  // Get the token from cookies
  // const token = request.cookies.get('auth-token')?.value || '';
  const token = 'fake-token';
  // If the route is public, prevent authenticated users from accessing it
  if (isPublicRoute) {
    // If user is authenticated, redirect to dashboard
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    // Allow access to public route for non-authenticated users
    return NextResponse.next();
  }

  // For protected routes, check if user is authenticated
  if (!token) {
    // Store the original URL to redirect back after login
    const searchParams = new URLSearchParams({
      callbackUrl: pathname,
    });

    // Redirect to sign-in page with callback URL
    return NextResponse.redirect(
      new URL(`/sign-in?${searchParams}`, request.url),
    );
  }

  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

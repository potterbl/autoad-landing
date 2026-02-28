import { NextRequest, NextResponse } from 'next/server';

export const locales = ['en', 'uk', 'ru'];
export const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  // Skip if it's an API route or static file
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

function getLocale(request: NextRequest): string {
  // Get locale from accept-language header
  const acceptLanguage = request.headers.get('accept-language') || '';

  if (acceptLanguage.includes('uk') || acceptLanguage.includes('ua')) return 'uk';
  if (acceptLanguage.includes('ru')) return 'ru';

  return defaultLocale;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};



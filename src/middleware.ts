import { createI18nMiddleware } from 'next-international/middleware'
import type { NextRequest } from 'next/server'

import locales, { DEFAULT_LOCALE } from '@mantul/locales'

const I18nMiddleware = createI18nMiddleware({
  locales: locales,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: 'rewrite',
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}

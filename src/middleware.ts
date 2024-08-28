import { createI18nMiddleware } from 'next-international/middleware'
import type { NextRequest } from 'next/server'

import langs, { DEFAULT_LOCALE } from '@mantul/locales/langs'

const I18nMiddleware = createI18nMiddleware({
  locales: langs,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: 'rewrite',
})

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}

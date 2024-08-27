'use client'

import { I18nProviderClient } from '@mantul/locales/client'
import type { ReactNode } from 'react'

type ProviderProps = {
  lang: string
  children: ReactNode
}

export function I18nProvider({ lang, children }: ProviderProps) {
  return (
    <I18nProviderClient locale={lang} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  )
}

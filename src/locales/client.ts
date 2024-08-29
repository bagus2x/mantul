import { createI18nClient } from 'next-international/client'

import locales, { DEFAULT_LOCALE, Translation, Translations } from '@mantul/locales'

const fallback = require(`@mantul/locales/langs/${DEFAULT_LOCALE}`)

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  defineLocale,
  useCurrentLocale,
} = createI18nClient<Translations, Translation>(
  locales.reduce(
    (langs, lang) => ({
      ...langs,
      [lang]: async (): Promise<Translations[typeof lang]> => {
        return import(`@mantul/locales/langs/${lang}`) as Promise<Translations[typeof lang]>
      },
    }),
    {} as Record<(typeof locales)[number], () => Promise<Translation>>,
  ),
  {
    // Uncomment to set base path
    // basePath: '/base',
    // Uncomment to use custom segment name
    // segmentName: 'locale',
    // Uncomment to set fallback locale
    fallbackLocale: fallback,
  },
)

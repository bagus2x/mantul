import { createI18nServer } from 'next-international/server'

import locales, { Translation, Translations } from '@mantul/locales'
import fallback from '@mantul/locales/langs/en'

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer<
  Translations,
  Translation
>(
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
    // Uncomment to use custom segment name
    // segmentName: 'locale',
    // Uncomment to set fallback locale
    fallbackLocale: fallback,
  },
)

import { createI18nServer } from 'next-international/server'

import langs, { Translation, Translations } from '@mantul/locales/langs'
import fallback from '@mantul/locales/langs/en'

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer<
  Translations,
  Translation
>(
  langs.reduce(
    (langs, lang) => ({
      ...langs,
      [lang]: async (): Promise<Translations[typeof lang]> => {
        return import(`@mantul/locales/langs/${lang}`) as Promise<Translations[typeof lang]>
      },
    }),
    {} as Record<(typeof langs)[number], () => Promise<Translation>>,
  ),
  {
    // Uncomment to use custom segment name
    // segmentName: 'locale',
    // Uncomment to set fallback locale
    fallbackLocale: fallback,
  },
)

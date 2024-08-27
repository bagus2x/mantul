import { createI18nClient } from 'next-international/client'

import langs, { Translation, Translations } from '@mantul/locales/langs'

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  defineLocale,
  useCurrentLocale,
} = createI18nClient<Translations, Translation>(
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
    // Uncomment to set base path
    // basePath: '/base',
    // Uncomment to use custom segment name
    // segmentName: 'locale',
    // Uncomment to set fallback locale
    // fallbackLocale: en,
  },
)

import en from './langs/en'

const locales = ['id', 'en', 'ar'] as const

export const DEFAULT_LOCALE: (typeof locales)[number] = 'en'

export type Translation = {
  [lang in (typeof locales)[number]]: typeof en
}

export type Translations = {
  [lang in (typeof locales)[number]]: () => Promise<any>
}

export default locales

import en from './en'

const langs = ['id', 'en', 'ar'] as const

export const DEFAULT_LOCALE: (typeof langs)[number] = 'en'

export type Translation = {
  [lang in (typeof langs)[number]]: typeof en
}

export type Translations = {
  [lang in (typeof langs)[number]]: () => Promise<any>
}

export default langs

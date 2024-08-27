import en from './en'

const langs = ['id', 'en'] as const

export type Translation = {
  [lang in (typeof langs)[number]]: typeof en
}

export type Translations = {
  [lang in (typeof langs)[number]]: () => Promise<any>
}

export default langs

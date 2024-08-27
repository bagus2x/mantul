import { getI18n } from '@mantul/locales/server'
export default async function Page() {
  const t = await getI18n()

  return (
    <main>
      <p>{t('counter', { value: 1 })}</p>
    </main>
  )
}

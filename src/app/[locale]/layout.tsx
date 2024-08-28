import Locale from 'intl-locale-textinfo-polyfill'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { ProgressBar, ProgressBarProvider } from 'react-transition-progress'

import '@mantul/app/[locale]/globals.css'
import { I18nProvider } from '@mantul/components/i18n-provider'
import { ThemeProvider } from '@mantul/components/theme-provider'
import { cn } from '@mantul/libs/utils'

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Mantul Dashboard ',
  description: 'Created by bagus2x',
  icons: 'mantul.svg',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const { direction: dir } = new Locale(locale).textInfo
  
  return (
    <html lang={locale} dir={dir} suppressHydrationWarning={true}>
      <body className={cn('min-h-screen', noto.className)}>
        <I18nProvider lang={locale}>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <ProgressBarProvider>
              <ProgressBar className='fixed start-0 top-0 z-50 h-1 w-full bg-primary pb-1 text-2xl font-semibold' />
              {children}
            </ProgressBarProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import { ProgressBar, ProgressBarProvider } from 'react-transition-progress'

import '@mantul/app/globals.css'
import { cn } from '@mantul/libs/utils'

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Mantul Dashboard ',
  description: 'Created by bagus2x',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen', noto.className)}>
        <ProgressBarProvider>
          <ProgressBar className='fixed start-0 top-0 z-50 h-1 w-full bg-primary pb-1 text-2xl font-semibold' />
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  )
}


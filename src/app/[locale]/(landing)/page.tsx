import { Metadata } from 'next'

import { Hero } from '@mantul/app/[locale]/(landing)/components/hero'
import { Pricing } from '@mantul/app/[locale]/(landing)/components/pricing'
import { Review } from '@mantul/app/[locale]/(landing)/components/review'
import { Faq } from '@mantul/app/[locale]/(landing)/components/faq'
import { Footer } from '@mantul/app/[locale]/(landing)/components/footer'

export const metadata: Metadata = {
  title: 'Mantul',
}

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Review />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  )
}

import { Metadata } from 'next'

import { Hero } from '@mantul/app/[lang]/(landing)/components/hero'
import { Pricing } from '@mantul/app/[lang]/(landing)/components/pricing'
import { Review } from '@mantul/app/[lang]/(landing)/components/review'
import { Faq } from '@mantul/app/[lang]/(landing)/components/faq'
import { Footer } from '@mantul/app/[lang]/(landing)/components/footer'

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


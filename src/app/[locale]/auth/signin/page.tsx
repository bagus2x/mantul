import { Metadata } from 'next'

import { SignInForm } from '@mantul/app/[locale]/auth/signin/components/signin-form'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function SignInPage() {
  return (
    <main className='min-h-screen w-full bg-background px-4 py-20'>
      <SignInForm className='mx-auto w-full max-w-sm' />
    </main>
  )
}

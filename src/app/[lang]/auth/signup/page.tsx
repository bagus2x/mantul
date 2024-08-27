import { Metadata } from 'next'

import { SignUpForm } from '@mantul/app/[lang]/auth/signup/components/signup-form'

export const metadata: Metadata = {
  title: 'Sign up',
}

export default function SignUpPage() {
  return (
    <main className='min-h-screen w-full bg-background px-4 py-20'>
      <SignUpForm className='mx-auto w-full max-w-sm' />
    </main>
  )
}

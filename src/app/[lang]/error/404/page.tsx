import { BookOpenIcon, HeadsetIcon } from 'lucide-react'
import Image from 'next/image'

import { ButtonGoBack } from '@mantul/app/[lang]/error/components/button-go-back'
import { Button } from '@mantul/components/ui/button'
import { Link } from '@mantul/components/ui/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not found',
}

export default function NotFoundPage() {
  return (
    <main className='min-h-screen w-full'>
      <section className='mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-4 p-4'>
        <Image
          src='/illustrations/not-found.svg'
          alt='Not found'
          width={0}
          height={0}
          sizes='100%'
          className='w-full max-w-lg'
        />
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          404 Not Found
        </h1>
        <p>
          We searched high and low, but couldn’t find what you’re looking for.Let’s find a better
          place for you to go.
        </p>
        <ul className='flex flex-wrap gap-4'>
          <li>
            <ButtonGoBack />
          </li>
          <li>
            <Button asChild variant='outline'>
              <Link href='/documentation'>
                <BookOpenIcon className='me-2' /> Documentation
              </Link>
            </Button>
          </li>
          <li>
            <Button asChild variant='outline'>
              <Link href='/contact'>
                <HeadsetIcon className='me-2' /> Contact
              </Link>
            </Button>
          </li>
        </ul>
      </section>
    </main>
  )
}

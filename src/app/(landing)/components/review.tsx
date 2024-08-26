import Image from 'next/image'

import Marquee from '@mantul/components/magicui/marquee'
import { cn } from '@mantul/libs/utils'
import BlurFade from '@mantul/components/magicui/blur-fade'

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

export interface ReviewCardProps {
  img: string
  name: string
  username: string
  body: string
}

const ReviewCard = ({ img, name, username, body }: ReviewCardProps) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}>
      <div className='flex flex-row items-center gap-2'>
        <Image className='rounded-full' width='32' height='32' alt={username} src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>{name}</figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm'>{body}</blockquote>
    </figure>
  )
}

export interface ReviewProps {
  className?: string
}

export const Review = ({ className }: ReviewProps) => {
  return (
    <BlurFade
      id='review'
      inView
      className={cn(
        'relative flex w-full flex-col items-center justify-center overflow-hidden bg-background py-10',
        className,
      )}>
      <div className='text-center'>
        <h2 className='text-3xl font-bold'>What people say</h2>
        <p className='pt-1 text-xl'>Trusted by teams from around the world</p>
        <br />
      </div>
      <Marquee pauseOnHover className='[--duration:20s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:20s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
      <div className='z-10 flex w-full flex-wrap justify-center gap-8 p-4'>
        <Image src='/brand/google.svg' alt='Google' width={0} height={0} className='h-8 w-auto' />
        <Image
          src='/brand/microsoft.svg'
          alt='Microsoft'
          width={0}
          height={0}
          className='h-8 w-auto fill-white'
        />
        <Image src='/brand/github.svg' alt='GitHub' width={0} height={0} className='h-8 w-auto' />
        <Image src='/brand/shopify.svg' alt='Shopify' width={0} height={0} className='h-8 w-auto' />
      </div>
    </BlurFade>
  )
}

import { ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'

import { Navbar } from '@mantul/app/(landing)/components/navbar'
import AnimatedGradientText from '@mantul/components/magicui/animated-gradient-text'
import BlurFade from '@mantul/components/magicui/blur-fade'
import { BorderBeam } from '@mantul/components/magicui/border-beam'
import GradualSpacing from '@mantul/components/magicui/gradual-spacing'
import RetroGrid from '@mantul/components/magicui/retro-grid'
import { Link } from '@mantul/components/ui/link'
import { cn } from '@mantul/libs/utils'

export interface HeroProps {
  className?: string
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <section
      id='hero'
      className={cn(
        'relative min-h-[calc(100vh*0.75)] w-full overflow-x-hidden px-4 pb-20 pt-8',
        className,
      )}>
      <div className='absolute left-0 top-0 h-[calc(100%*0.75)] w-full overflow-hidden rounded-b-[64px] bg-primary/40 dark:hidden dark:bg-primary/10'>
        <div className='relative h-full w-full'>
          <RetroGrid />
        </div>
      </div>
      <div className='fixed left-1/2 z-50 w-full max-w-screen-2xl -translate-x-1/2 transform px-4'>
        <Navbar />
      </div>
      <div className='relative mx-auto flex max-w-xl flex-col gap-8 px-4 pb-10 pt-20 text-center'>
        <Link href='/dashboard'>
          <AnimatedGradientText>
            🎉 <hr className='mx-2 h-4 w-[1px] shrink-0 bg-gray-300' />{' '}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}>
              Introducing Mantul
            </span>
            <ChevronRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
          </AnimatedGradientText>
        </Link>
        <GradualSpacing
          text='Manage Data, Boost Productivity'
          className='scroll-m-20 break-words text-4xl font-extrabold tracking-tight lg:text-5xl'
        />
        <BlurFade inView as='p'>
          Ready-to-use Admin Template for Reliable and Customizable Solutions
        </BlurFade>
      </div>
      <BlurFade
        className='relative mx-auto w-full max-w-screen-md overflow-hidden rounded-2xl shadow-2xl'
        inView>
        <Image
          src='/ss-dashboard.png'
          alt='Dashboard'
          width={0}
          height={0}
          className='h-auto w-full dark:hidden'
          sizes='100%'
        />
        <Image
          src='/ss-dashboard-dark.png'
          alt='Dashboard'
          width={0}
          height={0}
          className='hidden h-auto w-full dark:block'
          sizes='100%'
        />
        <BorderBeam size={250} borderWidth={2} duration={12} delay={9} className='rounded-2xl' />
      </BlurFade>
    </section>
  )
}

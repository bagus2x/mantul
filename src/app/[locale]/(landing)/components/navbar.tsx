import Image from 'next/image'

import { Button } from '@mantul/components/ui/button'
import { Link } from '@mantul/components/ui/link'
import { cn } from '@mantul/libs/utils'
import { getI18n } from '@mantul/locales/server'
import { LogInIcon } from 'lucide-react'

export interface NavbarProps {
  className?: string
}

export const Navbar = async ({ className }: NavbarProps) => {
  const t = await getI18n()

  return (
    <nav
      className={cn(
        'flex h-16 w-full items-center gap-4 rounded-2xl bg-background/30 px-4 ring-[1px] ring-background backdrop-blur-2xl dark:bg-background/10 dark:ring-foreground md:gap-8',
        className,
      )}>
      <Image src='/mantul.svg' alt='Mantul' width={400} height={400} className='size-10' />
      <ul className='flex gap-4 md:gap-8'>
        <li>
          <Link href='#hero' className='hidden font-semibold md:block'>
            {t('landing.navbar.home')}
          </Link>
        </li>
        <li>
          <Link href='#pricing' className='hidden font-semibold md:block'>
            {t('landing.navbar.pricing')}
          </Link>
        </li>
        <li>
          <Link href='#faq' className='hidden font-semibold md:block'>
            {t('landing.navbar.faq')}
          </Link>
        </li>
        <li>
          <Link href='/dashboard' className='hidden font-semibold md:block'>
            {t('landing.navbar.dashboard')}
          </Link>
        </li>
      </ul>
      <div className='flex-1' />
      <Button asChild>
        <Link href='/auth/signin'>
          <LogInIcon className='me-2' />
          Login
        </Link>
      </Button>
    </nav>
  )
}

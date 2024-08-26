import Image from 'next/image'

import { Link } from '@mantul/components/ui/link'
import { Button } from '@mantul/components/ui/button'
import { LogInIcon } from 'lucide-react'
import { cn } from '@mantul/libs/utils'

export interface NavbarProps {
  className?: string
}

const pages: { title: string; href: string; description: string }[] = [
  {
    title: 'Dashboard',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Kanban',
    href: '/kanban',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Email',
    href: '/email',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Chat',
    href: '/chat',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Calendar',
    href: '/calendar',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export const Navbar = ({ className }: NavbarProps) => {
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
            Home
          </Link>
        </li>
        <li>
          <Link href='#pricing' className='hidden font-semibold md:block'>
            Pricing
          </Link>
        </li>
        <li>
          <Link href='#faq' className='hidden font-semibold md:block'>
            Faq
          </Link>
        </li>
        <li>
          <Link href='/dashboard' className='hidden font-semibold md:block'>
            Dashboard
          </Link>
        </li>
      </ul>
      <div className='flex-1' />
      <Button asChild>
        <Link href='/auth/signin'>
          <LogInIcon className='mr-2' />
          Login
        </Link>
      </Button>
    </nav>
  )
}

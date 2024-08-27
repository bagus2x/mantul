'use client'

import { BellIcon, GlobeIcon, LayoutGrid, MenuIcon } from 'lucide-react'

import { DropdownDarkMode } from '@mantul/app/[lang]/(admin)/components/dropdown-dark-mode'
import { NavbarProfileMenu } from '@mantul/app/[lang]/(admin)/components/navbar-profile-menu'
import { NavbarSearchBox } from '@mantul/app/[lang]/(admin)/components/navbar-search-box'
import { useSidebar } from '@mantul/app/[lang]/(admin)/components/sidebar'
import { Button } from '@mantul/components/ui/button'
import { cn } from '@mantul/libs/utils'

export interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { toggle } = useSidebar()

  return (
    <nav className={cn('flex h-16 items-center border-b border-border bg-background', className)}>
      <div className='mx-auto flex max-w-screen-2xl flex-1 items-center gap-4 pl-2 pr-4'>
        <Button variant='ghost' size='icon' className='hidden md:inline-flex'>
          <LayoutGrid />
        </Button>
        <Button onClick={toggle} variant='ghost' size='icon' className='md:hidden'>
          <MenuIcon />
        </Button>
        <div className='flex-1' />
        <NavbarSearchBox />
        <Button variant='ghost' size='icon' className='hidden md:inline-flex'>
          <GlobeIcon />
        </Button>
        <DropdownDarkMode />
        <Button variant='ghost' size='icon'>
          <BellIcon />
        </Button>
        <NavbarProfileMenu />
      </div>
    </nav>
  )
}

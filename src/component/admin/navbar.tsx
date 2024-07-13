'use client'

import { BellIcon, GlobeIcon, LayoutGrid, MenuIcon, SunIcon } from 'lucide-react'

import { NavbarProfileMenu } from '@mantul/component/admin/navbar-profile-menu'
import { NavbarSearchBox } from '@mantul/component/admin/navbar-search-box'
import { useSidebar } from '@mantul/component/admin/sidebar'
import { Button } from '@mantul/component/ui/button'
import { cn } from '@mantul/lib/utils'

export interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { toggle } = useSidebar()

  return (
    <nav className={cn('flex h-16 items-center border-b border-border bg-background', className)}>
      <div className='mx-auto flex max-w-screen-2xl flex-1 items-center gap-4 px-4'>
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
        <Button variant='ghost' size='icon' className='hidden md:inline-flex'>
          <SunIcon />
        </Button>
        <Button variant='ghost' size='icon'>
          <BellIcon />
        </Button>
        <NavbarProfileMenu />
      </div>
    </nav>
  )
}

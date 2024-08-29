'use client'

import { CheckIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@mantul/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@mantul/components/ui/dropdown-menu'

export interface DropdownDarkModeProps {
  className?: string
}

export const DropdownDarkMode = ({ className }: DropdownDarkModeProps) => {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant='ghost' size='icon'>
          <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')} className='flex justify-between'>
          <span>Light</span> {theme === 'light' && <CheckIcon />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')} className='flex justify-between'>
          <span>Dark</span> {theme === 'dark' && <CheckIcon />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')} className='flex justify-between'>
          <span>System</span> {theme === 'system' && <CheckIcon />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

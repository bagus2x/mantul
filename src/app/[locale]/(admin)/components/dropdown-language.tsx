'use client'

import { CheckIcon, GlobeIcon } from 'lucide-react'

import { Button } from '@mantul/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@mantul/components/ui/dropdown-menu'
import { useChangeLocale, useCurrentLocale } from '@mantul/locales/client'
import langs from '@mantul/locales/langs'

export interface DropdownLanguageProps {
  className?: string
}

export const DropdownLanguage = ({ className }: DropdownLanguageProps) => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant='ghost' size='icon'>
          <GlobeIcon />
          <span className='sr-only'>Change language </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {langs.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLocale(lang)}
            className='flex justify-between'>
            <span className='uppercase'> {lang}</span>
            {lang === currentLocale && <CheckIcon />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

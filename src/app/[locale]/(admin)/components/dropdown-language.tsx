'use client'

import { CheckIcon, GlobeIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@mantul/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@mantul/components/ui/dropdown-menu'
import languages from '@mantul/libs/languages'
import { cn } from '@mantul/libs/utils'
import locales from '@mantul/locales'
import { useChangeLocale, useCurrentLocale } from '@mantul/locales/client'

export interface DropdownLanguageProps {
  className?: string
}

export const DropdownLanguage = ({ className }: DropdownLanguageProps) => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()

  const Item = ({ locale }: { locale: (typeof locales)[number] }) => {
    const language = languages.find((lang) => lang.code === locale)

    return (
      <DropdownMenuItem
        key={locale}
        onClick={() => changeLocale(locale)}
        className='flex min-w-60 gap-2'>
        <span className='me-1 uppercase'>{language?.name}</span>
        <div className='flex flex-1 justify-end'>
          {language && <Image src={language.flag} alt={language.name} width={20} height={20} />}
        </div>
        {<CheckIcon className={cn('opacity-0', locale === currentLocale && 'opacity-100')} />}
      </DropdownMenuItem>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button variant='ghost' size='icon'>
          <GlobeIcon />
          <span className='sr-only'>Change language </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {locales.map((locale) => (
          <Item key={locale} locale={locale} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

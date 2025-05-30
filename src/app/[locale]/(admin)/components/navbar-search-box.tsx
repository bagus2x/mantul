import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SearchIcon,
  SettingsIcon,
  SmilePlusIcon,
  UserIcon,
} from 'lucide-react'
import { useRef, useState } from 'react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@mantul/components/ui/command'
import { useOutsideClick } from '@mantul/hooks/use-outside-click'
import { cn } from '@mantul/libs/utils'

export interface NavbarSearchBoxProps {
  className?: string
}

export const NavbarSearchBox = ({ className }: NavbarSearchBoxProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useOutsideClick(() => setIsFocused(false), ref)

  return (
    <div ref={ref} className='relative flex w-full max-w-96 flex-col'>
      <button
        onClick={() => setIsFocused(true)}
        className={cn(
          'flex w-full items-center justify-start gap-2 rounded-md bg-gray-100 px-3 py-2 dark:bg-card',
          className,
        )}>
        <SearchIcon className='heheh size-4 shrink-0' />
        <span className='text-sm'>Search...</span>
      </button>
      {isFocused && (
        <div className='absolute start-0 top-0 w-full'>
          <Command className='rounded-sg border shadow-md'>
            <CommandInput placeholder='Search...' className='h-9' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading='Suggestions'>
                <CommandItem>
                  <CalendarIcon className='me-2 h-4 w-4' />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <SmilePlusIcon className='me-2 h-4 w-4' />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <CalculatorIcon className='me-2 h-4 w-4' />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading='Settings'>
                <CommandItem>
                  <UserIcon className='me-2 h-4 w-4' />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon className='me-2 h-4 w-4' />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon className='me-2 h-4 w-4' />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  )
}

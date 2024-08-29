'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, LucideProps } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { CSSProperties, PropsWithChildren, useCallback } from 'react'

import { useSidebar, useSidebarMenu } from '@mantul/app/[locale]/(admin)/components/use-sidebar'
import { Drawer, DrawerContent } from '@mantul/components/ui/drawer'
import { Link } from '@mantul/components/ui/link'
import { ScrollArea } from '@mantul/components/ui/scroll-area'
import { Separator } from '@mantul/components/ui/separator'
import { useMediaQuery } from '@mantul/hooks/use-media-query'
import { useToggle } from '@mantul/hooks/use-toggle'
import { cn } from '@mantul/libs/utils'

export interface SidebarProps {
  className?: string
}

interface SidebarMenuItemProps {
  title: string
  href?: string
  Icon?: React.FC<LucideProps>
  depth?: number
  menus?: SidebarMenuItemProps[]
}

const subMenuTransition = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
}

export const SidebarMenuItem = (menu: SidebarMenuItemProps) => {
  const [isExpanded, toggle] = useToggle(false)
  const { isExpanded: isSidebarExpanded, expand } = useSidebar()
  const depth = menu.depth || 0
  const isSubMenuExpanded = menu.menus?.length && isExpanded && isSidebarExpanded
  const pathname = usePathname()
  const isActive = useCallback(
    (href: string | undefined) => href && pathname.startsWith(href) && href !== '/',
    [pathname],
  )

  const LinkItem = React.useCallback(
    ({ children }: PropsWithChildren) => {
      // Menu item with children
      if (menu.menus?.length) {
        return (
          <div
            className={cn(
              'flex cursor-pointer items-center gap-2 overflow-hidden rounded-md bg-background p-3 font-semibold transition-all duration-500 hover:bg-primary/5',
              isActive(menu.href) && 'bg-primary/15 font-bold text-primary/80 hover:bg-primary/15',
            )}
            onClick={isSidebarExpanded ? toggle : expand}>
            {children}
          </div>
        )
      }

      if (!menu.href) {
        if (!isSidebarExpanded) {
          return (
            <div className='px-2'>
              <Separator />
            </div>
          )
        }

        // Separator
        return (
          <span
            className={
              'text-nowrap bg-background p-3 text-sm text-muted-foreground transition-all'
            }>
            {menu.title}
          </span>
        )
      }

      // Menu item with link
      return (
        <Link
          href={menu.href}
          className={cn(
            'flex cursor-pointer items-center gap-2 overflow-hidden rounded-md bg-background p-3 font-semibold transition-all duration-500 hover:bg-primary/5',
            menu.href === pathname && 'bg-primary/15 font-bold text-primary/80 hover:bg-primary/15',
          )}>
          {children}
        </Link>
      )
    },
    [
      toggle,
      expand,
      isActive,
      isSidebarExpanded,
      menu.href,
      menu.menus?.length,
      menu.title,
      pathname,
    ],
  )

  return (
    <div className='flex flex-col gap-2 overflow-hidden'>
      <LinkItem>
        {menu.Icon && (
          <menu.Icon
            style={{ '--depth': `${depth * 12}px` } as CSSProperties}
            className='me-[var(--depth)] size-5 shrink-0'
          />
        )}
        {isSidebarExpanded && (
          <span className={cn('flex-1 overflow-hidden text-ellipsis text-nowrap text-start')}>
            {menu.title}
          </span>
        )}
        {menu.menus?.length && isSidebarExpanded && (
          <ChevronRightIcon
            className={cn(
              'size-4 transition-all duration-500 rtl:rotate-180',
              isSubMenuExpanded && 'rotate-90 rtl:rotate-90',
            )}
          />
        )}
      </LinkItem>
      <AnimatePresence>
        <motion.div
          key={menu.href}
          initial='hidden'
          variants={subMenuTransition}
          animate={isSubMenuExpanded ? 'visible' : 'hidden'}
          className={cn(!isSidebarExpanded && 'hidden')}>
          {menu?.menus?.map((menu) => (
            <SidebarMenuItem key={menu.href} {...menu} depth={depth + 1} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export const SidebarContent = () => {
  const { isExpanded, toggle } = useSidebar()
  const menus = useSidebarMenu()

  return (
    <div className='overflow-hidden'>
      <div className={cn('flex h-16 items-center gap-2 px-4')}>
        <Image
          src='/mantul.svg'
          width={32}
          height={32}
          alt='Mantul'
          priority
          className='h-8 w-8 shrink-0'
        />
        {isExpanded && <span className='text-xl font-semibold'>Mantul</span>}
      </div>
      <button
        onClick={toggle}
        className='absolute -end-3 top-5 flex size-6 items-center justify-center rounded-full border border-border bg-background'>
        <ChevronLeftIcon
          className={cn('size-4 transition-all duration-500', isExpanded && 'rotate-180')}
        />
        <span className='sr-only'>Toggle sidebar</span>
      </button>
      <ScrollArea className='h-full px-2 pb-20'>
        <div className='flex flex-col justify-start gap-1 text-sm'>
          {menus.map((menu, index) => (
            <SidebarMenuItem key={index} {...menu} />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export const SidebarMobile = ({ className }: SidebarProps) => {
  const { isExpanded } = useSidebar()
  const isDesktopDevice = useMediaQuery('only screen and (min-width : 768px)')

  return (
    !isDesktopDevice && (
      <Drawer open={isExpanded} direction='left'>
        <DrawerContent
          className={cn(
            'start-0 top-0 mt-0 w-64 rounded-e-md rounded-t-none rounded-ee-sm',
            className,
          )}>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
    )
  )
}

export const SidebarDesktop = ({ className }: SidebarProps) => {
  const { isExpanded } = useSidebar()

  return (
    <aside
      className={cn(
        'relative hidden h-screen w-64 flex-col border-e border-border bg-background transition-all duration-200 md:flex',
        !isExpanded && 'w-16',
        className,
      )}>
      <SidebarContent />
    </aside>
  )
}

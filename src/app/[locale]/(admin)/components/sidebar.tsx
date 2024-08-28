'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  BookOpenIcon,
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleAlertIcon,
  DotIcon,
  FingerprintIcon,
  HeartHandshakeIcon,
  HomeIcon,
  LayoutPanelLeftIcon,
  LockIcon,
  MailIcon,
  MapIcon,
  MessagesSquareIcon,
  PieChartIcon,
  SquareKanbanIcon,
} from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren, useCallback } from 'react'
import { create } from 'zustand'

import { Drawer, DrawerContent } from '@mantul/components/ui/drawer'
import { Link } from '@mantul/components/ui/link'
import { ScrollArea } from '@mantul/components/ui/scroll-area'
import { Separator } from '@mantul/components/ui/separator'
import { useMediaQuery } from '@mantul/hooks/use-media-query'
import { useToggle } from '@mantul/hooks/use-toggle'
import { cn } from '@mantul/libs/utils'

export const SidebarMenu = {}

interface SidebarStore {
  isExpanded: boolean
  toggle: () => void
  expand: () => void
  collapse: () => void
}

export const useSidebar = create<SidebarStore>((set) => ({
  isExpanded: true,
  toggle: () => set((state) => ({ isExpanded: !state.isExpanded })),
  expand: () => set(() => ({ isExpanded: true })),
  collapse: () => set(() => ({ isExpanded: false })),
}))

export interface SidebarProps {
  className?: string
}

const menus: SidebarMenuItemProps[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    Icon: PieChartIcon,
    menus: [
      {
        title: 'Analytic',
        href: '/dashboard',
        Icon: DotIcon,
      },
      {
        title: 'CRM',
        href: '/crm',
        Icon: DotIcon,
      },
      {
        title: 'eCommerce',
        href: '/ecommerce',
        Icon: DotIcon,
      },
      {
        title: 'Logistic',
        href: '/academy',
        Icon: DotIcon,
      },
    ],
  },
  {
    title: 'Front Pages',
    href: '/',
    Icon: HomeIcon,
    menus: [
      {
        title: 'Landing',
        href: '/',
        Icon: DotIcon,
      },
      {
        title: 'Pricing',
        href: '/pricing',
        Icon: DotIcon,
      },
      {
        title: 'Payment',
        href: '/payment',
        Icon: DotIcon,
      },
    ],
  },
  {
    title: 'Layout',
    href: '/layout',
    Icon: LayoutPanelLeftIcon,
  },
  { title: 'Apps and Pages' },
  {
    title: 'Email',
    href: '/email',
    Icon: MailIcon,
  },
  {
    title: 'Chat',
    href: '/chat',
    Icon: MessagesSquareIcon,
  },
  {
    title: 'Kanban',
    href: '/kanban',
    Icon: SquareKanbanIcon,
  },
  {
    title: 'Maps',
    href: '/map',
    Icon: MapIcon,
  },
  {
    title: 'Calendar',
    href: '/calendar',
    Icon: CalendarIcon,
  },
  {
    title: 'Authentication',
    href: '/auth',
    Icon: LockIcon,
    menus: [
      {
        title: 'Sign up',
        href: '/auth/signup',
        Icon: DotIcon,
      },
      {
        title: 'Sign in',
        href: '/auth/signin',
        Icon: DotIcon,
      },
    ],
  },
  {
    title: 'Errors',
    href: '/error',
    Icon: CircleAlertIcon,
    menus: [
      {
        title: '403 Forbidden',
        href: '/error/403',
        Icon: DotIcon,
      },
      {
        title: '404 Not Found',
        href: '/error/404',
        Icon: DotIcon,
      },
      {
        title: '500 Server Error',
        href: '/error/500',
        Icon: DotIcon,
      },
    ],
  },
  { title: 'Others' },
  {
    title: 'Documentation',
    href: '/documentation',
    Icon: BookOpenIcon,
  },
  {
    title: 'Support',
    href: '/support',
    Icon: HeartHandshakeIcon,
  },
]

interface SidebarMenuItemProps {
  title: string
  href?: string
  Icon?: typeof DotIcon
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
              'flex cursor-pointer items-center space-x-2 overflow-hidden rounded-md bg-background p-3 font-semibold transition-all duration-500 hover:bg-primary/5 rtl:flex-row-reverse',
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
            'flex cursor-pointer items-center space-x-2 overflow-hidden rounded-md bg-background p-3 font-semibold transition-all duration-500 hover:bg-primary/5 rtl:flex-row-reverse',
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
    <div className='flex flex-col space-y-2 overflow-hidden'>
      <LinkItem>
        <div className='flex'>
          {menu.Icon && (
            <menu.Icon style={{ marginInlineEnd: depth * 12 }} className='size-5 shrink-0' />
          )}
        </div>
        {isSidebarExpanded && (
          <span className={cn('flex-1 overflow-hidden text-ellipsis text-nowrap')}>
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

  return (
    <div className='overflow-hidden'>
      <div className={cn('flex h-16 items-center space-x-2 px-4')}>
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
        <div className='flex flex-col justify-start space-y-1 text-sm'>
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

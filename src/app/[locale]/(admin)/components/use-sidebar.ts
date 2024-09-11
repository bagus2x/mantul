import {
  BookOpenIcon,
  CalendarIcon,
  CircleAlertIcon,
  DotIcon,
  HeartHandshakeIcon,
  HomeIcon,
  LockIcon,
  LucideProps,
  MailIcon,
  MapIcon,
  MessagesSquareIcon,
  NotebookPenIcon,
  PieChartIcon,
  PuzzleIcon,
  SquareKanbanIcon,
} from 'lucide-react'
import React from 'react'
import { create } from 'zustand'

import { useI18n } from '@mantul/locales/client'

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

interface Menu {
  title: string
  href?: string
  Icon?: React.FC<LucideProps>
  menus?: Menu[]
}

export const useSidebarMenu = () => {
  const t = useI18n()

  const menus: Menu[] = [
    {
      title: t('admin.layout.sidebar.dashboard'),
      href: '/dashboard',
      Icon: PieChartIcon,
      menus: [
        {
          title: t('admin.layout.sidebar.dashboard.analytic'),
          href: '/dashboard',
          Icon: DotIcon,
        },
      ],
    },
    {
      title: t('admin.layout.sidebar.frontPages'),
      href: '/',
      Icon: HomeIcon,
      menus: [
        {
          title: t('admin.layout.sidebar.frontPages.landing'),
          href: '/',
          Icon: DotIcon,
        },
        {
          title: t('admin.layout.sidebar.frontPages.pricing'),
          href: '/pricing',
          Icon: DotIcon,
        },
        {
          title: t('admin.layout.sidebar.frontPages.payment'),
          href: '/payment',
          Icon: DotIcon,
        },
      ],
    },
    { title: t('admin.layout.sidebar.appsAndPages') },
    {
      title: t('admin.layout.sidebar.email'),
      href: '/email',
      Icon: MailIcon,
    },
    {
      title: t('admin.layout.sidebar.chat'),
      href: '/chat',
      Icon: MessagesSquareIcon,
    },
    {
      title: t('admin.layout.sidebar.kanban'),
      href: '/kanban',
      Icon: SquareKanbanIcon,
    },
    {
      title: t('admin.layout.sidebar.maps'),
      href: '/map',
      Icon: MapIcon,
    },
    {
      title: t('admin.layout.sidebar.calendar'),
      href: '/calendar',
      Icon: CalendarIcon,
    },
    {
      title: t('admin.layout.sidebar.authentication'),
      href: '/auth',
      Icon: LockIcon,
      menus: [
        {
          title: t('admin.layout.sidebar.authentication.signup'),
          href: '/auth/signup',
          Icon: DotIcon,
        },
        {
          title: t('admin.layout.sidebar.authentication.signin'),
          href: '/auth/signin',
          Icon: DotIcon,
        },
      ],
    },
    {
      title: t('admin.layout.sidebar.errors'),
      href: '/error',
      Icon: CircleAlertIcon,
      menus: [
        {
          title: t('admin.layout.sidebar.errors.403'),
          href: '/error/403',
          Icon: DotIcon,
        },
        {
          title: t('admin.layout.sidebar.errors.404'),
          href: '/error/404',
          Icon: DotIcon,
        },
        {
          title: t('admin.layout.sidebar.errors.500'),
          href: '/error/500',
          Icon: DotIcon,
        },
      ],
    },
    { title: t('admin.layout.sidebar.extras') },
    {
      title: t('admin.layout.sidebar.extras.wysiwyg'),
      href: '/extras/wysiwyg',
      Icon: NotebookPenIcon,
    },
    {
      title: t('admin.layout.sidebar.extras.ui'),
      href: '/extras/ui',
      Icon: PuzzleIcon,
    },
    { title: t('admin.layout.sidebar.others') },
    {
      title: t('admin.layout.sidebar.documentation'),
      href: '/documentation',
      Icon: BookOpenIcon,
    },
    {
      title: t('admin.layout.sidebar.support'),
      href: '/support',
      Icon: HeartHandshakeIcon,
    },
  ]

  return menus
}

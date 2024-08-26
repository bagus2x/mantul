import { PropsWithChildren } from 'react'

import { Navbar } from '@mantul/app/(admin)/components/navbar'
import { SidebarDesktop, SidebarMobile } from '@mantul/app/(admin)/components/sidebar'
import { Footer } from '@mantul/app/(admin)/components/footer'

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-screen bg-gray-50 dark:bg-background'>
      <SidebarDesktop className='sticky left-0 top-0 z-40' />
      <SidebarMobile />
      <div className='flex min-h-[calc(100%-64px)] min-w-0 flex-1 flex-col'>
        <Navbar className='sticky right-0 top-0 z-30' />
        <div className='flex-1'>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

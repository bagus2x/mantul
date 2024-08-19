import { PropsWithChildren } from 'react'

import { Navbar } from '@mantul/app/(admin)/components/navbar'
import { SidebarDesktop, SidebarMobile } from '@mantul/app/(admin)/components/sidebar'

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <SidebarDesktop className='sticky left-0 top-0 z-40' />
      <SidebarMobile />
      <div className='min-w-0 flex-1'>
        <Navbar className='sticky right-0 top-0 z-30' />
        {children}
      </div>
    </div>
  )
}

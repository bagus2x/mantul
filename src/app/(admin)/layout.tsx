import { PropsWithChildren } from 'react'

import { Navbar } from '@mantul/component/admin/navbar'
import { SidebarDesktop, SidebarMobile } from '@mantul/component/admin/sidebar'

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <SidebarDesktop className='sticky left-0 top-0 z-40' />
      <SidebarMobile />
      <div className='flex-1'>
        <Navbar className='sticky right-0 top-0 z-30' />
        {children}
      </div>
    </div>
  )
}

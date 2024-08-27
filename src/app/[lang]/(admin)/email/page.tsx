import { cookies } from 'next/headers'

import { Email } from '@mantul/app/[lang]/(admin)/email/components/email'
import { accounts, mails } from '@mantul/app/[lang]/(admin)/email/data'
import { Card } from '@mantul/components/ui/card'

export default function EmailPage() {
  const layout = cookies().get('react-resizable-panels:layout:mail')
  const collapsed = cookies().get('react-resizable-panels:collapsed')

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <main className='mx-auto flex max-w-screen-2xl flex-col px-4 py-4'>
      <Email
        accounts={accounts}
        mails={mails}
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </main>
  )
}

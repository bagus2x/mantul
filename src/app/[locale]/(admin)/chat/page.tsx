import { Chat } from '@mantul/app/[locale]/(admin)/chat/components/chat'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chat',
}

export default function ChatPage() {
  return (
    <main className='mx-auto flex max-w-screen-2xl flex-col p-4'>
      <Chat />
    </main>
  )
}

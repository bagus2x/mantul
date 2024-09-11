import { KanbanBoard } from '@mantul/app/[locale]/(admin)/kanban/components/kanban-board'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kanban',
}

export default function KanbanPage() {
  return (
    <main className='overflow-x-auto p-4'>
      <KanbanBoard className='mx-auto w-fit min-w-[calc(1536px-32px)]' />
    </main>
  )
}

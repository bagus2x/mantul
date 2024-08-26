import { KanbanBoard } from '@mantul/app/(admin)/kanban/components/kanban-board'

export default function KanbanPage() {
  return (
    <main className='overflow-x-auto p-4'>
      <KanbanBoard className='mx-auto w-fit min-w-[calc(1536px-32px)]' />
    </main>
  )
}

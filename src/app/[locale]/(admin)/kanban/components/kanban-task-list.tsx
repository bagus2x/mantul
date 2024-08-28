import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, PlusIcon } from 'lucide-react'

import { useTasks } from '@mantul/app/[locale]/(admin)/kanban/components/use-task'
import { Card, CardContent, CardHeader } from '@mantul/components/ui/card'
import { cn } from '@mantul/libs/utils'
import { TaskList } from '@mantul/models/task'
import { KanbanTaskItem } from '@mantul/app/[locale]/(admin)/kanban/components/kanban-task-item'
import { useMemo } from 'react'
import { useTaskLists } from '@mantul/app/[locale]/(admin)/kanban/components/use-task-list'
import { Button } from '@mantul/components/ui/button'

export interface KanbanTaskListProps {
  taskList: TaskList
  active?: boolean
  className?: string
}

export const KanbanTaskList = ({ taskList, active, className }: KanbanTaskListProps) => {
  const { activeTaskList } = useTaskLists()
  const tasks = useTasks((state) => state.tasks.filter((task) => task.taskListId === taskList.id))
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: `task_list-${taskList.id}`,
    data: {
      taskList,
      type: 'task_list',
    },
  })
  const ids = useMemo(() => tasks.map(({ id }) => `task-${id}`), [tasks])
  const isOverTaskList = activeTaskList?.id === taskList.id && active

  const styles = {
    transform: CSS.Translate.toString(transform),
    transition,
  }

  return (
    <Card
      className={cn(
        'w-80 shrink-0 bg-gray-50 dark:bg-card/50',
        isOverTaskList && 'opacity-50 ring-1 ring-primary',
        className,
      )}
      ref={setNodeRef}
      style={styles}>
      <CardHeader className={cn(isOverTaskList && 'opacity-0')}>
        <div className='flex gap-2'>
          <button {...attributes} {...listeners}>
            <GripVertical className='size-5 hover:opacity-100 md:opacity-50' />
          </button>
          <input
            onChange={() => {}}
            value={taskList.title}
            className='bg-transparent font-semibold outline-none'
          />
        </div>
      </CardHeader>
      <CardContent className={cn('flex flex-col gap-4', isOverTaskList && 'opacity-0')}>
        <SortableContext id={`task_list-${taskList.id}`} items={ids}>
          {tasks.map((task) => (
            <KanbanTaskItem key={task.id} task={task} taskList={taskList} over />
          ))}
        </SortableContext>
        <Button variant='outline'>
          <PlusIcon className='mr-4' />
          Add new task
        </Button>
      </CardContent>
    </Card>
  )
}

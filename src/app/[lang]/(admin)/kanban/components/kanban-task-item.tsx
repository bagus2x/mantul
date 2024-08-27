'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { MoreVerticalIcon } from 'lucide-react'

import { KanbanTaskLabel } from '@mantul/app/[lang]/(admin)/kanban/components/kanban-task-label'
import { useTasks } from '@mantul/app/[lang]/(admin)/kanban/components/use-task'
import { Card, CardContent, CardHeader, CardTitle } from '@mantul/components/ui/card'
import { cn } from '@mantul/libs/utils'
import { Task, TaskList } from '@mantul/models/task'

export interface KanbanTaskItemProps {
  task: Task
  taskList?: TaskList
  over?: boolean
  className?: string
}

export const KanbanTaskItem = ({ task, taskList, over, className }: KanbanTaskItemProps) => {
  const { activeTask } = useTasks()
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: `task-${task.id}`,
    data: {
      task,
      taskList,
      type: 'task',
    },
  })
  const isOverTask = activeTask?.id === task.id && over

  const styles = {
    transform: CSS.Translate.toString(transform),
    transition,
  }

  return (
    <Card
      className={cn(
        'w-full overflow-hidden',
        isOverTask && 'opacity-50 ring-1 ring-primary',
        className,
      )}
      ref={setNodeRef}
      style={styles}
      {...attributes}
      {...listeners}>
      <CardHeader className={cn(isOverTask && 'opacity-0')}>
        <div className='flex justify-between'>
          <CardTitle className='text-sm'>{task.title}</CardTitle>
          <button>
            <MoreVerticalIcon className='size-4' />
          </button>
        </div>
      </CardHeader>
      <CardContent className={cn(isOverTask && 'opacity-0')}>
        <div className='flex gap-2'>
          {task.labels.map((label) => (
            <KanbanTaskLabel expandable={task.labels.length > 1} key={label.id} label={label} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

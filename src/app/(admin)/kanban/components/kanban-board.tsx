'use client'

import { useMemo } from 'react'

import { DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import { KanbanTaskItem } from '@mantul/app/(admin)/kanban/components/kanban-task-item'
import { KanbanTaskList } from '@mantul/app/(admin)/kanban/components/kanban-task-list'
import { useTasks } from '@mantul/app/(admin)/kanban/components/use-task'
import { useTaskLists } from '@mantul/app/(admin)/kanban/components/use-task-list'
import { cn } from '@mantul/libs/utils'
import { Task, TaskList } from '@mantul/models/task'
import { Button } from '@mantul/components/ui/button'

export interface KanbanBoardProps {
  className?: string
}

export const KanbanBoard = ({ className }: KanbanBoardProps) => {
  const { taskLists, setTaskLists, activeTaskList, setActiveTaskList } = useTaskLists()
  const { tasks, setTasks, activeTask, setActiveTask } = useTasks()
  const ids = useMemo(() => taskLists.map(({ id }) => `task_list-${id}`), [taskLists])

  const handleDragStart = (ev: DragStartEvent) => {
    const { active } = ev
    const isActiveTaskList = active.data.current?.type === 'task_list'
    const isActiveTask = active.data.current?.type === 'task'
    if (isActiveTaskList) setActiveTaskList(ev.active.data.current?.taskList || null)
    if (isActiveTask) setActiveTask(ev.active.data.current?.task || null)
  }

  const handleDragEnd = (_ev: DragEndEvent) => {
    setActiveTaskList(null)
    setActiveTask(null)
  }

  const handleDragOver = (ev: DragOverEvent) => {
    const { active, over } = ev

    if (over && active.id !== over.id) {
      const activeTaskList = active.data.current?.taskList as TaskList | undefined
      const overTaskList = over.data.current?.taskList as TaskList | undefined
      const activeTask = active.data.current?.task as Task | undefined
      const overTask = over.data.current?.task as Task | undefined
      const isActiveTask = active.data.current?.type === 'task'
      const isActiveTaskList = active.data.current?.type === 'task_list'
      const isOverTask = over.data.current?.type === 'task'
      const isOverTaskList = over.data.current?.type === 'task_list'

      // Update task list order
      if (activeTaskList && overTaskList && isActiveTaskList) {
        const from = taskLists.findIndex((taskList) => taskList.id === activeTaskList.id)
        const to = taskLists.findIndex((taskList) => taskList.id === overTaskList.id)

        setTaskLists(arrayMove(taskLists, from, to))
      }

      // Update task order
      if (activeTask && overTask && isActiveTask && isOverTask) {
        const from = tasks.findIndex((task) => task.id === activeTask.id)
        const to = tasks.findIndex((task) => task.id === overTask.id)

        if (activeTask.taskListId !== overTask.taskListId) {
          const newTasks = [...tasks]
          newTasks[from].taskListId = newTasks[to].taskListId
          const newActiveTask = newTasks[from]
          newTasks.splice(from, 1)
          newTasks.splice(to > 0 ? to - 1 : to, 0, newActiveTask)
          setTasks(newTasks)
        } else {
          setTasks(arrayMove(tasks, from, to))
        }
      }

      // Move task to empty task list
      if (isActiveTask && isOverTaskList && activeTask && overTaskList) {
        setTasks(
          tasks.map((task) =>
            task.id === activeTask.id ? { ...task, taskListId: overTaskList.id } : task,
          ),
        )
      }
    }
  }

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragOver={handleDragOver}>
      <section className={cn('flex items-start gap-4', className)}>
        <SortableContext id='task_list' items={ids}>
          {taskLists.map((taskList) => (
            <KanbanTaskList key={taskList.id} taskList={taskList} active />
          ))}
        </SortableContext>
        <Button variant='outline' className='w-80'>
          Add List
        </Button>
      </section>
      <DragOverlay>
        {activeTask ? <KanbanTaskItem task={activeTask} /> : null}
        {activeTaskList ? <KanbanTaskList taskList={activeTaskList} /> : null}
      </DragOverlay>
    </DndContext>
  )
}

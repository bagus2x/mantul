import { create } from 'zustand'

import { TaskList } from '@mantul/models/task'

export const taskLists: TaskList[] = [
  {
    id: 1,
    title: 'Development',
  },
  {
    id: 2,
    title: 'Design',
  },
  {
    id: 3,
    title: 'Marketing',
  },
]

export interface TaskState {
  taskLists: TaskList[]
  activeTaskList: TaskList | null
}

export interface TaskAction {
  setTaskLists(tasks: TaskList[]): void
  setActiveTaskList: (taskList: TaskList | null) => void
}

export const useTaskLists = create<TaskState & TaskAction>((set) => ({
  taskLists: taskLists,
  activeTaskList: null,
  setTaskLists: (taskLists) => {
    set((state) => ({ ...state, taskLists: taskLists }))
  },
  setActiveTaskList: (taskList) => {
    set((state) => ({ ...state, activeTaskList: taskList }))
  },
}))

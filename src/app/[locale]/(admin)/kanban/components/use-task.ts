import { create } from 'zustand'

import { Label, Task } from '@mantul/models/task'

export const labels: Label[] = [
  {
    id: 1,
    name: 'Urgent',
    color: '#EF4444', // Tailwind red-500
  },
  {
    id: 2,
    name: 'Bug',
    color: '#F97316', // Tailwind orange-500
  },
  {
    id: 3,
    name: 'Feature',
    color: '#22C55E', // Tailwind green-500
  },
  {
    id: 4,
    name: 'Improvement',
    color: '#3B82F6', // Tailwind blue-500
  },
]

export const tasks: Task[] = [
  {
    id: 101,
    taskListId: 1,
    title: 'Implement authentication',
    description: 'Develop and integrate authentication module',
    assignee: [
      {
        id: 1,
        name: 'John Doe',
        photo: null,
      },
      {
        id: 2,
        name: 'Jane Smith',
        photo: null,
      },
    ],
    labels: [labels[0], labels[2]], // Urgent, Feature
  },
  {
    id: 102,
    taskListId: 1,
    title: 'Set up database',
    description: 'Design and create the initial database schema',
    assignee: [
      {
        id: 3,
        name: 'Alice Johnson',
        photo: null,
      },
    ],
    labels: [labels[2]], // Feature
  },
  {
    id: 103,
    taskListId: 2,
    title: 'Create wireframes',
    description: 'Design wireframes for the main user flows',
    assignee: [
      {
        id: 4,
        name: 'Bob Brown',
        photo: null,
      },
      {
        id: 5,
        name: 'Charlie Davis',
        photo: null,
      },
    ],
    labels: [labels[3]], // Improvement
  },
  {
    id: 104,
    taskListId: 3,
    title: 'Develop marketing strategy',
    description: 'Plan and develop the marketing strategy for product launch',
    assignee: [
      {
        id: 6,
        name: 'Diana Miller',
        photo: null,
      },
    ],
    labels: [labels[1]], // Bug
  },
]

export interface TaskState {
  tasks: Task[]
  activeTask: Task | null
}

export interface TaskAction {
  setTasks(tasks: Task[]): void
  setActiveTask(task: Task | null): void
}

export const useTasks = create<TaskState & TaskAction>((set) => ({
  tasks: tasks,
  activeTask: null,
  setTasks: (tasks) => {
    set((state) => ({ ...state, tasks }))
  },
  setActiveTask: (task) => {
    set((state) => ({ ...state, activeTask: task }))
  },
}))

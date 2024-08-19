export interface Label {
  id: number
  name: string
  color: string // hex
}

export interface Task {
  id: number
  taskListId: number
  title: string
  description: string
  assignee: {
    id: number
    name: string
    photo?: string | null
  }[]
  labels: Label[]
}

export interface TaskList {
  id: number
  title: string
}

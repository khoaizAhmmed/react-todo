export type TodoType = {
  id: string
  name: string
  checked: boolean
  isEdit: boolean
}
export type TodoItemType = {
  todo: TodoType
  editTodo: (id: string) => void
  deleteTodo: (id: string) => void
  toggleTodoCompleted: (id: string) => void
}

export type TodoWrapperType = {
  todo: TodoType
  editTodo: (id: string) => void
  deleteTodo: (id: string) => void
  toggleTodoCompleted: () => void
  saveEdit: (name: string, id: string) => void
}

export type EditTodoFormType = {
  saveEdit: (name: string, id: string) => void
  todo: TodoType
}
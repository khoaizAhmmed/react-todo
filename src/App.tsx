import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { FormEvent, useEffect, useState } from 'react'
import TodoWrapper from './TodoWrapper'
import { TodoType } from './Todos'

function localTodoValue() {
  const localTodo = localStorage.getItem('#todo')
  if (localTodo) {
    return JSON.parse(localTodo)
  }
  return []
}

export default function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState<TodoType[]>(localTodoValue())

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (newItem === '') return
    setTodos((prevTodo: TodoType[]) => {
      return [...prevTodo, { id: crypto.randomUUID(), name: newItem, checked: false, isEdit: false }]
    })
    setNewItem('')
  }

  const toggleTodoCompleted = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (id: string) => {
    const currentTodos = todos.filter((todo) => id !== todo.id)
    setTodos(currentTodos)
  }
  const editTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEdit: !todo.isEdit }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const saveEdit = (name: string, id: string) => {
    if (name === '') return
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, name: name, isEdit: false }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  useEffect(() => {
    localStorage.setItem('#todo', JSON.stringify(todos))
  }, [todos])

  return (
    <Flex justifyContent={'center'}>
      <Box
        width={500}
        p={'20px'}
        margin={4}
        border={'1px solid '}
        background="#FFFFFF"
        borderRadius={'20px'}
        height={'90vh'}
      >
        <Text fontSize="xl" as="b">
          Todo List
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex gap={2}>
            <Input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
            <Button type="submit" colorScheme="green">
              Add
            </Button>
          </Flex>
        </form>

        {todos.map((todo, i) => (
          <TodoWrapper
            key={`${i + 9}-todo`}
            todo={todo}
            toggleTodoCompleted={() => toggleTodoCompleted(todo.id)}
            editTodo={() => editTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            saveEdit={saveEdit}
          />
        ))}
      </Box>
    </Flex>
  )
}

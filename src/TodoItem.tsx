import { Button, Checkbox, Text } from '@chakra-ui/react'
import { TodoItemType } from './Todos'

export default function TodoItem({ todo, toggleTodoCompleted, editTodo, deleteTodo }: TodoItemType) {
  const { id, name, checked } = todo
  return (
    <>
      <Checkbox onChange={() => toggleTodoCompleted(id)} defaultChecked={checked}>
        <Text width={320}>{name}</Text>
      </Checkbox>
      <Button size={'sm'} onClick={() => editTodo(id)} colorScheme="blue">
        Edit
      </Button>
      <Button size={'sm'} onClick={() => deleteTodo(id)} colorScheme="red">
        Delete
      </Button>
    </>
  )
}

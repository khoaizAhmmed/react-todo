import { useState } from 'react'
import { EditTodoFormType } from './Todos'
import { Button, Input } from '@chakra-ui/react'

export default function EditTodoForm({ saveEdit, todo }: EditTodoFormType) {
  const [newValue, setNewValue] = useState(todo.name)

  return (
    <>
      <Input width={320} onChange={(e) => setNewValue(e.target.value)} value={newValue} />

      <Button size={'sm'} onClick={() => saveEdit(todo.name, todo.id)} colorScheme="blue">
        Cancel
      </Button>
      <Button size={'sm'} onClick={() => saveEdit(newValue, todo.id)} colorScheme="red">
        Save
      </Button>
    </>
  )
}

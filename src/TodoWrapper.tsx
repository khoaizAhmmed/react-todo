import { Box, Flex } from "@chakra-ui/react";
import { TodoWrapperType } from "./Todos";
import TodoItem from "./TodoItem";
import EditTodoForm from "./EditForm";

export default function TodoWrapper  ({ todo, toggleTodoCompleted, editTodo, deleteTodo, saveEdit }: TodoWrapperType) {
  return (
    <Box>
      <Flex gap={2} py={3}>
        {todo.isEdit ? (
          <EditTodoForm saveEdit={saveEdit} todo={todo} />
        ) : (
          <TodoItem todo={todo} toggleTodoCompleted={toggleTodoCompleted} editTodo={editTodo} deleteTodo={deleteTodo} />
        )}
      </Flex>
    </Box>
  )
}

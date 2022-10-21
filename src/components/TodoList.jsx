import React from "react";
import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="5" rounded="lg" fontSize="lg" m="5">
        No Todos!
      </Badge>
    );
  }
  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.200"
      borderWidth="2px"
      p="10"
      borderRadius="md"
      w="100%"
      alignItems="stretch"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
    >
      {todos.map((todo) => (
        <HStack key={todo.id} py="3">
          <Text fontSize="xl">{`• ${todo.body}`}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound={true}
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;

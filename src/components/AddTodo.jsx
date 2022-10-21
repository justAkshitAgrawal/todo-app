import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React from "react";
import { nanoid } from "nanoid";

import { useState } from "react";

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo) {
      toast({
        title: "Todo cannot be empty!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const temp = {
      id: nanoid(),
      body: todo,
    };
    addTodo && addTodo(temp);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="10">
        <Input
          variant="filled"
          placeholder="What do you want to do?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          fontSize="xl"
        />
        <Button colorScheme="pink" px="8" type="submit" fontSize="xl">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;

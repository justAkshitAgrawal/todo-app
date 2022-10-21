import {
  Heading,
  VStack,
  IconButton,
  ColorModeScript,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { useState, useEffect } from "react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const initialTodos = [
    { id: 1, body: "Delete this todo and add more to get started" },
  ];

  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : initialTodos
  );

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <ColorModeScript initialColorMode="light" />
      <VStack p={10}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Heading
          pb="10"
          fontWeight="extrabold"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          size="2xl"
          bgClip="text"
        >
          2-Do-ist
        </Heading>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </VStack>
    </div>
  );
}

export default App;

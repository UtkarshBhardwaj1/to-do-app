import React, { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/todoApi";
import TodoItem from "./TodoItem";
import { Box, TextField, Button, List } from "@mui/material"; // Material UI components

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  // Fetch todos when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        setTodos(response.data); // Use response.data to get the list of todos
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // Create a new todo
  const handleCreate = async () => {
    if (!title.trim()) return;
    try {
      const newTodo = await createTodo({ title, completed: false });
      setTodos((prevTodos) => [...prevTodos, newTodo.data]); // Add the new todo to the list
      setTitle(""); // Clear the input field after creating the todo
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  // Toggle the completion status of a todo
  const handleToggle = async (todo: Todo) => {
    try {
      const response = await updateTodo(todo.id!, {
        ...todo,
        completed: !todo.completed,
      });
      const updatedTodo = response.data; // Get the updated todo

      // Update the todo list with the new state
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Delete a todo
  const handleDelete = async (id: number) => {
    try {
      await deleteTodo(id); // Delete the todo from the backend
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Remove it from the state
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <Box>
      <TextField
        label="Enter a task..."
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: "1rem" }}
      />
      <Button
        variant="contained"
        onClick={handleCreate}
        sx={{ marginBottom: "1rem" }}
      >
        Add Todo
      </Button>

      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => handleToggle(todo)}
            onDelete={() => handleDelete(todo.id!)}
          />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;

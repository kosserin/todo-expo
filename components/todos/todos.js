import React, { useState } from "react";

import { View } from "react-native";

import { styles } from "./todos.style";
import TodoForm from "../todo-form/todo-form";
import TodoList from "../todo-list/todo-list";

const DUMMY_TODOS = [
  {
    id: 1,
    title: "Go to the gym",
    isChecked: false,
  },
  {
    id: 2,
    title: "Go to the school",
    isChecked: false,
  },
  {
    id: 3,
    title: "Visit grandma",
    isChecked: false,
  },
  {
    id: 4,
    title: "Call the mobile operater",
    isChecked: false,
  },
  {
    id: 5,
    title: "Prepare meals",
    isChecked: false,
  },
  {
    id: 6,
    title: "Go to the church",
    isChecked: true,
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(DUMMY_TODOS);

  const addTodo = (todoTitle) => {
    const newTodo = {
      title: todoTitle,
      id: todos.length + 1,
      isChecked: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const toggleCheck = (todoId) => {
    setTodos((prevTodos) => {
      const todos = [...prevTodos];
      const index = todos.findIndex((todo) => {
        return todo.id === todoId;
      });
      todos[index].isChecked = !todos[index].isChecked;
      return todos;
    });
  };

  const removeTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleCheck={toggleCheck}
        removeTodo={removeTodo}
      />
    </View>
  );
};

export default Todos;

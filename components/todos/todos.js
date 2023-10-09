import React, { useState, useEffect } from "react";

import { View } from "react-native";

import { styles } from "./todos.style";
import TodoForm from "../todo-form/todo-form";
import TodoList from "../todo-list/todo-list";
import Filters from "../filters/filters";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  sortByChecked,
  sortByName,
  sortByUnchecked,
} from "../../utils/sorting";

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

  useEffect(() => {
    const assignTodos = async () => {
      const storedTodos = await getTodos();
      setTodos(storedTodos ?? DUMMY_TODOS);
    };

    assignTodos();
  }, []);

  const handleFilterChange = (filterType) => {
    console.log(filterType);
    setTodos((prevTodos) => {
      let sortedTodos = [...prevTodos];
      switch (filterType) {
        default:
        case "name":
          sortedTodos = sortedTodos.sort((a, b) => sortByName(a, b));
          break;
        case "checked":
          sortedTodos = sortedTodos.sort((a, b) => sortByChecked(a, b));
          break;
        case "unchecked":
          sortedTodos = sortedTodos.sort((a, b) => sortByUnchecked(a, b));
          break;
      }

      return sortedTodos;
    });
  };

  const addTodo = (todoTitle) => {
    const newTodo = {
      title: todoTitle,
      id: Date.now() + Math.random(),
      isChecked: false,
    };

    setTodos((prevTodos) => {
      const newTodos = [...prevTodos, newTodo];
      storeTodos(newTodos);

      return newTodos;
    });
  };

  const toggleCheck = (todoId) => {
    setTodos((prevTodos) => {
      const todos = [...prevTodos];
      const index = todos.findIndex((todo) => {
        return todo.id === todoId;
      });
      todos[index].isChecked = !todos[index].isChecked;
      storeTodos(todos);

      return todos;
    });
  };

  const removeTodo = (todoId) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== todoId);
      storeTodos(filteredTodos);

      return filteredTodos;
    });
  };

  const storeTodos = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("todos", jsonValue);
    } catch (e) {
      console.error("Something went wrong with saving todos");
    }
  };

  const getTodos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("todos");

      return JSON.parse(jsonValue);
    } catch (e) {
      console.error("Something went wrong with reading todos");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <TodoForm addTodo={addTodo} />
      <Filters handleFilterChange={handleFilterChange} />
      <TodoList
        todos={todos}
        toggleCheck={toggleCheck}
        removeTodo={removeTodo}
      />
    </View>
  );
};

export default Todos;

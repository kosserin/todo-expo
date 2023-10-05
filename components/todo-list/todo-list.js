import React from "react";
import { Text, View } from "react-native";

import * as todoListStyles from "./todo-list.styles";
import TodoItem from "../todo-item/todo-item";

const TodoList = ({ todos, toggleCheck, removeTodo }) => {
  return (
    <View style={todoListStyles.styles.container}>
      <Text style={todoListStyles.styles.title}>Your todos</Text>
      <View style={todoListStyles.styles.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleCheck={toggleCheck} removeTodo={removeTodo} />
        ))}
      </View>
    </View>
  );
};

export default TodoList;

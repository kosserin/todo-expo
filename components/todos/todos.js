import React from "react";

import { View } from "react-native";

import { styles } from "./todos.style";
import TodoForm from "../todo-form/todo-form";

const Todos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <TodoForm />
    </View>
  );
};

export default Todos;

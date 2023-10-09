import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./todo-form.styles";

const TodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAdd = () => {
    if (todoTitle) {
      addTodo(todoTitle);
      Keyboard.dismiss();
      setTodoTitle("");
    }
  };

  return (
    <View style={styles.formWrapper}>
      <TextInput
        style={styles.search}
        placeholder="Add todo..."
        value={todoTitle}
        onChangeText={(title) => setTodoTitle(title)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleAdd}>
        <AntDesign name="plus" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;

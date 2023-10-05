import React, { useState } from "react";
import { Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import Checkbox from "expo-checkbox";

import { styles } from "./todo-item.styles";

const TodoItem = ({ todo, toggleCheck, removeTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.isChecked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleCheck(todo.id, !isChecked);
  };

  const handleLongpress = (e) => {
    Alert.alert("Confirmation", "Are you sure you want to delete this todo?", [
      {
        text: "Cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          removeTodo(todo.id);
        },
      },
    ]);
  };

  return (
    <TouchableWithoutFeedback onLongPress={handleLongpress}>
      <View style={styles.container}>
        <Text style={styles.title}>{todo.title}</Text>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={handleCheckboxChange}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TodoItem;

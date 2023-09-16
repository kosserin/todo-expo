import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

import { styles } from "./todo-form.styles";

const TodoForm = () => {
  return (
    <View style={styles.formWrapper}>
      <TextInput style={styles.search} placeholder="Add todo..." />
      <TouchableOpacity style={styles.searchButton} onPress={() => alert('a')}>
        <AntDesign name="plus" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;

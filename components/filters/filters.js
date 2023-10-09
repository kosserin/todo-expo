import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";

import { styles } from "./filters.style";

const DUMMY_FILTERS = ["Name", "Checked", "Unchecked"];

const Filters = ({ handleFilterChange }) => {
  const handleChange = (type) => {
    const lowercasedType = type.toLowerCase();
    handleFilterChange(lowercasedType);
  };

  return (
    <FlatList
      data={DUMMY_FILTERS}
      style={styles.filters}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleChange(item)}
          style={styles.filter}
        >
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      horizontal
    ></FlatList>
  );
};

export default Filters;

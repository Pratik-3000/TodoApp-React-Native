import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity
      style={styles.addtodos__container}
      onPress={() => pressHandler(item.key)}
    >
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  addtodos__container: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

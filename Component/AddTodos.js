import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const AddTodos = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.addTodos__input}
        placeholder="Add todos..."
        onChangeText={changeHandler}
      />
      <Button
        title="Add todos"
        color="coral"
        onPress={() => submitHandler(text)}
      />
    </View>
  );
};

export default AddTodos;

const styles = StyleSheet.create({
  addTodos__input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 10,
  },
});

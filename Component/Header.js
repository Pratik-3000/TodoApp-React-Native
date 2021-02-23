import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header__content}>
      <Text style={styles.header__text}>My Todos</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header__content: {
    height: 70,
    backgroundColor: "orange",
    padding: 20,
    alignItems: "center",
  },
  header__text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.listGoals}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItems}
      >
        <Text style={styles.listText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listGoals: {
    borderRadius: 8,
    margin: 8,
    backgroundColor: "purple",
  },
  listText: {
    color: "white",
    padding: 8,
    marginHorizontal: 10
  },
  pressedItems: {
    opacity: 0.5,
  }
});

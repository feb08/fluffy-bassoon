import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.listGoals}>
        <Text style={styles.listText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listGoals: {
    borderRadius: 8,
    padding: 8,
    margin: 8,
    backgroundColor: "purple",
    paddingHorizontal: 20,
  },
  listText: {
    color: "white",
  },
});

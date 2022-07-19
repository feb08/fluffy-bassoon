import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoals, setEnteredGoals] = useState("");

  function inputGoalHandler(enteredText) {
    setEnteredGoals(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoals)
    setEnteredGoals('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="input your goals"
        style={styles.input}
        onChangeText={inputGoalHandler}
        value={enteredGoals}
      />
      <Button title="Add Goals" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    height: 43,
    width: "80%",
    marginRight: 8,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
});

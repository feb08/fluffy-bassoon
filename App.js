import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoals, setEnteredGoals] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  function inputGoalHandler(enteredText) {
    setEnteredGoals(enteredText);
  }
  function addGoalHandler() {
    setCourseGoal((currentCourseGoal) => [...courseGoal, {
      text: enteredGoals, id: Math.random().toString()
    }]);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput placeholder='input your goals' style={styles.input} onChangeText={inputGoalHandler}/>
        <Button title='Add Goals' onPress={addGoalHandler}/>
      </View>
      <View style={styles.listContainer}>
        <FlatList alwaysBounceVertical={false} showsVerticalScrollIndicator={false} data={courseGoal} renderItem={(itemData) => {
          return (<View style={styles.listGoals}><Text style={styles.listText}>{itemData.item.text}</Text></View>)
        }} keyExtractor={(item, index) => {
          return item.id
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  inputContainer: {
    paddingTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    flex: 1
  },
  input: {
    borderWidth: 1,
    height: 43,
    width: '80%',
    marginRight: 8,
    borderRadius: 12,
    paddingHorizontal: 10
  },
  listContainer: {
    flex: 5,
    borderTopWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  listGoals: {
    borderRadius: 8,
    padding: 8,
    margin: 8,
    backgroundColor: 'purple',
    paddingHorizontal: 20
  },
  listText: {
    color: 'white',
  }
});

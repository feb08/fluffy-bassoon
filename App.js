import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  function addGoalHandler(enteredGoals) {
    setCourseGoal((currentCourseGoal) => [...courseGoal, {
      text: enteredGoals, id: Math.random().toString()
    }]);
  }

  function deleteHandler() {
    console.log('Delete');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.listContainer}>
        <FlatList alwaysBounceVertical={false} showsVerticalScrollIndicator={false} data={courseGoal} renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} onDeleteItem={deleteHandler}/>
          )
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
  listContainer: {
    flex: 5,
    borderTopWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
});

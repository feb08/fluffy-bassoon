import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput placeholder='input your goals' style={styles.input}/>
        <Button title='Add Goals'/>
      </View>
      <View style={styles.listContainer}>
        <Text>List Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  }
});

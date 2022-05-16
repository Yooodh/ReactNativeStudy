import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    //setCourseGoals([...courseGoals, enteredGoal])
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput value={enteredGoal} onChangeText={goalInputHandler} style={styles.textInput} placeholder = "Course goal!"/>
        <Button onPress={addGoalHandler} title="ADD" />
      </View>
        <View>

        </View>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    padding : 50
  },
  textInput : {
    borderColor : 'black',
    borderWidth : 1,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'center',
  }
});

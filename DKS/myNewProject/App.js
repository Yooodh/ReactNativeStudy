import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import uuid from 'react-uuid'
import GoalItem from './components/goalItem';
import InputComponent from './components/InputComponent';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState({
    key:'',
    text:''
  })
  const [courseGoals, setCourseGoals] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const goalInputHandler = (enteredText) => {
    setEnteredGoal({
      key: '',
      text: enteredText
    })
  }

  const addGoalHandler = () => {
    const enteredGoalWithKey = {
      key: uuid(),
      text: enteredGoal.text
    }
    //setCourseGoals([...courseGoals, enteredGoal])
    setCourseGoals(currentGoals => [...currentGoals, enteredGoalWithKey])
  }

  const deleteElement = (goalKey) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => {
        return goalKey != goal.key
      })
    })
  }

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Button onPress={openModal} title='Add new goal' />
      <InputComponent
        enteredGoal={enteredGoal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
      <FlatList data={courseGoals} renderItem={(data) => <GoalItem deleteElement={deleteElement.bind(this, data.item.key)} text={data.item.text} />} />
          {/* <ScrollView>
            {courseGoals.map((goal, index) => <View style={styles.goalItem}><Text style={styles.goalText} key={index}>{goal}</Text></View>)}
          </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding : 50
  },
});

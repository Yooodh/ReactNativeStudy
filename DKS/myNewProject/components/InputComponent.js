import react from "react";
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const InputComponent = ({
    enteredGoal,
    goalInputHandler,
    addGoalHandler,
    modalVisible,
    closeModal
}) => {
    return <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.textInputContainer}>
            <TextInput value={enteredGoal.text} onChangeText={goalInputHandler} style={styles.textInput} placeholder = "Course goal!"/>
            <Button onPress={addGoalHandler} title="ADD" />
            <View style={styles.closeButtonStyle}>
                <Button onPress={closeModal} title={"CLOSE"} color="red" />
            </View>
        </View>
    </Modal> 
}

const styles = StyleSheet.create({
    textInput : {
        backgroundColor: '#4267B2',
        width: '80%',
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 7,
        borderRadius: 7,
    },
    textInputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        flex: 1,
    },
    closeButtonStyle: {
        position: 'absolute',
        top: 60
    }
})

export default InputComponent
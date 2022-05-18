import react from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";

const goalItem = (props) => {
    return <TouchableOpacity onPress={props.deleteElement}>
        <View style={styles.goalItem}><Text style={styles.goalText}>{props.text}</Text></View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: 'gray',
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 7,
        borderRadius: 7,
    },
    goalText: {
        color: 'white',
    },
})

export default goalItem
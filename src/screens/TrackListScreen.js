import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

function TrackListScreen({ navigation }) {
    return (
        <View>
            <Text style={styles.text}>Track List Screen</Text>
            <Button title="Go to track details screen" onPress={() => navigation.navigate("TrackDetails")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    }
});

export default TrackListScreen;
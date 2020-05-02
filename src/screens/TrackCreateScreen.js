import React from "react";
import {View, Text, StyleSheet} from "react-native";

function TrackCreateScreen(props) {
    return (
        <View>
            <Text style={styles.text}>Track Create Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    }
});

export default TrackCreateScreen;
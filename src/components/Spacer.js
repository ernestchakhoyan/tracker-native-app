import React from "react";
import {View, StyleSheet} from "react-native";

function Spacer({ children }) {
    return (
        <View style={styles.margin}>{children}</View>
    );
}

const styles = StyleSheet.create({
    margin: {
        margin: 15
    }
})

export default Spacer;
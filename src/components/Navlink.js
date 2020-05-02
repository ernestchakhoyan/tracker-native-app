import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from "react-native";
import Spacer from "./Spacer";
import {withNavigation} from "react-navigation";

function Navlink({ navigation, text, routeName }) {
    return (
        <>
            <Spacer>
                <TouchableOpacity
                    onPress={() => navigation.navigate({ routeName })}
                >
                    <Text style={styles.link}>
                        {text}
                    </Text>
                </TouchableOpacity>
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    link: {
        fontSize: 16,
        color: "#0093c4"
    }
})

export default withNavigation(Navlink);
import React, {
    useContext
} from "react";
import {
    StyleSheet,
    View
} from "react-native";
import {NavigationEvents} from "react-navigation";
import AuthForm from "../components/AuthForm";

import { Context as AuthContext } from "../context/authContext";
import Navlink from "../components/Navlink";

function SignupScreen({ navigation }) {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    const { errorMessage } = state;

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={errorMessage}
                onSubmit={({email, password}) => signup({email, password})}
                submitButtonText="Sign up"
            />
            <Navlink
                text="Already have an account? Sign in instead"
                routeName="Signin"
            />
        </View>
    );
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 200
    },
    text: {
        fontSize: 48
    }
});

export default SignupScreen;
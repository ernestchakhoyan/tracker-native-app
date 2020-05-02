import React, { useContext } from "react";
import {View, StyleSheet} from "react-native";
import {NavigationEvents} from "react-navigation";

import AuthForm from "../components/AuthForm";
import Navlink from "../components/Navlink";
import { Context as AuthContext } from "../context/authContext";

function SigninScreen(props) {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    const { errorMessage } = state;

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign In for Tracker"
                errorMessage={errorMessage}
                onSubmit={({email, password}) => signin({email, password})}
                submitButtonText="Sign in"
            />
            <Navlink
                text="Dont have an account? Sign up instead"
                routeName="Signup"
            />
        </View>
    );
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
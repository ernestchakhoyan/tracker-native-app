import React, { useState } from "react";
import {
    StyleSheet
} from "react-native";
import {
    Button,
    Input,
    Text
} from "react-native-elements";
import Spacer from "./Spacer";


function AuthForm({ headerText, errorMessage, onSubmit, submitButtonText }) {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <>
            <Spacer>
                <Text h3> {headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? (<Text style={styles.errorMessage}>{errorMessage}</Text>) : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer></>
    );
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        margin: 15
    },
});

export default AuthForm;
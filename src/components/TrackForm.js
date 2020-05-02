import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import {
    Button,
    Input
} from "react-native-elements";
import { Context as LocationContext } from "../context/locationContext";
import Spacer from "./Spacer";

function TrackForm({ props }) {
    const {
        state: {
            recording,
            name,
        },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    placeholder="Enter place name"
                    onChangeText={changeName}
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </Spacer>
            <Button
                title={!recording ? "Start recording" : "Stop"}
                onPress={!recording ? startRecording : stopRecording}
            />
        </>
    );
}

const styles = StyleSheet.create({
    margin: {
        margin: 15
    }
});

export default TrackForm;
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import {
    Button,
    Input
} from "react-native-elements";
import { Context as LocationContext } from "../context/locationContext";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

function TrackForm({ props }) {
    const {
        state: {
            recording,
            name,
            locations
        },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

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
            <Spacer>
                <Button
                    title={!recording ? "Start recording" : "Stop"}
                    onPress={!recording ? startRecording : stopRecording}
                />
            </Spacer>
            <Spacer>
                {!recording && locations.length > 0 ? (
                    <Button
                        title="Save recording"
                        onPress={saveTrack}
                    />
                ): null}
            </Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    margin: {
        margin: 15
    }
});

export default TrackForm;
import React, {
    useCallback,
    useContext
} from "react";
import { StyleSheet } from "react-native";
import {
    SafeAreaView,
    withNavigationFocus
} from "react-navigation";
import { Text } from "react-native-elements";
import { Context as LocationContext } from "../context/locationContext";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
import useLocation from "../hooks/useLocation";
import {FontAwesome} from "@expo/vector-icons";
// import "../_mockLocation";

function TrackCreateScreen({ isFocused }) {
    const { state: { recording, locations }, addLocation } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, recording);
    }, [recording])

    const [ error ] = useLocation(isFocused || recording, callback);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Track Create Screen</Text>
            <Map />
            {error ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
}

TrackCreateScreen.navigationOptions = () => {
    return {
        title: "Add track",
        tabBarIcon: <FontAwesome name="plus" size={20} />
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    }
});

export default withNavigationFocus(TrackCreateScreen);
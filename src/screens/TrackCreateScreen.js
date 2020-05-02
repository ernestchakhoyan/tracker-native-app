import React, { useContext } from "react";
import {StyleSheet} from "react-native";
import {SafeAreaView, withNavigationFocus} from "react-navigation";
import {Text} from "react-native-elements";
import { Context as LocationContext } from "../context/locationContext";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import "../_mockLocation";

function TrackCreateScreen({ isFocused }) {
    const { addLocation } = useContext(LocationContext);
    const [error] = useLocation(isFocused,addLocation);

    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Text h3>Track Create Screen</Text>
            <Map/>
            {error ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    }
});

export default withNavigationFocus(TrackCreateScreen);
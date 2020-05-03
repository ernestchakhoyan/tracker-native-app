import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/locationContext";

function Map({ navigation }) {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if (!currentLocation) {
        return null
    }

    return (
        <>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Circle
                    radius={35}
                    fillColor="rgba(158,128,255,0.3)"
                    strokeColor="rgba(158,128,255,1.0)"
                    center={currentLocation.coords}
                />
                <Polyline
                    coordinates={locations.map(item => item.coords)}
                />
            </MapView>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;
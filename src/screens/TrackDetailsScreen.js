import React, { useContext } from "react";
import {
    StyleSheet,
    Text,
} from "react-native";
import { Context as TrackContext } from "../context/trackContext";
import MapView, { Polyline } from "react-native-maps";

function TrackDetailsScreen({ navigation }) {
    const { state: { tracks }, fetchTracks } = useContext(TrackContext);
    const _id = navigation.getParam("_id");

    const track = tracks.find(item => item._id === _id);
    const trackInitialCoords = track.locations[ 0 ].coords;

    return (
        <>
            <Text style={styles.text}>Track Details Screen</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                    ...trackInitialCoords
                }}
            >
                <Polyline
                    coordinates={track.locations.map(loc => loc.coords)}
                />
            </MapView>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    },
    map: {
        height: 300
    }
});

export default TrackDetailsScreen;
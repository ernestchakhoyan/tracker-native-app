import * as Location from "expo-location";

const tenMetresWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timeStamp: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            latitude: 40.820179 + increment * tenMetresWithDegrees,
            longitude: 44.485538 + increment * tenMetresWithDegrees,
        }
    };
};

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged", {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);
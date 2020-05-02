import {useState, useEffect} from "react";
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from "expo-location";

export default (shouldTrack,callback) => {
    const [error, setError] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching  = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                callback(location);
            });
            setSubscriber(sub);
        }catch (e) {
            setError(e);
        }
    }

    useEffect(() => {
        if (shouldTrack) {
            startWatching()
        }else{
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack])

    return [error];
}
import {useContext} from "react";
import { Context as LocationContext } from "../context/locationContext";
import { Context as TrackContext } from "../context/trackContext";
import {navigate} from "../navigationRef";

export default () => {
    const {createTrack} = useContext(TrackContext);
    const {state: {name, locations}, resetLocation} = useContext(LocationContext);

    const saveTrack = async () => {
        await createTrack(name, locations);
        resetLocation();
        navigate("TrackList");

    }

    return [saveTrack];
}
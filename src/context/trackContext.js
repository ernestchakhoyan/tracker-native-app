import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const tracksReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_TRACKS":
            return action.tracks
        default:
            return state
    }
}

const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get("/tracks");
    dispatch({type: "FETCH_TRACKS", tracks: response.data})
};
const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post("/tracks", {name, locations})
};

export const {Provider, Context} = createDataContext(
    tracksReducer,
    {fetchTracks, createTrack},
    []
)
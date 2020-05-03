import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const tracksReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const fetchTracks = () => {};
const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post("/tracks", {name, locations})
};

export const {Provider, Context} = createDataContext(
    tracksReducer,
    {fetchTracks, createTrack},
    []
)
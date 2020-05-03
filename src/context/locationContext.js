import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CURRENT_LOCATION":
            return {
                ...state,
                currentLocation: action.location
            };
        case "START_RECORDING":
            return {
                ...state,
                recording: true
            };
        case "STOP_RECORDING":
            return {
                ...state,
                recording: false
            };
        case "ADD_LOCATION":
            return {
                ...state,
                locations: [...state.locations, action.location]
            };
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.name
            };
        case "RESET_LOCATION":
            return {
                ...state,
                name: "",
                locations: [],
                currentLocation: null,
                recording: false
            };
        default:
            return state;
    }
};

const changeName = dispatch => (name) => {
    dispatch({ type: "CHANGE_NAME", name });
}

const startRecording = dispatch => () => {
    dispatch({ type: "START_RECORDING" });
};
const stopRecording = dispatch => () => {
    dispatch({ type: "STOP_RECORDING" });
};
const addLocation = dispatch => (location, recording) => {
    dispatch({ type: "ADD_CURRENT_LOCATION", location });

    if(recording){
        dispatch({ type: "ADD_LOCATION", location });
    }
};
const resetLocation = dispatch => () => {
    dispatch({type: "RESET_LOCATION"})
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    {
        startRecording,
        stopRecording,
        addLocation,
        changeName,
        resetLocation
    },
    { recording: false, locations: [], currentLocation: null, name: "" }
);
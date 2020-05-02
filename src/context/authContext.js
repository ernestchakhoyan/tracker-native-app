import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ERROR":
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        case "SIGN_IN":
            return {
                ...state,
                errorMessage: "",
                token: action.token
            };
        case "SIGN_OUT":
            return {
                ...state,
                token: null,
                errorMessage: "",
            };
        case "CLEAR_ERROR_MESSAGE":
            return {
                ...state,
                errorMessage: ""
            };
        default:
            return state;
    }
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post("/signup", { email, password });
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "SIGN_IN", token: response.data.token });
        navigate("TrackList");
    } catch (e) {
        dispatch({
            type: "ADD_ERROR",
            errorMessage: "Something went wrong with sing up"
        });
    }
};

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post("/signin", { email, password });
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "SIGN_IN", token: response.data.token });
        navigate("TrackList");
    } catch (e) {
        dispatch({
            type: "ADD_ERROR",
            errorMessage: "Something went wrong with sing in"
        });
    }
};

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "SIGN_OUT" });
    navigate("loginFlow");
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: "CLEAR_ERROR_MESSAGE" });
};

const tryLocalLogin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        dispatch({ type: "SIGN_IN", token });
        navigate("TrackList");
    } else {
        navigate("loginFlow");
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signin,
        signout,
        signup,
        clearErrorMessage,
        tryLocalLogin
    },
    { isSigned: false, errorMessage: "" }
);
import React from "react";
import {
    createAppContainer,
    createSwitchNavigator,
} from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import { Provider as AuthProvider } from "./src/context/authContext";
import { Provider as LocationProvider } from "./src/context/locationContext";
import { Provider as TrackContext } from "./src/context/trackContext";
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetails: TrackDetailsScreen
        }),
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    })
}, {
    initialRouteName: "LoadingScreen"
});

const App = createAppContainer(switchNavigator);

export default () => (
    <TrackContext>
        <LocationProvider>
            <AuthProvider>
                <App ref={(navigator) => {
                    setNavigator(navigator);
                }} />
            </AuthProvider>
        </LocationProvider>
    </TrackContext>

)
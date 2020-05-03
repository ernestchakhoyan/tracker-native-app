import React, { useContext } from "react";
import {
    StyleSheet
} from "react-native";
import {SafeAreaView} from "react-navigation";
import {
    Button,
    Text
} from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";
import Spacer from "../components/Spacer";
import { FontAwesome } from "@expo/vector-icons";

function AccountScreen({ navigate }) {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Text h3>Account Screen</Text>
            <Spacer>
                <Button
                    title="Sign out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions = () => {
    return {
        title: "Account",
        tabBarIcon: <FontAwesome name="gear" size={20} />
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 48
    }
});

export default AccountScreen;
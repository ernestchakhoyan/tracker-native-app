import React, {useEffect, useContext} from "react";
import {Context as AuthContext } from "../context/authContext";

function LoadingScreen(props) {
    const { tryLocalLogin } = useContext(AuthContext);
    useEffect(() => {
        tryLocalLogin();
    },[])
    return (
        <></>
    );
}

export default LoadingScreen;
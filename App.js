import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import SignInScreen from "./screens/signin";
import Services from "./screens/services";
import Splash from "./screens/splash";

const appInit = async () => {
  await Font.loadAsync({
    NABILMENASY1: require("./assets/fonts/NABILMENASY1.ttf"),
  });
};
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={appInit} onFinish={() => setFontsLoaded(true)} />
    );
  } else {
    return <SignInScreen />;
  }
}

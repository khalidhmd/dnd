import React, { useState } from "react";
import Home from "./screens/home";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const appInit = async () => {
  Font.loadAsync({
    NABILMENASY1: require("./assets/fonts/NABILMENASY1.ttf"),
  });
};
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading startAsync={appInit} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

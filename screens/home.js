import React from "react";
import Home from "../components/home";
import FontContextProvider from "../contexts/fontContext";

export default HomeScreen = ({ navigation }) => {
  return (
    <FontContextProvider>
      <Home navigation={navigation} />
    </FontContextProvider>
  );
};

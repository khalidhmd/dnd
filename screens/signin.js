import React from "react";
import SignIn from "../components/signin";
import { UserContextProvider, FontContextProvider } from "../contexts";

export default SignInScreen = ({ navigation }) => (
  <UserContextProvider>
    <FontContextProvider>
      <SignIn />
    </FontContextProvider>
  </UserContextProvider>
);

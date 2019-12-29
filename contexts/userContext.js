import React, { createContext, Component } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    authenticated: false,
    name: "khalid",
    email: "email address",
  };
  setAuthenticated = auth => {
    this.setState({ authenticated: auth });
  };
  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, setAuthenticated: this.setAuthenticated }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;

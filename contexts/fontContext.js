import React, { createContext, Component } from "react";

export const FontContext = createContext();

class FontContextProvider extends Component {
  state = {
    fontDumb: true,
  };
  setFontDumb = () => {
    this.setState(prevStat => ({
      fontDumb: !prevStat.fontDumb,
    }));
  };
  render() {
    console.log("context" + this.state.fontDumb);
    return (
      <FontContext.Provider
        value={{ ...this.state, setFontDumb: this.setFontDumb }}
      >
        {this.props.children}
      </FontContext.Provider>
    );
  }
}

export default FontContextProvider;

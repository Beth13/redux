import React, { Component } from "react";
import Header from "./Header.jsx";
import { ThemeContext } from "./themes-context.js";

class App extends Component {
  state = {
    userData: {
      name: "Nikola Tesla",
      avatar_url: "https://avatars3.githubusercontent.com/u10001",
    },
  };

  render() {
    return (
      <div className="page">
        <ThemeContext.Provider value={this.state.userData}>
          <Header></Header>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;

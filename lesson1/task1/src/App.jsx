import React, { Component } from "react";
import ThemedButton from "./ThemedButton.jsx";
import { themes, ThemeContext } from "./themes-context.js";

class App extends Component {
  state = {
    theme: themes.light,
  };

  toogleTheme = () => {
    const newTheme =
      this.state.theme === themes.dark ? themes.light : themes.dark;

    this.setState({
      theme: newTheme,
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toogleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>

        <ThemedButton onClick={this.toogleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}

export default App;

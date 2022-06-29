import React, { Component } from "react";
import { ThemeContext } from "./themes-context.js";

class ThemedButton extends Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor,
        }}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;

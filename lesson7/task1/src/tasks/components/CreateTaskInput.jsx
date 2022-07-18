import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateTaskInput extends Component {
  state = {
    value: "",
  };

  handleChange = (event) =>
    this.setState({
      value: event.target.value,
    });

  handleTaskCreate = () => {
    this.props.onCreate(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="create-task__input"
        />
        <button
          className="btn create-task__btn"
          onClick={this.handleTaskCreate}
        >
          Create
        </button>
      </div>
    );
  }
}

CreateTaskInput.propTypes = {
  value: PropTypes.string.isRequired,
};

CreateTaskInput.defaultProps = {
  value: "",
};

export default CreateTaskInput;

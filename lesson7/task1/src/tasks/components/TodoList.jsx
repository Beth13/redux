import React, { Component } from "react";
import TasksList from "./TasksList.jsx";
import { connect } from "react-redux";
import * as tasksActions from "../tasks.actions";
import { createTask, deleteTask, updateTask } from "../tasksGateway.js";
import CreateTaskInput from "./CreateTaskInput.jsx";
import { tasksListSelector } from "../tasks.selectors.js";

class TodoList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.getTasksList());
  };

  handleTaskStatusChange = (id) => {
    const { tasks } = this.state;
    const { done, text } = tasks.find((task) => task.id === id);

    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    return (
      <>
        <h1 className="title">Todo list</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.onCreate} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.handleTaskStatusChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </main>
      </>
    );
  }
}

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
};

const mapState = (state) => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);

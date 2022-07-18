import React from "react";
import { connect } from "react-redux";
import { getTasksList } from "../tasks.actions.js";
import Task from "./Task.jsx";
import * as tasksActions from "../tasks.actions";

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {
  const sortedList = tasks.slice().sort((a, b) => a.done - b.done);
  return (
    <ul className="list">
      {sortedList.map((task) => {
        return (
          <Task
            key={task.id}
            {...task}
            onDelete={handleTaskDelete}
            onChange={handleTaskStatusChange}
          />
        );
      })}
    </ul>
  );
};

export default TasksList;

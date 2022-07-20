import React from "react";

import Task from "./Task.jsx";

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {
  return (
    <ul className="list">
      {tasks.map((task) => {
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

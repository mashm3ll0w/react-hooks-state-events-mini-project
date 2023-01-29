import React from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const displayTasks = tasks.map(task => {
    return (
      <Task key={task.text} task={task.text} category={task.category} />
    )
  })
  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;

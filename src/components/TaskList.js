import React from "react";
import Task from "./Task";

function TaskList({tasks, onTaskDelete}) {

  const displayTasks = tasks.map((task,index) => {
    return (
      <Task key={index} text={task.text} category={task.category} onTaskDelete={onTaskDelete}/>
    )
  })
  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;

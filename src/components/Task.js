import React from "react";

function Task({category, task, onTaskDelete}) {

  function handleDelete(e){
    const deletedTask = e.target.id
    onTaskDelete(deletedTask)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" id={task} onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;

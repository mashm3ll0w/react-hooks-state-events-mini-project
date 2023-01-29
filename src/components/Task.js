import React from "react";

function Task({category, text, onTaskDelete}) {

  function handleDelete(e){
    const deletedTask = e.target.id
    onTaskDelete(deletedTask)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={text} onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;

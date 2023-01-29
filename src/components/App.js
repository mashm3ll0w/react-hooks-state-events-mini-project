import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeClass, setActiveClass] = useState(true)

  function onCategoryChange(category){
    setSelectedCategory(category)
    setActiveClass(activeClass => !activeClass)
  }

  function onTaskDelete(deletedTask){
    const newTasksArray = tasks.filter((task) => task.text !== deletedTask)
    setTasks(newTasksArray)
  }

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  const tasksToDisplay = tasks.filter((task) => {
    if(selectedCategory === "All"){
      return true
    }
    else{
      return task.category === selectedCategory
    }
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={onCategoryChange} isSelected={activeClass}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay} onTaskDelete={onTaskDelete}/>
    </div>
  );
}

export default App;

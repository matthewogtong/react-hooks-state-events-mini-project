import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const visibleTasks = tasks.filter(task => {
    return (
      category === "All" || task.category === category
    )
  })

  const handleTaskFormSubmit = (newTask) => {
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
  }

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.text !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={category}
      onSelectCategory={setCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES.filter(cat => cat !== "All")}
      onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;

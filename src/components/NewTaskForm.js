import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [detailsInput, setDetailsInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      text: detailsInput,
      category: categoryInput
    }

    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text"
        value={detailsInput} 
        onChange={e => setDetailsInput(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={categoryInput}
        onChange={e => setCategoryInput(e.target.value)}
        >
          {categories.map(cat => {
            return <option key={cat}>{cat}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

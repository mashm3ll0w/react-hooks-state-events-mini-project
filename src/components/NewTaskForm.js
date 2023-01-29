import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const newTaskCategories = categories.slice(1)

  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  function handleNewItem(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({
      ...formData
    });

    setFormData({
      text: "",
      category: "Code"
    })
  }

	return (
		<form className="new-task-form" onSubmit={handleSubmit}>
			<label>
				Details
				<input type="text" name="text" onChange={handleNewItem} value={formData.text}/>
			</label>
			<label>
				Category
				<select name="category" onChange={handleNewItem} value={formData.category}>
					{newTaskCategories.map((category, index) => {
						return (
							<option key={index} name="category" value={category}>
								{category}
							</option>
						);
					})}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	);
}

export default NewTaskForm;

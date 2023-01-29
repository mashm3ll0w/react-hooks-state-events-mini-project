import React from "react";

function CategoryFilter({ categories, onCategoryChange, isSelected }) {

  function handleClick(e){
    onCategoryChange(e.target.textContent)
    e.target.className = isSelected ? "selected" : ""
  }


	return (
		<div className="categories">
			<h5>Category filters</h5>
			{categories.map((category, index) => {
				return <button key={index} onClick={handleClick}>{category}</button>;
			})}
		</div>
	);
}

export default CategoryFilter;

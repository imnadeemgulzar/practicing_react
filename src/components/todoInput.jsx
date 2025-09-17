import React, { useState } from "react";

const TodoInput = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState("");
  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd()
    }
  };
  const handleAdd = () => {
    if (todoItem === "") return;
    addItem(todoItem);
    setTodoItem("");
  };
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Add Your Todo"
        className="bg-gray-200 py-2 px-4"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={todoItem}
      />
      <button
        onClick={handleAdd}
        className="py-2 px-4 ml-8 bg-gray-400 cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;

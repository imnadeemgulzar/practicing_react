import React, { useState } from "react";

const TodoItem = ({ item, handleStateChange, handleRemoveItem, editItem }) => {
  const [inputText, setInputText] = useState(item.itemName);
  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (e) => {
    handleStateChange(item.id, e.target.value);
  };

  const handleDelete = () => {
    handleRemoveItem(item.id);
  };

  const handleNewText = (e) => {
    setInputText(e.target.value);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      editItem(item.id, inputText);
      setIsEditing(false); 
    } else if (e.key === "Escape") {
      setInputText(item.itemName);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`${
        item.itemStatus === "Done"
          ? "bg-green-500"
          : item.itemStatus === "In Progress"
          ? "bg-yellow-500"
          : "bg-blue-500"
      } w-2/8 m-4 p-3 relative`}
    >
      <h2 onDoubleClick={handleEdit}>
        {isEditing ? (
          <input
            type="text"
            value={inputText}
            className="bg-white p-1"
            onChange={handleNewText}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          item.itemName
        )}
      </h2>
      <select name="status" onChange={handleChange} value={item.itemStatus}>
        <option value="Status" disabled>
          Status
        </option>
        <option value="Pending">pending</option>
        <option value="In Progress">in Progress</option>
        <option value="Done">Done</option>
      </select>
      <button
        className="absolute top-0.5 right-0.5 cursor-pointer"
        onClick={handleDelete}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;

import React, { useState } from "react";

const Filters = ({ filterItem, filter }) => {
  const filters = ["All", "Pending", "In Progress", "Done"];
  const handleClick = (e) => {
    filterItem(e.target.value);
  };
  return (
    <div className="flex justify-center" onClick={handleClick}>
      <h1 className="text-white text-xl">Filter</h1>
      {filters.map((item) => {
        return (
          <button
          key={item}
            value={item}
            className={`px-3 py-1 ${
              filter === item ? "bg-green-600" : "bg-blue-600"
            } text-white ml-5 rounded-[4px] cursor-pointer`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;

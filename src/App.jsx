import { useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import Filters from "./components/filters";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleStateChange = (id, newStatus) => {
    setTodoList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, itemStatus: newStatus } : item
      )
    );
  };
  const handleRemoveItem = (id) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  const addItem = (itemName) => {
    const newItem = {
      id: Date.now().toString(),
      itemName,
      itemStatus: "Pending",
    };
    setTodoList([...todoList, newItem]);
  };

  const filterItem = (val) => {
    setFilter(val);
  };
  const filteredTodos =
    filter === "All"
      ? todoList
      : todoList.filter((item) => item.itemStatus === filter);

  const editItem = (id,newText) => {
    setTodoList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, itemName:newText } : item))
    );
  };

  return (
    <>
      <div className="h-[100vh] bg-gray-600 py-20 text-center">
        <TodoInput addItem={addItem} />
        <Filters filterItem={filterItem} filter={filter} />
        <TodoList
          todoList={filteredTodos}
          handleStateChange={handleStateChange}
          handleRemoveItem={handleRemoveItem}
          editItem = {editItem}
        />
      </div>
    </>
  );
}

export default App;

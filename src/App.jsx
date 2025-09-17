import { useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import Filters from "./components/filters";
import SearchTodo from "./components/searchTodo";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm,setSearchTerm] = useState('');

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

  const editItem = (id,newText) => {
    setTodoList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, itemName:newText } : item))
    );
  };

  const getVisibleTodos = () => {
    const searched = searchTerm.trim().toLowerCase();
    let result =  
    filter === "All"
      ? todoList
      : todoList.filter((item) => item.itemStatus === filter);

      if(searched) {
        result = result.filter((item) => 
        item.itemName.toLowerCase().includes(searched)
        );
      }
return result;
  }

  return (
    <>
      <div className="h-[100vh] bg-gray-600 py-20 text-center">
        <TodoInput addItem={addItem} />
        <Filters filterItem={filterItem} filter={filter} />
        <SearchTodo setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
        <TodoList
          todoList={getVisibleTodos()}
          handleStateChange={handleStateChange}
          handleRemoveItem={handleRemoveItem}
          editItem = {editItem}
        />
      </div>
    </>
  );
}

export default App;

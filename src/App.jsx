import { useState } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleStateChange = (id,newStatus) => {
    setTodoList(prev => 
      prev.map((item) => 
        item.id === id ? {...item, itemStatus: newStatus} : item
      )
    )
  }
  const handleRemoveItem = (id) => {
    setTodoList(prev => 
      prev.filter(item => 
       item.id !== id 
      )
    )
  }

  const addItem = (itemName) => {
    const newItem = {
      id: Date.now().toString(),
      itemName,
      itemStatus: "Pending",
    };
    setTodoList([...todoList, newItem]);
  };
  console.log(todoList, "?????");
  return (
    <>
      <div className="h-[100vh] bg-gray-600 py-20 text-center">
        <TodoInput addItem={addItem} />
        <TodoList todoList={todoList} handleStateChange={handleStateChange} handleRemoveItem={handleRemoveItem}/>
      </div>
    </>
  );
}

export default App;

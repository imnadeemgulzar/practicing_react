// import { useState } from "react";
// import TodoInput from "./components/todoInput";
// import TodoList from "./components/todoList";
// import Filters from "./components/filters";
// import SearchTodo from "./components/searchTodo";

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [filter, setFilter] = useState("All");
//   const [searchTerm,setSearchTerm] = useState('');

//   const handleStateChange = (id, newStatus) => {
//     setTodoList((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, itemStatus: newStatus } : item
//       )
//     );
//   };
//   const handleRemoveItem = (id) => {
//     setTodoList((prev) => prev.filter((item) => item.id !== id));
//   };

//   const addItem = (itemName) => {
//     const newItem = {
//       id: Date.now().toString(),
//       itemName,
//       itemStatus: "Pending",
//     };
//     setTodoList([...todoList, newItem]);
//   };

//   const filterItem = (val) => {
//     setFilter(val);
//   };

//   const editItem = (id,newText) => {
//     setTodoList((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, itemName:newText } : item))
//     );
//   };

//   const getVisibleTodos = () => {
//     const searched = searchTerm.trim().toLowerCase();
//     let result =  
//     filter === "All"
//       ? todoList
//       : todoList.filter((item) => item.itemStatus === filter);

//       if(searched) {
//         result = result.filter((item) => 
//         item.itemName.toLowerCase().includes(searched)
//         );
//       }
// return result;
//   }

//   return (
//     <>
//       <div className="h-[100vh] bg-gray-600 py-20 text-center">
//         <TodoInput addItem={addItem} />
//         <Filters filterItem={filterItem} filter={filter} />
//         <SearchTodo setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
//         <TodoList
//           todoList={getVisibleTodos()}
//           handleStateChange={handleStateChange}
//           handleRemoveItem={handleRemoveItem}
//           editItem = {editItem}
//         />
//       </div>
//     </>
//   );
// }

// export default App;
// const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`);
///////////////////////////////////////////////////





























import React, { useEffect, useState } from 'react'
import WeatherInput from './components/weatherApp/weatherInput'
import Weather from './components/weatherApp/weather'
const App = () => {
  const api_key = '991f242618034bfcb9841537252009'
const [city,setCity] = useState('');
const [weather,setWeather] = useState(null);
const [loading,setLoading] = useState(false);
const [error,setError] = useState(null);


const fetchData = async () => {

  if(!city) return;
  try {
    setLoading(true);
    setError(null)
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`);
    const data = await res.json();
if(data.error){
  setError(data.error.message);
  setWeather(null)
}else{
  setWeather(data);
}
  } catch (error) {
    setError('Failed to fetch weather data')
  }
  finally {
    setLoading(false)
  }
}

useEffect(() => {
  if(city)
fetchData();
},[city])

  return (
    <div className='bg-gray-600 py-20 text-center'>
     <h1>Weather App</h1>
      <WeatherInput setCity={setCity}/>
       {loading && <p>Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}
      {weather && <Weather weather={weather} />}
    </div>
  )
}

export default App
















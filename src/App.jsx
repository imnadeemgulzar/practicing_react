// import { useEffect, useState } from "react";
// import TodoInput from "./components/todoInput";
// import TodoList from "./components/todoList";
// import Filters from "./components/filters";
// import SearchTodo from "./components/searchTodo";

import { useState } from "react"

// function App() {
//   const [todoList, setTodoList] = useState(() => {
//     const saved = localStorage.getItem('itemList');
//    if(!saved || saved === 'undefined'){
//     return []
//    }else{
//     return JSON.parse(saved);
//    }
//   });
//   const [filter, setFilter] = useState("All");
//   const [searchTerm,setSearchTerm] = useState('');

// useEffect(() => {
// localStorage.setItem('itemList', JSON.stringify(todoList))
// },[todoList])

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
// ///////////////// const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`);////////////////////
// ///////////////////////////////////////////////////



// import React, { useEffect, useState } from 'react'
// import WeatherInput from './components/weatherApp/weatherInput'
// import Weather from './components/weatherApp/weather'
// const App = () => {
//   const api_key = '991f242618034bfcb9841537252009'
// const [city,setCity] = useState('london');
// const [weather,setWeather] = useState(null);
// const [loading,setLoading] = useState(false);
// const [error,setError] = useState(null);
// const [theme,setTheme] = useState(true);


// const fetchData = async () => {

//   if(!city) return;
//   try {
//     setLoading(true);
//     setError(null)
//     const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=5`);
//     const data = await res.json();
// if(data.error){
//   setError(data.error.message);
//   setWeather(null)
// }else{
//   setWeather(data);
//   console.log(weather)
// }
//   } catch (error) {
//     setError('Failed to fetch weather data')
//   }
//   finally {
//     setLoading(false)
//   }
// }

// useEffect(() => {
//   if(city)
// fetchData();
// },[city])
// const handleMode = () => {
//   setTheme(!theme)
// }
//   return (
//     <div className={`${theme && 'bg-gray-600'} bg-gray-200 py-20 text-center`}>
//       <button className={`px-3 py-1 cursor-pointer ${theme ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-200'} `} onClick={handleMode}>Change Theme</button>
//      <h1 className={`text-3xl ${theme ? 'text-gray-200' : 'text-gray-800'} font-bold mt-1`}>Weather App</h1>
//       <WeatherInput setCity={setCity}/>
//        {loading && <div className="mx-auto mt-3 h-12 w-12 rounded-full border-4 border-t-4 border-blue-500 border-t-transparent animate-spin"></div>}
//       {error && <p className="text-red-400">{error}</p>}
//       {weather && <Weather weather={weather} theme={theme}/>}
//     </div>
//   )
// }

//  export default App


// const stepsInfo = [{id:1,message:'Learn React'},{id:2,message:'Apply for jobs'},{id:3,message:'Get Selected'}]
// const App = () => {
//   const [active,setActive] = useState(0)
// const handlePrev = () => {
//   if(active <= 2){
//   setActive(active - 1)
//   }  
// }
// const handleNext = () => {
//   if(active >= 0){
//   setActive(active + 1)
//   }  
// }
//   return (
//     <div className='flex items-center justify-center'>
//       <div className='w-80 bg-gray-300 mt-8 p-4'>
//         <div className='flex justify-between'>
//           <div className={`h-8 w-8 text-center text-2xl rounded-full ${active === 0 ? 'bg-blue-600 text-gray-100' : 'bg-gray-100 text-gray-800'} `}>1</div>
//           <div className={`h-8 w-8 text-center text-2xl rounded-full ${active === 1 ? 'bg-blue-600 text-gray-100' : 'bg-gray-100 text-gray-800'} `}>2</div>
//           <div className={`h-8 w-8 text-center text-2xl rounded-full ${active === 2 ? 'bg-blue-600 text-gray-100' : 'bg-gray-100 text-gray-800'} `}>3</div>
//         </div>
//         <p className='text-2xl font-bold text-center my-4'>{stepsInfo[active].message}</p>
//         <div className='flex justify-between'>
//           <button onClick={handlePrev} disabled={active === 0} className='bg-blue-700 text-gray-100 px-4 py-1'>Previous</button>
//           <button onClick={handleNext}  disabled={active === 2} className='bg-blue-700 text-gray-100 px-4 py-1'>Next</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

import Header from "./components/travelApp/Header"
import Form from "./components/travelApp/Form"
import Items from "./components/travelApp/Items"
import Footer from "./components/travelApp/Footer"

const App = () => {
  const [quantity,setQuantity] = useState(1);
  const [itemName,setItemName] = useState('');
  const [itemList,setItemList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {id:Math.round(Math.random() * 65), quantity,itemName,isPacked:false}
    setItemList([...itemList,newItem])
    setQuantity(1);
    setItemName('');
  }
  return (
    <div>
      <Header/>
      <Form handleSubmit = {handleSubmit} quantity={quantity} setQuantity={setQuantity} itemName={itemName} setItemName={setItemName}/>
      <Items itemList={itemList} setItemList={setItemList}/>
      <Footer itemList ={itemList}/>
    </div>
  )
}

export default App













import { useState } from "react"

const WeatherInput = ({setCity}) => {
  const [inputVal,setInputVal] = useState('');
  
const handleChange = (e) => {
  setInputVal(e.target.value)
}

const handleClick = () => {
  if(inputVal.trim() !== ''){
    setCity(inputVal.trim())
    setInputVal('')
  }
}
const handleKeyDown = (e) => {
if(e.key === 'Enter'){
  if(inputVal.trim() !== ''){
    setCity(inputVal.trim())
    setInputVal('')
  }
}
}
  return (
    <div className='mt-6'>
      <input type="text" className='px-4 py-2 bg-gray-300 text-gray-900' placeholder='Enter The City' onChange={handleChange} onKeyDown={handleKeyDown} value={inputVal}/>
      <button className='px-4 py-2 text-gray-300 bg-gray-900 ml-3 cursor-pointer' onClick={handleClick}>Search</button>
    </div>
  )
}

export default WeatherInput

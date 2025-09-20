import React from 'react'

const Weather = ({weather}) => {
  console.log(weather)
  return (
     <div className="mt-6 bg-gray-300 p-6 mx-8 rounded-2xl">
      <h1 className="text-xl mb-2">Weather in {weather.location.name}</h1>
      <div className="flex items-center justify-center space-x-3">
        <p>{weather.current.condition.text}</p>
        <img src={weather.current.condition.icon} alt="condition" />
      </div>
      <p className="mt-2">Temperature: {weather.current.temp_c}°C</p>
      <p>Feels like: {weather.current.feelslike_c}°C</p>
    </div>
  )
}

export default Weather

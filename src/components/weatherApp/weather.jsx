import React from 'react'

const Weather = ({weather,theme}) => {
  console.log(weather)
  return (
     <div className={`${theme ? 'text-gray-200 bg-gray-900' : 'bg-gray-300 text-gray-900'} mt-6  p-6 mx-8 rounded-2xl`}>
      <h1 className="text-2xl underline mb-2">Weather in {weather.location.name}</h1>
      <div className="flex items-center justify-center space-x-3">
        <p>{weather.current.condition.text}</p>
        <img src={weather.current.condition.icon} alt="condition" />
      </div>
      <p className="mt-2">Temperature: {weather.current.temp_c}°C</p>
      <p>Feels like: {weather.current.feelslike_c}°C</p>
      <div>
        <h1 className='text-3xl underline'>Forecast data for next 5 days</h1>
        {weather.forecast.forecastday.map((day) => {
         return <div key={day.date} className='mt-4 border-1 py-2 w-1/2 mx-auto rounded-sm'>
          <p>📅 Date: {day.date}</p>
          <div className='flex items-center justify-center'>
          <p>🌤 Condition : {day.day.condition.text}</p>
          <img src={day.day.condition.icon} alt="na" />
          </div>
          <p>🌡 Max Temp : {day.day.maxtemp_c} | Min Temp : {day.day.mintemp_c}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Weather

import { useState } from 'react';
import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'

function App() {
   const [weather, setWeather] = useState(null);
   const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

   const fetchWeather = async (city) => {
    try{
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      
      if(!res.ok){
        throw new Error(`Erro HTTP: ${res.status.text}`);
      }
      
      const data = await res.json();
      console.log(data);
      setWeather(data);

    } catch (error){
      console.error('Erro ao buscar o clima', error);
    }

   };

return (
  <div className='max-w-screen flex-col justify-center mx-auto p-4'>
    <h1 className='text-2xl font-bold mb-4 text-center'>Previsão do Tempo</h1>
    <WeatherInfo weather={weather} />
    <WeatherForm onSearch={fetchWeather}/>
  </div>  
)
}

export default App

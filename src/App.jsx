import { useState } from 'react';
import WeatherInfo from './components/Weather/WeatherInfo'
import WeatherForm from './components/Weather/WeatherForm'
import TituloPagina from './components/TitlePage';

function App() {
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!res.ok) {
        throw new Error(`Erro HTTP: ${res.status.text}`);
      }

      const data = await res.json();
      setWeather(data);

    } catch (error) {
      console.error('Erro ao buscar o clima', error);
    }

  };

  return (
    <main className='bg-blue-400 w-screen h-screen flex justify-center items-center p-4'>
      <div className='flex-col border-4 bg-yellow-400 w-170 h-130 rounded-3xl'>
        <TituloPagina />
        <WeatherInfo weather={weather} />
        <WeatherForm onSearch={fetchWeather} />
      </div>
    </main>
  )
}

export default App

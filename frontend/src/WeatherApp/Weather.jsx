import { useState } from "react";
import WeatherInfo from "../components/Weather/WeatherInfo";
import WeatherForm from "../components/Weather/WeatherForm";
import { useWeather } from "../hooks/useWeather";
import TituloPagina from "../components/TitlePage";

export default function Weather() {
    const [city, setCity] = useState('');
    const { weather, error, loading } = useWeather(city);

    return (
        <div className='flex-col border-4 bg-yellow-400 w-170 h-130 rounded-3xl'>
            <TituloPagina />
            {loading && <p className= "text-center text-[22px] text-blue-600 font-bold">Carregando clima do tempo ...</p>}
            {weather && <WeatherInfo weather={weather} />}

            <WeatherForm onSearch={setCity} hasWeatherData={!!weather} />
            {error && <p className="text-center text-[22px] text-red-600 font-bold mt-[-100px]">{error}</p>}

            
        </div>
    )
}
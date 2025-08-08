import { useState } from "react";
import WeatherInfo from "../components/Weather/WeatherInfo";
import WeatherForm from "../components/Weather/WeatherForm";
import { useWeather } from "../hooks/useWeather";
import TituloPagina from "../components/TitlePage";

export default function Weather() {
    const [city, setCity] = useState('');
    const weather = useWeather(city);

    return (
        <div className='flex-col border-4 bg-yellow-400 w-170 h-130 rounded-3xl'>
            <TituloPagina />
            {weather && <WeatherInfo weather={weather} />}
            <WeatherForm onSearch={setCity} hasWeatherData={!!weather} />
        </div>
    )
}
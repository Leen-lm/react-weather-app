import { useState, useEffect } from 'react';

export function useWeather(city) {
    const [weather, setWeather] = useState(null);
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    useEffect(() => {
        if (!city) {
            setWeather(null);
            return;
        }
        const fetchWeather = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                );
                if (!res.ok) {
                    throw new Error(`Erro HTTP: ${res.status}`);
                }

                const data = await res.json();
                setWeather(data);
            } catch (error) {
                console.error('Erro ao buscar o clima', error);
                setWeather(null);
            };
        };
        fetchWeather();
    }, [city, apiKey]);

    return weather;
}
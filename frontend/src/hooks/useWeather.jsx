import { useState, useEffect } from 'react';

export function useWeather(city) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (!city) {
            setWeather(null);
            return;
        }
        const fetchWeather = async () => {
            try {
                const res = await fetch(`https://react-weather-app-vumw.onrender.com/weather?city=${city}`
                );
                if (!res.ok) {
                    throw new Error(`Erro HTTP: ${res.status}`);
                }

                const data = await res.json();
                console.log(data);
                
                setWeather(data);
            } catch (error) {
                console.error('Erro ao buscar o clima', error);
                setWeather(null);
            };
        };
        fetchWeather();
    }, [city]);

    return weather;
}
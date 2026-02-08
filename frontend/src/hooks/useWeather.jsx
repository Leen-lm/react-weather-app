import { useState, useEffect } from 'react';

export function useWeather(city) {
    const [ weather, setWeather ] = useState(null);
    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false); 

    useEffect(() => {
        if (!city) {
            setWeather(null);
            return;
        }
        const fetchWeather = async () => {
            setError("");
            setLoading(true);
            try {
                const res = await fetch(`https://react-weather-app-vumw.onrender.com/weather?city=${city}`
                );
                if (!res.ok) {
                    throw new Error(`Erro HTTP: ${res.status}`);
                }

                const data = await res.json();
                
                if(data.cod === "404"){
                    setWeather(null);
                    setError("Digite uma cidade válida.")
                } else {
                    setWeather(data);
                    setError("");
                    setLoading(false);
                }
            } catch (err) {
                setWeather(null);
                setError("Erro ao buscar dados. Tente novamente mais tarde.", err);
            };
        };
        fetchWeather();
    }, [city]);

    return { weather, error, loading };
}

// para adicionar um arquivo específico no git add. colocamos 
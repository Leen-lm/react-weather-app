import { useState, useEffect } from 'react';
import TranslateText from '../../functions/translateText';

export default function WeatherInfo({ weather }) {
    const [condicaoClimaTraduzida, setCondicaoClimaTraduzida] = useState('');

    const condicaoClima = weather?.weather?.[0]?.description || '';

    // const codigoIcone = weather?.weather?.[0]?.icon;
    // const iconeUrl = `´https://openweathermap.org/img/wn/${codigoIcone}@2x.png`;
    // console.log(codigoIcone);
    


    useEffect(() => {
        if (condicaoClima) {
            const traduzir = async () => {
                const traduzida = await TranslateText(condicaoClima, 'en', 'pt');
                setCondicaoClimaTraduzida(traduzida);
            };
            traduzir();
        }
    }, [condicaoClima]);

    if (!weather) return null;

    const temperatura = weather.main.temp;

    return (
        <div className="text-center flex flex-col items-center">
            <h2 className="text-blue-800 text-[45px] mb-1">{weather.name}</h2>
            <p className='text-[20px]'>Temperatura: {temperatura}°C</p>
            <p className='capitalize text-[20px]'>Condição: {condicaoClimaTraduzida || condicaoClima}</p>

            {weather.weather && weather.weather[0]?.icon && (
                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="Ícone do clima"
                    className="mt-5 mb-7 w-2xs"
                />
            )}
        </div>
    )
}


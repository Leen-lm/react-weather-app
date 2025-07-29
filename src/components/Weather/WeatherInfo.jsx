import { useState, useEffect } from 'react';
import numeral from 'numeral';
import logoDeClima from '../../assets/images/logo-de-clima.png';
import TranslateText from '../../functions/translateText';

export default function WeatherInfo({ weather }) {
    const [condicaoClimaTraduzida, setCondicaoClimaTraduzida] = useState('');

    const condicaoClima = weather?.weather?.[0]?.description || '';

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
    const temperaturaFormatada = numeral(temperatura - 273.15).format('0.00')

    return (
        <div className="gap-1.5 text-center flex flex-col items-center">
            <h2 className="text-blue-800 text-3xl mb-1.5">{weather.name}</h2>
            <p>Temperatura: {temperaturaFormatada}°C</p>
            <p className='capitalize'>Condição: {condicaoClimaTraduzida || condicaoClima}</p>

            <img className='w-2xs' src={logoDeClima} alt="Weather Icon" />
        </div>
    )
}



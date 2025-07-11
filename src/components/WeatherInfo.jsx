import numeral from 'numeral';
import logoDeClima from '../assets/images/logo-de-clima.png'

export default function WeatherInfo({ weather }) {
    if (!weather) return null;

    const temperatura = parseFloat(weather.main.te)

    const temperaturaFormatada = numeral(temperatura / 10).format('00,0')

    return(
        <div className="text-center ">
            <h2 className="text-blue-800 text-3xl mb-1.5">{weather.name}</h2>
            <p>Temperatura: {temperaturaFormatada}°C</p>
            <p>Condição: {weather.weather[0].description}</p>

            <img className='w-2xs center' src={logoDeClima} alt="Weather Icon" />
        </div>
    )
}



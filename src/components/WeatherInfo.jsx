export default function WeatherInfo({ weather }) {
    if (!weather) return null;

    return(
        <div className="text-center mt-4">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p>Temperatura: {Math.round(weather.main.temp)}°C</p>
            <p>Condição: {weather.weather[0].description}</p>

            <img src="{`https://openweather.org/img/wn/${weather.weather[0].icon}@2x.png`}" alt="Weather Icon" />
        </div>
    )
}


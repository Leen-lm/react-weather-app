import { useState } from "react";

export default function WeatherForm({ onSearch, hasWeatherData}) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) {
            alert('Por favor, digite uma cidade.')
            return
        };

        onSearch(city);
        setCity('')
    };

    return (
        <form className={`text-center ${!hasWeatherData?  'h-[70%]': 'h-auto'} content-center`} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite a sua cidade: "
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 border rounded"
            />
            <button type="submit">
                Buscar
            </button>
        </form>
    );
}
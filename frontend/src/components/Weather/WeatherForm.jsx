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
        <form className={`flex flex-col items-center ${!hasWeatherData ? 'h-[70%] justify-center' : 'h-auto'} `} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Digite a sua cidade: "
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 border-2 rounded mb-[12px] mt-[8px]"
            />
            <button className="bg-blue-600 w-[100px] h-[40px] rounded-[8px] text-black transition delay-100 duration-200 ease-in-out 
            shadow-[0px_5px_30px_rgba(81,150,255,1)]
            border-1
            border-black
            hover:border-white
            hover:text-white
            hover:shadow-white
            hover:-translate-y-1 hover:scale-105
            hover:bg-indigo-500 cursor-pointer" type="submit">
                Buscar
            </button>
        </form>
    );
}
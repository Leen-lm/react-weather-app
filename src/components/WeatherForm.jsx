import { useState } from "react";  

export default function WeatherForm({ onSearch }){
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!city.trim()) return;

        onSearch(city);
        setCity('');
    };

    return (
        <form className="text-center" onSubmit={handleSubmit}>
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
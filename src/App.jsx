import WeatherInfo from './components/WeatherInfo'
import WeatherForm from './components/WeatherForm'

function App() {
    const weatherData = {
      name: "Rio de Janeiro",
      main: { temp: 27.6 },
      weather: [{
        description: "Ensolarado",
        icon: "01d"
      }]
    }

return (
  <div>
    <WeatherInfo weather={weatherData} />
    <WeatherForm/>
  </div>  
)
}

export default App

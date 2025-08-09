import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();

const corsOptions =
    [
        'https://react-weather-app-seven-brown.vercel.app',
        'https://react-weather-app-git-main-leen-lms-projects.vercel.app',
        'http://localhost:5173'
    ];

app.use(cors({
    origin: function (origin, callback){
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

const PORT = process.env.PORT || 3000;

app.get("/weather", async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: "Cidade não informada!" });
    }

    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        const response = await fetch(apiUrl);
        const data = response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar o clima!" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

})
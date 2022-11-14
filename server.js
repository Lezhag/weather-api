import express from 'express';
import cors from 'cors';
import { fetchWeatherData } from './src/fetchWeatherData/index.js';

const projectData = [];
const app = express();

/* Middleware*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static('website'));

app.get('/all', async (req, res) => {
    if (projectData) {
        res.send(projectData);
    }
});

app.post('/add', async (req, res) => {
    const payload = await req.body;
    const { city, country = '', feeling } = payload;

    if (!city) {
        res.status(400).send('City is required');
        return;
    }
    const weatherJSON = await fetchWeatherData(city, country);
    const weatherData = await weatherJSON.json();

    projectData.push({
        weather: weatherData,
        feeling,
    });

    res.send(projectData);
})

const port = 3030;
app.listen(port, () => console.log(`Weather Journal BE app is listening on port: ${port}`));

export default app;

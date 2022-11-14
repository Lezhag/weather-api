import fetch from 'node-fetch';
import { weatherURLPrefix, appID } from '../consts.js';

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=576cf9f8f0b24f161beeb26d4cbbb715
export const fetchWeatherData = (city, country) => {
    const url = `${weatherURLPrefix}?q=${city},${country}&APPID=${appID}`
    return fetch(url);
}

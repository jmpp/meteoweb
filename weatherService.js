const API_KEY = 'e868747d83176ba6ec5d9ce6d81423f0';
const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5';

export function getWeatherByCity(cityName) {
    cityName = encodeURIComponent(cityName);
    let promise = fetch(`${API_ENDPOINT}/weather?q=${cityName}&APPID=${API_KEY}&units=metric&lang=fr`)
                    .then(res => res.json());

    return promise;
}

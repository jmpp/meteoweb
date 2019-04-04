$(document).ready(function() {
    'use strict';

    const $formSearch = $('#formSearch');
    const $ville = $formSearch.find('#ville');
    const $results = $('#results');

    $formSearch.on('submit', function(event) {
        event.preventDefault();

        const city = $ville.val();
        
        getWeatherByCity(city).then(weather => {
            $results.html(
                `<div class="card" style="width: 22rem;">
                    <div class="card-body">
                        ${weather.weather.map(w => (
                            `<img src="http://openweathermap.org/img/w/${w.icon}.png" alt="${w.description}" class="float-right">`
                        )).join('')}
                        <h5 class="card-title">${weather.name}, ${weather.sys.country}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            ${weather.weather.map(w => (
                                `<strong>${w.description}</strong>`
                            )).join(', ')}
                            <br>
                        </h6>
                        <p class="card-text">Temperature : ${weather.main.temp}°C</p>
                        <a href="#" class="card-link">Voir les prévisions</a>
                    </div>
                </div>`
            );

            setMapView({
                lat: weather.coord.lat,
                lon: weather.coord.lon,
            })
        });
    });
});

const API_KEY = 'e868747d83176ba6ec5d9ce6d81423f0';
const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5';

function getWeatherByCity(cityName) {
    cityName = encodeURIComponent(cityName);
    let promise = fetch(`${API_ENDPOINT}/weather?q=${cityName}&APPID=${API_KEY}&units=metric&lang=fr`)
                    .then(res => res.json());

    return promise;
}


const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ]
});

function setMapView({ lat, lon }) {
    map.setView(new ol.View({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: 12
    }));
}
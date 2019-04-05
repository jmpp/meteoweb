import {getWeatherByCity} from './weatherService.js';
import {setMapView} from './map.js';

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

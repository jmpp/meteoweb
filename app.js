$(document).ready(function() {
    'use strict';

    const $formSearch = $('#formSearch');
    const $ville = $formSearch.find('#ville');

    $formSearch.on('submit', function(event) {
        event.preventDefault();

        const city = $ville.val();
        
        onSearch(city)
            .then(data => {
                console.log(data)

                let img = 'http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png'

                $('#results').html(`Météo dans la ville de : ${data.name}
                                        <img src="${img}" alt="">`)
            });
    });
});

const API_KEY = 'e868747d83176ba6ec5d9ce6d81423f0';
const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5';

function onSearch(cityName) {
    cityName = encodeURIComponent(cityName);
    let promise = fetch(`${API_ENDPOINT}/weather?q=${cityName}&APPID=${API_KEY}&units=metric&lang=fr`)
                    .then(res => res.json());

    return promise;
}
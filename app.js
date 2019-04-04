$(document).ready(function() {
    'use strict';

    const $formSearch = $('#formSearch');
    const $ville = $formSearch.find('#ville');

    $formSearch.on('submit', function(event) {
        event.preventDefault();

        const city = $ville.val();
        
        console.log(`Recherche dans ${city}`);
    });
});
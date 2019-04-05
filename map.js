const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ]
});

export function setMapView({ lat, lon }) {
    map.setView(new ol.View({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: 12
    }));
}
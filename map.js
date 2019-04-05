import {Map as olMap, View} from 'ol';
import {OSM} from 'ol/source';
import {Tile} from 'ol/layer';
import {fromLonLat} from 'ol/proj';

export const map = new olMap({
    layers: [
        new Tile({
            source: new OSM()
        })
    ]
});

export function setMapView({ lat, lon }) {
    map.setView(new View({
        center: fromLonLat([lon, lat]),
        zoom: 12
    }));
}
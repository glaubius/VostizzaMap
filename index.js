/*jshint esversion: 6 */

console.log('L', L);

const position = [38.2500, 22.0833];
const initZoom = 9;

const layer = new L.StamenTileLayer("terrain");
const map = L.map('map').setView(position, initZoom);

map.addLayer(layer);

console.log('map', map);

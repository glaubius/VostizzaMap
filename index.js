/*jshint esversion: 6 */
app.use('/scripts', express.static(__dirname + '/node_modules/leaflet-ajax/dist/'));

console.log('L', L);

const position = [38.2500, 22.0833];
const initZoom = 11;

const layer = new L.StamenTileLayer("terrain");
const map = L.map('map').setView(position, initZoom);

map.addLayer(layer);

// Add settlements to map
var settlements = new L.GeoJSON.AJAX("data/settlements-USE.geojson");
settlements.addTo(map);


console.log('map', map);

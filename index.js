/*jshint esversion: 6 */

console.log('L', L);

const position = [38.2500, 22.0833];
const initZoom = 11;

const layer = new L.StamenTileLayer("terrain");
const map = L.map('map').setView(position, initZoom);

map.addLayer(layer);

// Delete after testing
var settlements = {
"type": "FeatureCollection",
"name": "settlements",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": null, "Type": "Inhabited Villa", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 38.265925509843164 , 22.017121161639061] } },
{ "type": "Feature", "properties": { "Name": null, "Type": "Inhabited Zeog", "ElevationC": 2 }, "geometry": { "type": "Point", "coordinates": [ 38.253495229637792,  22.006893381402847 ] } }
]
};

var settlementsStyle = {
  "color": "#ff0000",
  "weight": 8,
};

L.geoJSON(settlements, {
  style: settlementsStyle
}).addTo(map);

console.log('map', map);

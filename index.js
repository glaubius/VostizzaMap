/*jshint esversion:6 */
console.log('L', L);

const position = [38.1500, 22.2133];
const initZoom = 11;
const map = L.map('map').setView(position, initZoom);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZ2xhdWJpdXMiLCJhIjoiY2sxcDV5dHphMHM2bzNvbnFvdW1taHhlNCJ9.mvLNCSMEXScDHVPQBhyS2Q'
}).addTo(map);

function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}

var riverStyle = {
  "color": '#3933FF',
  "weight": 3,
  "opacity": 0.65,
};

var villaStyle = {
  "color": '#7E16A8',
  "weight": 1,
  "opacity": 0.7,
};

var settlementStyle = {
  "radius": 2,
  "fillColor": "#000000",
  "color": "#000000",
  "weight": 1,
  "opacity": 1,
  "fillOpacity": 0.8,
};

var locationStyle = {
  "radius": 2,
  "fillColor": "#ECF308",
  "color": "#000000",
  "weight": 1,
  "opacity": 1,
  "fillOpacity": 0.8,
};

var rivers = new L.GeoJSON.AJAX("data/rivers.geojson", {style: riverStyle});

var villas = new L.GeoJSON.AJAX("data/villas.geojson", {style: villaStyle});

var settlements = new L.GeoJSON.AJAX("data/settlements.geojson", {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, settlementStyle);
  }
});

var locations = new L.GeoJSON.AJAX("data/locations.geojson", {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, locationStyle);
  }
});


villas.addTo(map);

rivers.addTo(map);

settlements.addTo(map);

locations.addTo(map);

console.log('map', map);

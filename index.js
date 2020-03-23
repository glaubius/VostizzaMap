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

function popStyle(feature) {
  return {
    fillColor: getColor(feature.properties.Villas_data2019Use_TotalPop),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

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

var rivers = new L.GeoJSON.AJAX("data/rivers.geojson", {style: riverStyle}).addTo(map);

var villas = new L.GeoJSON.AJAX("data/villas.geojson", {
  style: popStyle,
  onEachFeature: function (feature, layer) {
    layer.on('mouseover', highlightFeature);
    layer.on('mouseout', function () {
      villas.resetStyle(this);
    });
  }
}).addTo(map);

var settlements = new L.GeoJSON.AJAX("data/settlements.geojson", {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, settlementStyle);
  }
}).addTo(map);

var locations = new L.GeoJSON.AJAX("data/locations.geojson", {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, locationStyle);
  }
}).addTo(map);

function getColor(d) {
  return d > 500 ? '#045a8d' :
        d > 100 ? '#2b8cbe' :
        d > 50 ? '#74a9cf' :
        d > 20 ? '#a6bddb' :
        d > 10 ? '#d0d1e6' :
                  '#f1eef6';
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}


function onEachVilla(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}



console.log('map', map);

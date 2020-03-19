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

var rivers = new L.GeoJSON.AJAX("data/rivers.geojson", {style: riverStyle});

var villas = new L.GeoJSON.AJAX("data/villas.geojson", {style: villaStyle});

var settlements = new L.GeoJSON.AJAX("data/settlements.geojson", {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, settlementStyle);
  }
});

// var settlements = {
// "type": "FeatureCollection",
// "name": "settlements",
// "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
// "features": [
// { "type": "Feature", "properties": { "Name": "Thelopotamo", "Type": "Inhabited Villa", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.017121161639061, 38.265925509843164 ] } },
// { "type": "Feature", "properties": { "Name": "Alimocturi", "Type": "Inhabited Zeog", "ElevationC": 2 }, "geometry": { "type": "Point", "coordinates": [ 22.006893381402847, 38.253495229637792 ] } },
// { "type": "Feature", "properties": { "Name": "Mirtidi", "Type": "Inhabited Villa", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.008807376507693, 38.244298545543415 ] } },
// { "type": "Feature", "properties": { "Name": "Tumba", "Type": "Inhabited Villa", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 21.984530294788993, 38.237708941122641 ] } },
// { "type": "Feature", "properties": { "Name": "Dimitropulo", "Type": "Mettochi", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.046882337809912, 38.248078279752306 ] } },
// { "type": "Feature", "properties": { "Name": "S. Zorzi di Cazi", "Type": "Deserted Zeog", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.033338177243564, 38.225784217069936 ] } },
// { "type": "Feature", "properties": { "Name": "Cumari", "Type": "Inhabited Zeog", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.040423764125372, 38.224529379887066 ] } },
// { "type": "Feature", "properties": { "Name": "Lucha", "Type": "Inhabited Zeog", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.032094458182947, 38.217985969102081 ] } },
// { "type": "Feature", "properties": { "Name": "Eftapites", "Type": "Inhabited Villa", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.005514116889071, 38.224714414468032 ] } },
// { "type": "Feature", "properties": { "Name": "Paleo Castro", "Type": "Older Site", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 21.990027723810478, 38.225084511992108 ] } },
// { "type": "Feature", "properties": { "Name": "Gligori", "Type": "Inhabited Villa", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 21.982395191097392, 38.230692588256822 ] } },
// { "type": "Feature", "properties": { "Name": "Catu Greca", "Type": "Deserted Villa", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 21.979456174858921, 38.220046542335275 ] } },
// { "type": "Feature", "properties": { "Name": "Paleo Castro", "Type": "Older Site", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 21.967121794090581, 38.218718119654653 ] } },
// { "type": "Feature", "properties": { "Name": "Panu Greca", "Type": "Inhabited Villa", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 21.954260525457908, 38.217511906734593 ] } },
// { "type": "Feature", "properties": { "Name": "Caco Corio", "Type": "Inhabited Villa", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 21.994472133195384, 38.212945634102667 ] } },
// { "type": "Feature", "properties": { "Name": "Aracoua", "Type": "Inhabited Villa", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 21.956456636796833, 38.200564054313141 ] } },
// { "type": "Feature", "properties": { "Name": "Paraschieui", "Type": "Inhabited Villa", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 21.97947681989595, 38.193399570076537 ] } },
// { "type": "Feature", "properties": { "Name": "Bogdano", "Type": "Deserted Villa", "ElevationC": 6 }, "geometry": { "type": "Point", "coordinates": [ 21.951396695545721, 38.183257847539238 ] } },
// { "type": "Feature", "properties": { "Name": "Bordano", "Type": "Inhabited Villa", "ElevationC": 7 }, "geometry": { "type": "Point", "coordinates": [ 21.933030477508765, 38.188114651748513 ] } },
// { "type": "Feature", "properties": { "Name": "Franca", "Type": "Inhabited Villa", "ElevationC": 7 }, "geometry": { "type": "Point", "coordinates": [ 21.926590663979376, 38.180594804832673 ] } },
// { "type": "Feature", "properties": { "Name": "Lopesi", "Type": "Deserted Villa", "ElevationC": 7 }, "geometry": { "type": "Point", "coordinates": [ 21.938836869948272, 38.17560926190589 ] } },
// { "type": "Feature", "properties": { "Name": "Cugnina", "Type": "Inhabited Villa", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 22.003282050995679, 38.172214896257621 ] } },
// { "type": "Feature", "properties": { "Name": "Madona Pepegliniza", "Type": "Monastery", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 22.011594452363404, 38.178104850388408 ] } },
// { "type": "Feature", "properties": { "Name": "S. Michel Arcangello", "Type": "Monastery", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.037688003765261, 38.175552255181884 ] } },
// { "type": "Feature", "properties": { "Name": "Sternegliza", "Type": "Mettochi", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.06533655265283, 38.186571401842293 ] } },
// { "type": "Feature", "properties": { "Name": "Chiesa della Madona", "Type": "Church", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.066158496250956, 38.180781540474186 ] } },
// { "type": "Feature", "properties": { "Name": "Mauricchi", "Type": "Inhabited Villa", "ElevationC": 6 }, "geometry": { "type": "Point", "coordinates": [ 22.027764779897879, 38.146488888166715 ] } },
// { "type": "Feature", "properties": { "Name": "Pandalemona S. Pantelon", "Type": "Inhabited Villa", "ElevationC": 6 }, "geometry": { "type": "Point", "coordinates": [ 22.066960660115893, 38.1373762739886 ] } },
// { "type": "Feature", "properties": { "Name": "Fteri", "Type": "Inhabited Villa", "ElevationC": 7 }, "geometry": { "type": "Point", "coordinates": [ 22.069601627519372, 38.147665261512152 ] } },
// { "type": "Feature", "properties": { "Name": "Mamusa", "Type": "Inhabited Villa", "ElevationC": 6 }, "geometry": { "type": "Point", "coordinates": [ 22.143192308165009, 38.142203009641136 ] } },
// { "type": "Feature", "properties": { "Name": "Bucuschia Pano", "Type": "Inhabited Villa", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 22.11531501886412, 38.155466563330073 ] } },
// { "type": "Feature", "properties": { "Name": "Theodorio", "Type": "Deserted Zeog", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 22.139728319589782, 38.152430391339365 ] } },
// { "type": "Feature", "properties": { "Name": "Bucuschia Cato", "Type": "Inhabited Villa", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.13498835737996, 38.163206509602091 ] } },
// { "type": "Feature", "properties": { "Name": "Potamia", "Type": "Inhabited Villa", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 22.243991958741947, 38.108511211373532 ] } },
// { "type": "Feature", "properties": { "Name": "Cherniza", "Type": "Machala", "ElevationC": 6 }, "geometry": { "type": "Point", "coordinates": [ 22.21260609801195, 38.122192519227056 ] } },
// { "type": "Feature", "properties": { "Name": "Vrostena", "Type": "Machala", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 22.206808606608764, 38.132147852959754 ] } },
// { "type": "Feature", "properties": { "Name": "Piscopi", "Type": "Machala", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 22.226667363740511, 38.137247609817457 ] } },
// { "type": "Feature", "properties": { "Name": "Castro", "Type": "Machala", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.217123936281784, 38.144321502307825 ] } },
// { "type": "Feature", "properties": { "Name": "Plessa", "Type": "Inhabited Villa", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 22.299448628605401, 38.112977901470174 ] } },
// { "type": "Feature", "properties": { "Name": "Pirgo", "Type": "Inhabited Villa", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 22.289521538910012, 38.123400144074196 ] } },
// { "type": "Feature", "properties": { "Name": "Porouizza", "Type": "Inhabited Villa", "ElevationC": 5 }, "geometry": { "type": "Point", "coordinates": [ 22.310806658747943, 38.136338717699495 ] } },
// { "type": "Feature", "properties": { "Name": "S. Nicolo", "Type": "Monastery", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 22.225855592117728, 38.156391517325432 ] } },
// { "type": "Feature", "properties": { "Name": "Aia Mogni", "Type": "Monastery", "ElevationC": 4 }, "geometry": { "type": "Point", "coordinates": [ 22.202577054975794, 38.173204312638347 ] } },
// { "type": "Feature", "properties": { "Name": "Gardena, e M. di Ierusale", "Type": "Monastery", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.126428188074762, 38.200606110036482 ] } },
// { "type": "Feature", "properties": { "Name": "S. Zuanne", "Type": "Inhabited Villa", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.116598289702598, 38.209880256244091 ] } },
// { "type": "Feature", "properties": { "Name": "Rizomilo", "Type": "Inhabited Zeog", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.133359046591174, 38.20912350683107 ] } },
// { "type": "Feature", "properties": { "Name": "Trano", "Type": "Inhabited Zeog", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.124766465844139, 38.215346172005979 ] } },
// { "type": "Feature", "properties": { "Name": "Terrazza Pano", "Type": "Deserted Zeog", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.137211290914866, 38.223631508163358 ] } },
// { "type": "Feature", "properties": { "Name": "Terrazza Cato", "Type": "Inhabited Villa", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.142053298464329, 38.224001775046261 ] } },
// { "type": "Feature", "properties": { "Name": "Caragmati", "Type": "Inhabited Zeog", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.139862930969649, 38.228911218941647 ] } },
// { "type": "Feature", "properties": { "Name": "Temegni Panu", "Type": "Inhabited Zeog", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.130186709397485, 38.233594889774807 ] } },
// { "type": "Feature", "properties": { "Name": "Muftiri", "Type": "Deserted Zeog", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.112110474508988, 38.227746791784007 ] } },
// { "type": "Feature", "properties": { "Name": "Palio Crocoua", "Type": "Inhabited Villa", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.088939506220562, 38.209424752877659 ] } },
// { "type": "Feature", "properties": { "Name": "Crocoua", "Type": "Inhabited Villa", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.091765118062831, 38.221559342472638 ] } },
// { "type": "Feature", "properties": { "Name": "Temegni Catu", "Type": "Inhabited Zeog", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.132756181034345, 38.238458263870903 ] } },
// { "type": "Feature", "properties": { "Name": "Vostizza", "Type": "Inhabited Villa", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.092040071821035, 38.250051196401841 ] } },
// { "type": "Feature", "properties": { "Name": "Vouoda", "Type": "Inhabited Villa", "ElevationC": 3 }, "geometry": { "type": "Point", "coordinates": [ 22.061376363248403, 38.210332943434629 ] } },
// { "type": "Feature", "properties": { "Name": "Cachu", "Type": "Inhabited Zeog", "ElevationC": 1 }, "geometry": { "type": "Point", "coordinates": [ 22.091090098118197, 38.239947974730342 ] } }
// ]
// };



villas.addTo(map);

rivers.addTo(map);

settlements.addTo(map);

// L.geoJSON(settlements, {
//   pointToLayer: function (feature, latlng) {
//     return L.circleMarker(latlng, settlementStyle);
//   }
// }).addTo(map);

console.log('map', map);

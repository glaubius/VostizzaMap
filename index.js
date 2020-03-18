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

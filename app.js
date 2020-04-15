//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const GeoJSON = require("mongoose-geojson-schema");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

let settlements = require('./data/settlements.geojson');

mongoose.connect("mongodb://localhost:27017/VostizzaDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const locationsSchema = new mongoose.Schema({
  type: { type: String },
  properties: {
    name: String,
    type: { type: String },
    inhabited: Boolean
  },
  geometry: mongoose.Schema.Types.Geometry
});

const Location = mongoose.model("Location", locationsSchema);

settlements.forEach(function(settlement) {
  new Location(settlement).save();
});
// const place = new Location ({
//   type: "Feature",
//   properties: {
//     name: "Paleo Castro",
//     type: "Castro",
//     inhabited: false
//   },
//   geometry: {
//     type: "Point",
//     coordinates: [21.990027723810478, 38.225084511992108]
//   }
// });
//
// place.save();


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});




app.listen(port, function(req, res) {
  console.log("Server is running on port " + port);
});

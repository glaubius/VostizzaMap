//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

mongoose.connect("mongodb://localhost:27017/VostizzaDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const locationSchema = new mongoose.Schema({
  type: String,
  properties: {
    name: String,
    type: String,
    inhabited: Boolean
  },
  geometry: {
    type: String,
    coordinates: [Number, Number]
  }
});


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});




app.listen(port, function(req, res) {
  console.log("Server is running on port " + port);
});

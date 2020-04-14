//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const port = 3000;






app.listen(port, function(req, res) {
  console.log("Server is running on port " + port);
});

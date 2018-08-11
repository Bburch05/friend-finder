var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiRoutes = require('./routing/apiRoutes.js');
app.use('/', apiRoutes);

var htmlRoutes = require('./routing/htmlRoutes.js');
app.use('/', htmlRoutes);

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
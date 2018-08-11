

  module.exports = (function() {
    'use strict';
    var htmlRoutes = require('express').Router();

    htmlRoutes.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });
      
    htmlRoutes.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "wait.html"));
    });

    return htmlRoutes;
})();
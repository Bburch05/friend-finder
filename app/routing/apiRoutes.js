module.exports = (function() {
    'use strict';

    var apiRoutes = require('express').Router();
    apiRoutes.get("/api/tables", function(req, res) {
        return res.json(tables);
      });
    
      apiRoutes.post("/api/tables", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var body = req.body;
        var newTable = new Table(
            body.customerName,
            body.customerEmail,
            body.customerPhone, 
            body.customerID);
        if (tables.length <= 4){
            tables.push(newTable);
            var reserved = true;
            res.send(reserved);
            console.log(res)
        }
        else{
            wait.push(newTable);
            var reserved = false;
            res.send(reserved)
        }
        console.log(newTable);
      });
    return apiRoutes;
})();  // Displays all characters
 
 
 
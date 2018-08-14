var path = require("path");
var friendData = require("../data/friends.js")


    var apiRoutes = require('express').Router();
    apiRoutes.get("/api/friends", function(req, res) {
        res.json(friendData);
      });

    apiRoutes.post("/api/friends", function(req, res) {
        var body = req.body;
        var differenceArray = [];
        var friendID;
        var nearDiff = 51;

        friendData.forEach(function(data,index){
            var friendName = data.name;
            var friendScores = data.scores;
            var userScores = body.scores;
            differenceArray = [];
            var difValue = 0;

            for(var i = 0; i < friendScores.length; i++){
                differenceArray.push(Math.abs( parseInt(friendScores[i]) - parseInt(userScores[i]) ))
            }

            differenceArray.forEach(function(data){
                difValue += data;
            })

            if(difValue < nearDiff){
                nearDiff = difValue;
                friendID = index;
            }
        });
            var match = {
                    name: friendData[friendID].name,
                    photo: friendData[friendID].photo
                };
                console.log(match);
                res.json(match)
            friendData.push(body)

      });

module.exports = apiRoutes
 
 
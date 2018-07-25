//link to the the friends js file to load data
var friendsData = require("../data/friends");

//routing

module.exports = function(app) {
  //the GET route for api/friends to display a JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

        //the POST route to handle survey results
      app.post("/api/friends", function(req, res) {
        //handles the friends list data for if we got less than 10 friends its true, if false its less than 10
        if (friendsData.length < 10) {
          tableData.push(req.body);
          res.json(true);
        }
        else {
            (friendsData.length > 10)
          friendsData.push(req.body);
          res.json(false);
        }
        //clear friends list
        app.post("/api/clear", function() {
            // Empty out the arrays of data
            friendsData = [];
            
        
            console.log(friendsData);
          });
      });











    };



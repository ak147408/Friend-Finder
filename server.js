//dependancies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//create node server

var app = express();

//create the port
var PORT = process.env.PORT || 8080;

//set up app for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//points to route files

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//listener starts the server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
///// DEPENDENCIES /////

// Require Express
var express = require("express");

// Tell node we're creating an "express" server
var app = express();
// Set an initial port
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing (middleware)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///// ROUTER /////

// Point server to a series of "route" files
// Routes give server "map" of responses when user visit / request data from different URLs
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

///// LISTENER /////

app.listen(PORT, function() {
    console.log("App online at http://localhost:%s", PORT);
});
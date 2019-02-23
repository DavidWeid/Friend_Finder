///// LOAD DATA /////

// Link routes to series of "data" sources
// Data sources hold arrays of information

var friendsData = require("../data/friends");

///// ROUTING /////

// Export for server.js
module.exports = function(app) {
    // API GET requests when users "visit" a page
    // Send the user JSON of the data

    // Route to friends API
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // API POST requests when user submits a form
    // Send the user data to the server (as a JSON object)
    // Push JSON to the friends array, save data to friendsData

    // Route
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        res.json(friendsData);
        // Send data to server, then return something to user (i.e. res.json(true))
    });
};
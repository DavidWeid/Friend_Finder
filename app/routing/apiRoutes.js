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
        var newFriend = req.body;

        var comparisonArray = [];

        for (var i = 0; i < friendsData.length; i++) {
            var difArray = [];

            for (var j = 0; j < newFriend.scores.length; j++) {
                var dif = newFriend.scores[j] - friendsData[i].scores[j];
                difArray.push(Math.abs(dif));
            }

            var sum = difArray.reduce(add);

            function add(accumulator, a) {
                return accumulator + a;
            }

            comparisonArray.push(sum);
        };

        var min = Math.min.apply(Math, comparisonArray);

        var minIndex = comparisonArray.indexOf(min);

        var bestMatch = friendsData[minIndex];

        console.log(bestMatch);

        friendsData.push(newFriend);

        res.json(bestMatch);
    });
};
///// LOAD DATA /////

// Link route to friendsData
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
    // Find best match, return best match to user

    // Route
    app.post("/api/friends", function(req, res) {
        
        // User's profile as an object
        var newFriend = req.body;

        // Array to hold each comparison between newFriend and friendsData
        var comparisonArray = [];

        // Loop through friendsData (compare newFriend to each person in friendsData)
        for (var i = 0; i < friendsData.length; i++) {

            // Array to hold each difference in scores
            var difArray = [];

            // Loop through newFriend's scores and each person in friendsData and compare scores
            for (var j = 0; j < newFriend.scores.length; j++) {
                var dif = newFriend.scores[j] - friendsData[i].scores[j];

                // Push the absolute difference in scores to difArray
                difArray.push(Math.abs(dif));
            }

            // Sum up the total difference in scores
            var sum = difArray.reduce(add);

            function add(accumulator, a) {
                return accumulator + a;
            }

            // Push total difference to comparisonArray
            comparisonArray.push(sum);
        };

        // Find the lowest number (minimum difference) between all potential matches
        var min = Math.min.apply(Math, comparisonArray);

        // Determine the index of the lowest number
        var minIndex = comparisonArray.indexOf(min);

        // Use the index to find the bestMatch (index of lowest number in comparisonArray corresponds to the person in the friendsData array with the same index)
        var bestMatch = friendsData[minIndex];

        console.log(bestMatch);

        // Add newFriend to the rest of the friends
        friendsData.push(newFriend);

        // Return to the user the best match
        res.json(bestMatch);
    });
};
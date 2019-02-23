///// DEPENDENCIES /////

// Require Path (to get the correct file path for our html)
var path = require("path");

///// ROUTING /////

// Export for server.js
module.exports = function(app) {
    // HTML GET requests when users "visit" a page
    // Send the user various HTML pages at various URLs

    // Route to home
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Route to survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // No matching URL defaults to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
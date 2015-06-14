var express = require("express"),
    bodyParser = require("body-parser"),
    request = require("request"),
    routes = require("./routes")
    Developer = require("./models/Developer").Model;

var app = express(),
    GITHUB_API_URL = "https://api.github.com",
    GITHUB_CLIENT_AND_SECRET_KEYS = "?client_id=" +
      process.env.GITHUB_CLIENT_ID +
      "&client_secret=" +
      process.env.GITHUB_CLIENT_SECRET;

if (process.argv.slice(2).length == 0 || process.argv[2] != "test") {
  request.get({
    uri: GITHUB_API_URL + "/orgs/github/members" + GITHUB_CLIENT_AND_SECRET_KEYS,
    method: "GET",
    headers: {"user-agent": "node.js"}
  }, function (err, res, body) {
    var members = JSON.parse(body);

    members.forEach(function (member) {
      console.log("Infering " + member.login + "'s price...");
      Developer.add({
        username: member.login,
        inferPriceFromGitHub: true
      }, null);
    });
  });
} else if (process.argv[2] == "test") {
  Developer.initialize(
    [
      {"username":"brenoc","price":224},
      {"username":"firstdoit","price":416},
      {"username":"joe","price":302}
    ]
  );
}

app.use(bodyParser.urlencoded({ extended: true }));

// Enable parsing of json data
app.use(bodyParser.json());

// Listening on port 5000
app.set("port", 5000);

// Static files (index.html, React components, JavaScript libraries and main.css)
app.use(express.static(__dirname + "/../client"));

// Defined inside routes.js
var router = routes.Router();

// Our REST api will be accessed through /api
app.use("/api", router);


// Start server
app.listen(app.get("port"), function () {
  console.log("DevShop app is running on port", app.get("port"));
});

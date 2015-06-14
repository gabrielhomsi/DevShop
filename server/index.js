var express = require("express"),
    bodyParser = require("body-parser"),
    request = require("request");

var app = express(),
    GITHUB_API_URL = "https://api.github.com",
    GITHUB_CLIENT_AND_SECRET_KEYS = "?client_id=xxxx&client_secret=yyyy";

var developers = [{"username":"brenoc","price":224},{"username":"firstdoit","price":416},{"username":"joe","price":302}],
    addDeveloper = function (developer, res) {
      if (developer.inferPriceFromGitHub === true) {
        request.get({
          uri: GITHUB_API_URL + "/users/" + developer.username + GITHUB_CLIENT_AND_SECRET_KEYS,
          method: "GET",
          headers: {"user-agent": "node.js"}
        }, function (err, _res, body) {
          var profile = JSON.parse(body);

          developers.push({
            username: developer.username,
            price: 30 * (parseInt(profile.public_repos) +
              parseInt(profile.public_gists) +
              parseInt(profile.followers) +
              parseInt(profile.following))
          });

          if (res != null) {
            res.json({ message: "A new developer (w/ price inference) was created."});
          }
        });
      } else {
        developers.push({
          username: developer.username,
          price: developer.price
        });

        if (res != null) {
          res.json({ message: "A new developer was created."});
        }
      }
    };

console.log("Populating developers array based on GitHub organization members...");
request.get({
  uri: GITHUB_API_URL + "/orgs/github/members" + GITHUB_CLIENT_AND_SECRET_KEYS,
  method: "GET",
  headers: {"user-agent": "node.js"}
}, function (err, res, body) {
  var members = JSON.parse(body);

  members.forEach(function (member) {
    console.log("Infering " + member.login + "'s price...");
    addDeveloper({
      username: member.login,
      inferPriceFromGitHub: true
    }, null);
  });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("port", (process.env.PORT || 5000));

// Static files (index.html, React components, JavaScript libraries and main.css)
app.use(express.static(__dirname + "/../client"));

var router = express.Router();

router.route("/developers")
  // Lists all developers
  .get(function (req, res) {
    res.json(developers);
  })

  // Developer creation
  .post(function (req, res) {
    addDeveloper({
      username: req.body.username,
      price: parseInt(req.body.price),
      inferPriceFromGitHub: req.body.inferPriceFromGitHub === "true"
    }, res);
  });

router.route("/developers/:developer_index")
  // Developer removal
  .delete(function (req, res) {
    developers.splice(parseInt(req.params.developer_index), 1);

    res.json({ message: "Removed developer with index " + req.params.developer_index + "." });
  });

// Our REST api will be accessed through /api
app.use("/api", router);

app.listen(app.get("port"), function () {
  console.log("DevShop app is running on port", app.get("port"));
});

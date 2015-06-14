var developers = [];

exports.Model = {
  initialize: function (_developers) {
    developers = _developers;
  },

  getAll: function () {
    return developers;
  },

  add: function (developer, res) {
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
  },

  removeByIndex: function (index) {
    developers.splice(parseInt(index), 1);
  }
}

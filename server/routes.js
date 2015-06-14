var express = require("express"),
    Developer = require("./models/Developer").Model;

exports.Router = function (developers) {
  var router = express.Router();

  router.route("/developers")
    // Lists all developers
    .get(function (req, res) {
      res.json(Developer.getAll());
    })

    // Developer creation
    .post(function (req, res) {
      Developer.add({
        username: req.body.username,
        price: parseInt(req.body.price),
        inferPriceFromGitHub: req.body.inferPriceFromGitHub === "true"
      }, res);
    });

  router.route("/developers/:developer_index")
    // Developer removal
    .delete(function (req, res) {
      Developer.removeByIndex(req.params.developer_index);

      res.json({ message: "Removed developer with index " + req.params.developer_index + "." });
    });

  return router;

};

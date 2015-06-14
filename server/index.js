var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    developers = [
      { username: "brenoc", price: 224 },
      { username: "firstdoit", price: 416 },
      { username: "joe", price: 302 }
    ];

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
    developers.push({
      username: req.body.username,
      price: parseInt(req.body.price)
    });

    res.json({ message: "A new developer was created."});
  });

router.route("/developers/:developer_index")
  // Developer removal
  .delete(function (req, res) {
    developers.splice(parseInt(req.params.developer_index), 1);
    console.log(developers);

    res.json({ message: "Removed developer with index " + req.params.developer_index + "." });
  });

// Our REST api will be accessed through /api
app.use("/api", router);

app.listen(app.get("port"), function () {
  console.log("DevShop app is running on port", app.get("port"));
});

var frisby = require("frisby");

var URL = "http://localhost:5000/api";

frisby.create("GET developer")
  .get(URL + "/developers")
  .expectStatus(200)
  .expectJSON([{"username":"brenoc","price":224},{"username":"firstdoit","price":416},{"username":"joe","price":302}])
.toss();

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public/"));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: "./" });
});

app.listen(3000);

const express = require("express");
// express method will return an app
const app = express();

// simply receiving get request to homepage '/', called home route
app.get("/", (req, res) => {
  res.send("List of all hotels.....");
});

module.exports = app;

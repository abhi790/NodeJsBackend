const express = require("express");
// express method will return an app
const app = express();

// start listening
app.listen(5000, "localhost", () => {
  console.log("server is started successfully");
});

// simply receiving get request to homepage '/', called home route
app.get("/", (req, res) => {
  res.send("List of all hotels.....");
});

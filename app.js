const express = require("express");
const fs = require("fs");
// express method will return an app
const app = express();

// read hotels.json file
const hotels = JSON.parse(fs.readFileSync("./data/hotels.json", "utf-8"));
// GET: localhost:5000/api/v1/hotels
app.get("/api/v1/hotels", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { hotels: hotels, count: hotels.length },
  });
});

module.exports = app;

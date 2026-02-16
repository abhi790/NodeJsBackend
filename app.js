const { count } = require("console");
const express = require("express");
const fs = require("fs");
// express method will return an app
const app = express();

app.use(express.json());
// read hotels.json file
const hotels = JSON.parse(fs.readFileSync("./data/hotels.json", "utf-8"));
// GET: localhost:5000/api/v1/hotels
app.get("/api/v1/hotels", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { hotels: hotels, count: hotels.length },
  });
});

// POST: localhost:3000/api/v1/hotels
app.post("/api/v1/hotels", (req, res) => {
  const newId = hotels[hotels.length - 1].id + 1;
  const newHotel = Object.assign({ id: newId }, req.body);
  hotels.push(newHotel);
  // Write
  fs.writeFile("./data/hotels.json", JSON.stringify(hotels), () => {
    res.status(201).json({
      status: "success",
      data: {
        hotels: newHotel,
        count: hotels.length,
      },
    });
  });
});

module.exports = app;

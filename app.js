const express = require("express");
const hotelController = require("./controller/hotelsController");
// express method will return an app
const app = express();

app.use(express.json());

// GET: localhost:5000/api/v1/hotels
app.get("/api/v1/hotels", hotelController.getAllHotels);

// POST: localhost:3000/api/v1/hotels
app.post("/api/v1/hotels", hotelController.createHotel);

// GET: localhost:5000/api/v1/hotels/:id
app.get("/api/v1/hotels/:id", hotelController.getHotelById);

// PATCH: localhost:5000/api/v1/hotels/:id
app.patch("/api/v1/hotels/:id", hotelController.updateHotel);

module.exports = app;

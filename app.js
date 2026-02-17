const express = require("express");
const hotelRouter = require("./routers/hotelsRouter");

// CREATING AN EXPRESS APP
const app = express();

// USING MIDDLEWARE
app.use(express.json());

// ADDING ROUTES FOR APP
// routes for hotels
app.use("/api/v1/hotels", hotelRouter);

module.exports = app;

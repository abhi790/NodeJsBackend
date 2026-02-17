const express = require("express");
const hotelController = require("./controller/hotelsController");
// express method will return an app
const app = express();

app.use(express.json());

// // GET: localhost:5000/api/v1/hotels
// app.get("/api/v1/hotels", hotelController.get);

// // POST: localhost:3000/api/v1/hotels
// app.post("/api/v1/hotels", hotelController.create);

// // GET: localhost:5000/api/v1/hotels/:id
// app.get("/api/v1/hotels/:id", hotelController.getById);

// // PATCH: localhost:5000/api/v1/hotels/:id
// app.patch("/api/v1/hotels/:id", hotelController.update);

// // PATCH: localhost:5000/api/v1/hotels/:id
// app.delete("/api/v1/hotels/:id", hotelController.deleteH);

// method chaining to follow DRY principle
app
  .route("/api/v1/hotels")
  .get(hotelController.get)
  .post(hotelController.create);

app
  .route("/api/v1/hotels/:id")
  .get(hotelController.getById)
  .patch(hotelController.update)
  .delete(hotelController.deleteH);

module.exports = app;

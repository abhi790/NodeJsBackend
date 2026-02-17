const express = require("express");
const hotelController = require("../controller/hotelsController");

const hotelRouter = express.Router();

// method chaining to follow DRY principle
hotelRouter.route("/").get(hotelController.get).post(hotelController.create);

hotelRouter
  .route("/:id")
  .get(hotelController.getById)
  .patch(hotelController.update)
  .delete(hotelController.deleteH);

module.exports = hotelRouter;

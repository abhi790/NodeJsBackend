const express = require("express");
const hotelController = require("../controller/hotelsController");

const hotelRouter = express.Router();

// mounting param middleware to our hotelRouter
// check hotel exist or not
hotelRouter.param("id", hotelController.checkHotelExist);

// method chaining to follow DRY principle
hotelRouter.route("/").get(hotelController.get).post(hotelController.create);

hotelRouter
  .route("/:id")
  .get(hotelController.getById)
  .patch(hotelController.update)
  .delete(hotelController.deleteH);

module.exports = hotelRouter;

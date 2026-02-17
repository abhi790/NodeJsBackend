const express = require("express");
const hotelController = require("../controller/hotelsController");

const hotelRouter = express.Router();

// mounting param middleware to our hotelRouter
// check hotel exist or not
hotelRouter.param("id", hotelController.checkHotelExist);

// method chaining to follow DRY principle
hotelRouter
  .route("/")
  .get(hotelController.get)
  .post(hotelController.validatePostBody, hotelController.create); //middleware chaining, so here validatePostBody will run first and then create will be executed, we can chain any no of middleware

hotelRouter
  .route("/:id")
  .get(hotelController.getById)
  .patch(hotelController.update)
  .delete(hotelController.deleteH);

module.exports = hotelRouter;

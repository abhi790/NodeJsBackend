const express = require("express");
const userController = require("../controller/usersController");

const usersRouter = express.Router();

// defining param middleware - has 5 parameter
const paramMiddleware = (req, res, next, value, name) => {
  console.log(`ID Route Parameter Value: ` + value);
  // need to call next() in order to give control to other middleware to perform it's task
  next();
};
// mounting param middleware on usersRouter
usersRouter.param("id", paramMiddleware); // will called if the url link contain id otherwise not get executed at all

// method chaining to follow DRY principle
usersRouter.route("/").get(userController.get).post(userController.create);
usersRouter
  .route("/:id")
  .get(userController.getById)
  .patch(userController.update)
  .delete(userController.deleteH);

module.exports = usersRouter;

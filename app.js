const express = require("express");
const hotelRouter = require("./routers/hotelsRouter");
const userRouter = require("./routers/usersRouter");
const morgan = require("morgan");

// CREATING AN EXPRESS APP
const app = express();

// custom middlewere need to have 3 parameter function
const logger = (req, res, next) => {
  console.log(`User requested method : ${req.method} and url is ${req.url}`);
  // next() mandatory task - need to call to give other middleware to execute their task
  next();
};

// USING MIDDLEWARE
app.use(express.json());

// using morgan middleware - morgan(format,options)
app.use(morgan("dev")); //run asynchronously so that it get status code and time took to respond , it is attached to finish event of the response object.

// setup middleware to use by the app
app.use(logger);

// ADDING ROUTES FOR APP
// routes for hotels
app.use("/api/v1/hotels", hotelRouter);
// routes for users
app.use("/api/v1/users", userRouter);

module.exports = app;

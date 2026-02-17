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
// Making our server capable of serving static files inside public folder
app.use(express.static("./public"));
app.use(morgan("dev"));
app.use(logger);
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});

// ADDING ROUTES FOR APP
// routes for hotels
app.use("/api/v1/hotels", hotelRouter);
// routes for users
app.use("/api/v1/users", userRouter);

module.exports = app;

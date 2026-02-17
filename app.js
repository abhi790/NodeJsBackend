const express = require("express");
const hotelRouter = require("./routers/hotelsRouter");

// CREATING AN EXPRESS APP
const app = express();

// USING MIDDLEWARE
app.use(express.json());
// custom middlewere need to have 3 parameter function
const logger = (req, res, next) => {
  console.log(`User requested method : ${req.method} and url is ${req.url}`);
  // next() mandatory task - need to call to give other middleware to execute their task
  next();
};
// setup middleware to use by the app
app.use(logger); //.use(logger) - logger will be executed for all the endpoints our app has hotels, users, staffs and so on
app.use("/api/v1/hotels", logger); // .use(path,logger) - logger will be executed for a particular endpoints(/api/v1/hotels) metioned and not for "/api/v1/users","/api/v1/staffs" etc., and this is true for all middleware

// ADDING ROUTES FOR APP
// routes for hotels
app.use("/api/v1/hotels", hotelRouter);

module.exports = app;

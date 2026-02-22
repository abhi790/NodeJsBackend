const app = require("./app");
const mongoose = require("mongoose");
const connString =
  "mongodb+srv://admin:test1234@myhotel-cluster.li5aws8.mongodb.net/bookmystay?appName=myhotel-cluster";
mongoose
  .connect(connString)
  .then((conn) => console.log("Connection to db is successful"))
  .catch((err) => console.log("Could not connect to db", err.message));

//   get the connection property to listen any event to the connection of database
// listen for any disconnection event to the database
mongoose.connection.on("disconnected", () => console.log("disconnected"));
// listen for open event
mongoose.connection.on("open", () => console.log("open"));
// listen for connected event
mongoose.connection.on("connected", () => console.log("connected"));

// start listening
app.listen(5000, "localhost", () => {
  console.log("server is started successfully");
});

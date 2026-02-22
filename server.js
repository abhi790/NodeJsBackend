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

// HOtel schema
const hotelSchema = new mongoose.Schema({
  // data validation
  name: {
    type: String,
    required: [true, "Hotel Name is required"],
    unique: [true, "Hotel Name must be unique"],
    minlength: [5, "Hotel Name must have minimum 5 characters"],
    maxlength: [100, "Hotel Name must have maximum 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Hotel Price is required"],
    min: [1000, "Hotel Price must be minimum 1000"],
    max: [10000, "Hotel Price must be maximum 10000"],
  },
  city: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
});

// Create Model mongoose.model(model name, schema, collections optional(automatically plural to model name))
const Hotel = mongoose.model("Hotel", hotelSchema);
const hotel1 = new Hotel({ name: "Hotel Taj 2", price: 1200, city: "Mumbai" });
hotel1
  .save()
  .then((resolve) => {
    console.log("Hotel Saved");
  })
  .catch((error) => {
    console.log("Didnot save the hotel", error.message);
  }); //save method run asynchronously

// start listening
app.listen(5000, "localhost", () => {
  console.log("server is started successfully");
});

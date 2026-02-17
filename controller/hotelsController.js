const fs = require("fs");

// read hotels.json file
const hotels = JSON.parse(fs.readFileSync("./data/hotels.json", "utf-8"));
// Get all hotels
const getAllHotels = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { hotels: hotels, count: hotels.length },
  });
};

// create new hotel
const createHotel = (req, res) => {
  const newId = hotels[hotels.length - 1].id + 1;
  const newHotel = Object.assign({ id: newId }, req.body);
  hotels.push(newHotel);
  // Write
  fs.writeFile("./data/hotels.json", JSON.stringify(hotels), () => {
    res.status(201).json({
      status: "success",
      data: {
        hotels: newHotel,
        count: hotels.length,
      },
    });
  });
};

// Get hotel by id
const getHotelById = (req, res) => {
  //   console.log(req.params); // {id : '1' }
  const id = Number(req.params.id);
  const hotel = hotels.find((hotel) => hotel.id === id);
  // if hotel doesn't exit
  if (!hotel) {
    return res.status(404).json({
      status: "success",
      data: {
        message: `Hotel with id : ${id} is not found`,
      },
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      hotel,
    },
  });
};

module.exports = {
  getAllHotels,
  createHotel,
  getHotelById,
};

/**
 * We can also export our handlerFunction shown below
 *
 * exports.handlerFunctionName = ()=>{}
 * for example :
 * exports.getAllHotels = (req, res) => {
 *  ..........
 * }
 *
 */

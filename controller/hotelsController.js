const fs = require("fs");

// read hotels.json file
const hotels = JSON.parse(fs.readFileSync("./data/hotels.json", "utf-8"));
const getAllHotels = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { hotels: hotels, count: hotels.length },
  });
};

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

module.exports = {
  getAllHotels,
  createHotel,
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

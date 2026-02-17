// get all users
const get = (req, res) => {
  res.send("All users");
};

// create an user
const create = (req, res) => {
  res.send("user created");
};

// get user by id
const getById = (req, res) => {
  res.send("user by id : " + req.params.id);
};

// update user
const update = (req, res) => {
  res.send("user updated id : " + req.params.id);
};

// delete an user
const deleteH = (req, res) => {
  res.send("user with id " + req.params.id + " deleted");
};

module.exports = {
  get,
  create,
  getById,
  update,
  deleteH,
};

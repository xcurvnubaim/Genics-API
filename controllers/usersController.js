const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message : "Get User Success",
      data : users
    })
  } catch (e) {
    res.status(500).json({
      message: "Get Users failed",
      data : e
    })
  }
};

const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saveUsers = await user.save();

    res.status(201).json({
      message : "Save User Success",
      data : saveUsers
    })
  } catch (error) {
    res.status(501).json({
      message: "Save Users failed",
      data : error
    })
  }
};


// Update a User
const updateUser = async (req, res) => {
  const UserId = req.params.id;
  const updateProd = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(UserId, updateProd, {
      new: true
    });

    res.status(200).json({
      message : "Update User Success",
      data : updateUser
    })
  } catch (error) {
    res.status(500).json({
      message: "Update User failed",
      data : error
    })
  }
};

// Delete a User
const deleteUser = async (req, res) => {
  const UserId = req.params.id;
  try {
    const deleteUser = await User.findByIdAndDelete(UserId);

    res.status(200).json({
      message : "Delete User Success",
      data : deleteUser
    })
  } catch (error) {
    res.status(500).json({
      message: "Delete User failed",
      data : error
    })
  }
};

module.exports = {
  getUsers,
  saveUser,
  updateUser,
  deleteUser
}
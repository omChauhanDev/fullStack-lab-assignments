const User = require("../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    console.log("getAllUsers route got a hit");
    const users = await User.find();
    res.status(200).json({
      status: "success",
      count: users.length,
      data: {
        users,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to get user list",
    });
  }
};

exports.getOneUser = async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to get one user",
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const users = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to create user",
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to update user",
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const users = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed to delete user",
    });
  }
};

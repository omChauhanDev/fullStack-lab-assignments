// User CRUD Routes
const express = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.route("/:id").get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;

// Task Routes
const {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const express = require("express");
const router = express.Router();

// endpoints - localhost:3000
router.route("/").get(getAllTasks).post(createTask);

// endpoints - localhost:3000/:id
router.route("/:id").get(getOneTask).put(updateTask).delete(deleteTask);

module.exports = router;

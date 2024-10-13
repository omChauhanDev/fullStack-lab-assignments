const express = require("express");
const router = express.Router();

router.use("/users", require("./userRoutes"));
router.use("/tasks", require("./taskRoutes"));

module.exports = router;

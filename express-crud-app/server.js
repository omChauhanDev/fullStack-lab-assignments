const express = require("express");
const mongoose = require("mongoose");
const app = express();

const {
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
} = require("./config/config");
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const indexRouter = require("./routes/indexRouter"); // Ensure this file has defined routes

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB");
    console.error(err);
  });

app.use(express.json());

// Middleware for logging requests
// app.use((req, res, next) => {
//   console.log("Request made to the server");
//   console.log(req.method, req.url);
//   next();
// });

// Routes
// app.use("/api/v1", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Started at PORT: ${PORT}`);
});

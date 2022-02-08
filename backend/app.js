const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

// Config Env
dotenv.config({ path: "./config/config.env" });

// Data
const book = require("./routes/bookRoute");

app.use(express.json());
app.use(cors());

app.use("/book", book);

app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;

const express = require("express");
const controller = require("../controller/bookController");
const routes = express.Router();
routes.route("/").post(controller.createBook).get(controller.getAllBook);

module.exports = routes;

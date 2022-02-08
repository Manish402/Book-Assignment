const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
    requred: [true, "A Books must have a Image"],
  },
  title: {
    type: String,
    required: [true, "A Books must have a Name"],
    uniquie: true,
    maxlength: [30, "Name cannot exceed 20 character"],
    trim: true,
  },
  author: {
    type: String,
    maxlength: [15, "Author cannot exceed 15 character"],
    required: [true, "A Books must have a Author"],
  },
  country: {
    type: String,
    required: [true, "A Books must have a Country"],
  },
  language: {
    type: String,
    required: [true, "A Books must have a language"],
  },
  pages: {
    type: Number,
    required: [true, "A Books must have a Pages"],
  },
  year: {
    type: Number,
  },
  link: {
    type: String,
  },
});

module.exports = new mongoose.model("blogModule", blogSchema);

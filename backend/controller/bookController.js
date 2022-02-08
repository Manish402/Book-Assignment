const Book = require("../module/bookmodule");

//create book details
exports.createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json({
    status: "true",
    book,
  });
};

//get all Book details
exports.getAllBook = async (req, res, next) => {
  const book = await Book.find();

  res.status(201).json({
    status: "true",
    book,
  });
};

//get only one blog

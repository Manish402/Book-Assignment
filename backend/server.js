const mongoose = require("mongoose");
const app = require("./app");

const DB = process.env.DB;

const PORT = process.env.PORT;
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connect!!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`backend is running on !!`);
});

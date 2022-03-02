const mongoose = require("mongoose");

// MONGODB CONNECTION URL
const url = `mongodb+srv://amit1554:aj1554@gotodo.rs1b7.mongodb.net/gotodo?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let connectionToDatabase = mongoose.connection;

connectionToDatabase.on("error", () => {
  console.log("error", "Error while connecting to database");
});

connectionToDatabase.on("connected", () => {
  console.log("connection to database is successfull");
});

module.exports = mongoose;

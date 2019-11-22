const mongoose = require("mongoose");
const Answer = require("./Answer");

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log("Mongoose default connection open to " + process.env.MONGO_URL);
});

// If the connection throws an error
mongoose.connection.on("error", err => {
  console.log("Mongoose default connection error: " + err);
});

module.exports = {
  Answer
};

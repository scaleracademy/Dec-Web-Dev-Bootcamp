const mongoose = require("mongoose");

const connectToDatabase = () => {
  // Connects to the MongoDB database

  const mongoURI = process.env.MONGO_URI;

  mongoose.connect(mongoURI, () => {
    console.log("Connected to the database");
  });
};

module.exports = connectToDatabase;

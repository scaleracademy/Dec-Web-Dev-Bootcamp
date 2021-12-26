const mongoose = require("mongoose");

const connectToDatabase = () => {
  // Connects to the MongoDB database
  mongoose.connect(
    "mongodb+srv://raghav:raghav@notetakingapp.eukln.mongodb.net/scaler",
    () => {
      console.log("Connected to the database");
    }
  );
};

module.exports = connectToDatabase;

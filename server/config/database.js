const mongoose = require("mongoose");

// const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/EFA');

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

// Call the function to connect to the database
// connectDatabase();

      // .then((data) => {
      //   console.log(`Mongodb connected with server: ${data.connection.host}`);
      //   // resolve();
      // })
      // .catch((err) => {
      //   console.error("MongoDB connection error:", err);
      //   // reject();
      // });
  


const closeDatabase = async () => {
  await mongoose.connection.close();
  console.log("Mongodb connection closed");
};

module.exports = {
  connectDatabase,
  closeDatabase,
};

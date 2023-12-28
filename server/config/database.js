const mongoose = require("mongoose");

const connectDatabase = async () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect("mongodb://localhost:27017/EFA")
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
        resolve();
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        reject();
      });
  });
};
//   await mongoose.connect("mongodb://localhost:27017/EFA").then((data) => {
//     console.log(`Mongodb connected with server: ${data.connection.host}`);
//   });

//   const db = mongoose.connection;

//   db.on("error", (err) => {
//     console.error("MongoDB connection error:", err);
//   });

//   db.once("open", () => {
//     console.log(`MongoDB connected to server: ${db.host}`);
//   });
// };
const closeDatabase = async () => {
  await mongoose.connection.close();
  console.log("Mongodb connection closed");
};

module.exports = {
  connectDatabase,
  closeDatabase,
};

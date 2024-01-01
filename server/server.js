const app = require("./app");
// const cloudinary = require("cloudinary");

const ticket = require("./models/ticketModel");
const team = require("./models/teamModel");
const match = require("./models/matchModel");
const referee = require("./models/refreeModel");
const stadium = require("./models/stadiumModel");
const user = require("./models/userModel");

const { connectDatabase, closeDatabase } = require("./config/database");




app.listen( 3001,() => {
  console.log("server is running")
  connectDatabase()

})

// const saveTeam = async (team) => {
//         try {
//           await team.save();
//           console.log("team saved");
//         } catch (error) {
//           console.log(error);
//         }}


// (async () => {
//   // Connect to the database
//   await connectDatabase();

//   // Create team instances
//   const hometeam = new team({
//     name: 'Manchester United',
//     logo: 'logo',
//   });
//   const awayteam = new team({
//     name: 'Liverpool',
//     logo: 'logo',
//   });

//   // Save teams
//   await saveTeam(hometeam);
//   await saveTeam(awayteam);

//   // Close the database connection
//   await closeDatabase();
// })();




// connectDatabase()
//   // .then(() => {
//     const hometeam = new team({
//       name: "manchester united",
//       logo: "logo",
//     });
//     const awayteam = new team({
//       name: "liverpool",
//       logo: "logo",
//     });
//     const saveTeam = async (team) => {
//       try {
//         await team.save();
//         console.log("team saved");
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     saveTeam(hometeam);
//     saveTeam(awayteam);
//   // })
//   // .then( () => {
//   // closeDatabase();
//   // })
  
// closeDatabase();
// const saveUser = async (ahmed) => {
//   try {
//     // await ahmed.save();
//     console.log("ahmed saved");

//     const foundUser = await user.findOne({ username: "ahmed" });
//     if (foundUser) {
//       console.log(foundUser);
//     } else {
//       console.log("User not found");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const ahmed = new user({
//   username: "ahmed",
//   password: "12345678",
//   firstname: "ahmed",
//   lastname: "ahmed",
//   gender: "M",
//   birthdate: "1999-01-01",
//   city: "cairo",
//   address: "cairo",
//   email: "aaaa@aaa.com",
//   role: "A",
// });

// const ahmedd = new user({
//   username: "ahmeda",
//   password: "12345678",
//   firstname: "ahmed",
//   lastname: "ahmed",
//   gender: "M",
//   birthdate: "1999-01-01",
//   city: "cairo",
//   address: "cairo",
//   email: "aaba@aaa.com",
//   role: "F",
// });
// saveUser(ahmedd);

// const hometeam = new team({
//   name: "manchester united",
//   logo: "logo",
// });
// const awayteam = new team({
//   name: "liverpool",
//   logo: "logo",
// });
// const saveTeam = async (team) => {
//   try {
//     await team.save();
//     console.log("team saved");
//   } catch (error) {
//     console.log(error);
//   }
// };
// saveTeam(hometeam);
// saveTeam(awayteam);

//  closeDatabase();
// // Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Uncaught Exception`);
//   process.exit(1);
// });

// // Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }

// // Connecting to database
// connectDatabase();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server is working on http://localhost:${process.env.PORT}`);
// });

// // Unhandled Promise Rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log(`Shutting down the server due to Unhandled Promise Rejection`);

//   server.close(() => {
//     process.exit(1);
//   });
// });

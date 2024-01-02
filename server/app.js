const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors")
const errorMiddleware = require("./middleware/error")




app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorMiddleware)

const user = require("./routes/userRoute");
const stadium = require("./routes/stadiumRoute");
const match = require("./routes/matchRoute");


app.use("/api/user", user);
app.use("/api/stadium", stadium);
app.use("/api/match", match);


// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

// Middleware for Errors
// app.use(errorMiddleware);

module.exports = app;

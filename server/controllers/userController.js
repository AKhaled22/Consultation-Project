const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const key = "jndskjnwkjniefhwbnfvhbef";

// Register a User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userData = await User.findOne({ email: email, password: password });
  let token = null;
  if (userData != null) {
    //valid user

    token = jwt.sign(
      {
        data: userData._id,
      },
      key,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      isValid: true,
      Token: token,
      Role: userData.role,
    });
  } else {
    res.status(400).json({
      isValid: false,
    });
  }

  //console.log(userData, token);
};

exports.registerUser = async (req, res) => {
  const {
    username,
    password,
    firstName,
    lastName,
    dob,
    gender,
    city,
    address,
    email,
    type,
  } = req.body;
  const newUser = new User({
    address: address,
    approved: false,
    birthdate: dob,
    city: city,
    email: email,
    firstname: firstName,
    gender: gender,
    lastname: lastName,
    password: password,
    role: type,
    username: username,
  });
  let token = null;
  try {
    const userData = await newUser.save();

    token = jwt.sign(
      {
        data: userData._id,
      },
      key,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "User Saved Successfully!",
      Token: token,
      Role: userData.role,
    });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.status(405).json({
        error: `${Object.keys(err.keyValue)[0]} already used!`,
      });
    } else {
      res.status(404).json({
        err,
      });
    }
  }
};

// exports.editDetails = async (req, res) => {
//   const token = req.headers.Authorization;
//   const userID = jwt.verify(token, key);
// };
exports.editDetails = async (req, res) => {
  const a = req.body;
};
exports.getDetails = async (req, res) => {
  const userID = req.body;
};

exports.getRole = async (req, res) => {
  const {authorization} = req.headers;
  console.log("token1 " , authorization);
  if (authorization != undefined) {
    try{
    var decoded = jwt.verify(authorization, key);
    console.log("decoded \n");
    console.log(decoded);
    
  //   // console.log(token);

    const user = await User.findById(decoded.data);

    if (!user) {
      res.status(401).json({
        Role: "G",
      });
    } else {
      console.log("\n\n");
      console.log(user.role);
      // console.log(user);
      console.log("\n\n");
      res.status(200).json({
        Role: user.role,
      });
    }

  }catch(errr){
    res.status(401).json({
      Role: "G",
    });

  }

  } else {
    res.status(401).json({
      Role: "G",
    });
  }
};

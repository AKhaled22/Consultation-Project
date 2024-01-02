const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const key = "jndskjnwkjniefhwbnfvhbef";

exports.isAuthenticatedUser = async (req, res, next) => {
  const {authorization} = req.headers;

  // const {token} = req.cookie
  if (authorization!=undefined) {
    var decoded = jwt.verify(token, key);

    const user = User.findById(decoded.data);
    if (!user) {
      const err = new Error("Unauthorized User!");
      err.status = 401;
      next(err);
    } else {
      next();
    }
  } else {
    const err = new Error("Unauthorized User!");
    err.status = 401;
    next(err);
  }

  // console.log(decoded.foo) // bar
};

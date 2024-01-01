
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const key =  "jndskjnwkjniefhwbnfvhbef"


exports.isAuthenticatedUser = async (req, res, next) => {
  const {token} = req.cookie
 
  var decoded = jwt.verify(token, key);

  const user = User.findById(decoded)

  if(!user){
    const err = new Error("Unauthorized User!")
    err.status = 401
    next(err)
  }else{
    
    next()

  }


  // console.log(decoded.foo) // bar

};




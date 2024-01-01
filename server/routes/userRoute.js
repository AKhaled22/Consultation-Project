const express = require("express");
const {
  loginUser,
  registerUser,

} = require("../controllers/userController");
// da mohem hahoto ka middleware lelhagat el hatehtag authentication
// const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// router.route("/forgetpassword")

module.exports = router;

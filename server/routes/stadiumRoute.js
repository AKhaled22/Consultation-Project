const express = require("express");
const {
  addstadium
} = require("../controllers/stadiumController");


const router = express.Router();

router.route("/addstadium").post(addstadium);

module.exports = router;
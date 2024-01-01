const express = require("express");
const { viewMatches } = require("../controllers/matchController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/viewMatches").get(isAuthenticatedUser, viewMatches);

module.exports = router;

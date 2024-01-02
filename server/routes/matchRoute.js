const express = require("express");
const { viewMatches , getMatch , reserveTickets } = require("../controllers/matchController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/viewMatches").get(viewMatches);
router.route("/getmatch/:matchId").get(getMatch);
router.route("/reservetickets/:matchId").post(reserveTickets);


module.exports = router;

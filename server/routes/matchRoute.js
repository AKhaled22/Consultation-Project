const express = require("express");
const {
  viewMatches,
  viewReferee,
  viewStadium,
  creatematch,
  viewTeam,
  editMatch,
  getMatch,
  reserveTickets,
} = require("../controllers/matchController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/viewMatches").get(viewMatches);
router.route("/getmatch/:matchId").get(getMatch);
router.route("/reservetickets/:matchId").post(reserveTickets);

router.route("/viewReferee").get(viewReferee);
router.route("/viewTeam").get(viewTeam);
router.route("/viewStadium").get(viewStadium);
router.route("/creatematch").post(creatematch);
router.route("/editMatch/:matchID").post(editMatch);
router.route("/getMatch/:matchID").get(getMatch);
module.exports = router;

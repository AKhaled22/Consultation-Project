const express = require("express");
const { viewMatches } = require("../controllers/matchController");
const { createMatches } = require("../controllers/matchController");
const { viewTeam } = require("../controllers/matchController");
const { viewReferee } = require("../controllers/matchController");
const {viewStadium}=require("../controllers/matchController");
const {creatematch}=require("../controllers/matchController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/viewMatches").get(viewMatches);
router.route("/viewReferee").get(viewReferee);
router.route("/viewTeam").get(viewTeam);
router.route("/viewStadium").get(viewStadium);
router.route("/creatematch").post(creatematch);

module.exports = router;
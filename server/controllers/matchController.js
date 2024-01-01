const Match = require("../models/matchModel");

exports.viewMatches = async (req, res) => {
  const matches = await Match.find();
  console.log(matches);
  res.status(200).json({
    matches: matches,
  });
};

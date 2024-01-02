const Match = require("../models/matchModel");
const Ref = require("../models/refreeModel");
const Team = require("../models/teamModel");
const Stadium = require("../models/stadiumModel");

exports.viewMatches = async (req, res) => {
  const matches = await Match.find();
  //await?
  const mappedMatches = await Promise.all(
    matches.map(async (match) => ({
      matchID: match._id,
      homeTeam: (await Team.findOne({ _id: match.hometeam })).name,
      homeTeamLogo: (await Team.findOne({ _id: match.hometeam })).logo,
      awayTeam: (await Team.findOne({ _id: match.awayteam })).name,
      awayTeamLogo: (await Team.findOne({ _id: match.awayteam })).logo,
      stadium: (await Stadium.findOne({ _id: match.stadium })).name,
      date: match.date,
      time: match.time,
      mainReferee: (await Ref.findOne({ _id: match.referee })).name,
      linesman1: (await Ref.findOne({ _id: match.linesmen[0] })).name,
      linesman2: (await Ref.findOne({ _id: match.linesmen[1] })).name,
    }))
  );
  // const mappedMatches = matches.map((match) => ({
  //   homeTeam: Team.findOne({ _id: match.hometeam }).name,
  //   homeTeamLogo: Team.findOne({ _id: match.hometeam }).logo,
  //   awayTeam: Team.findOne({ _id: match.awayteam }).name,
  //   awayTeamLogo: Team.findOne({ _id: match.awayteam }).logo,
  //   stadium: Stadium.findOne({ _id: match.stadium }).name,
  //   date: match.date,
  //   time: match.time,
  //   mainReferee: Ref.findOne({ _id: match.referee }).name,
  //   linesMan1: Ref.findOne({ _id: match.linesmen[0] }).name,
  //   linesMan2: Ref.findOne({ _id: match.linesmen[1] }).name,
  //   //reservedseats: match.reservedseats, //AAO
  //   //ticketprice: match.ticketprice,
  // }));
  // console.log("ANNNNNNNNNNNNNNNNNNNNNNNNNNN\n\n");
  // //console.log("Mapped Matches: ", JSON.stringify(mappedMatches, null, 2));
  // mappedMatches.forEach((match) => {
  //   console.log(match);
  // });
  // console.log("ANNNNNNNNNNNNNNNNNNNNNNNNNNN\n\n");
  // console.log(matches);
  res.status(200).json({
    matches: mappedMatches,
  });
};

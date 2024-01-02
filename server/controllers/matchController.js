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
  res.status(200).json({
    matches: mappedMatches,
  });
};

exports.viewReferee = async (req, res) => {
  const referees = await Ref.find();
  const refreesname = referees.map((referee) => referee.name);
  res.status(200).json({
    refreesname,
  });
};

exports.viewTeam = async (req, res) => {
  const teams = await Team.find();
  const teamsname = teams.map((team) => team.name);
  res.status(200).json({
    teamsname,
  });
};

exports.viewStadium = async (req, res) => {
  const stadium = await Stadium.find();
  const stadiumname = stadium.map((stad) => stad.name);
  res.status(200).json({
    stadiumname,
  });
};

exports.creatematch = async (req, res) => {
  console.log("hello");
  const {
    HomeTeam,
    AwayTeam,
    MatchVenue,
    date,
    time,
    MainReferee,
    Linesman1,
    Linesman2,
    Ticketprice,
  } = req.body;
  const home = (await Team.findOne({ name: HomeTeam }))._id;
  const away = (await Team.findOne({ name: AwayTeam }))._id;
  const avenue = (await Stadium.findOne({ name: MatchVenue }))._id;
  const main = (await Ref.findOne({ name: MainReferee }))._id;
  const line1 = (await Ref.findOne({ name: Linesman1 }))._id;
  const line2 = (await Ref.findOne({ name: Linesman2 }))._id;
  console.log("hello");
  const newmatch = new Match({
    hometeam: home,
    awayteam: away,
    stadium: avenue,
    date: date,
    time: time,
    referee: main,
    linesmen: [line1, line2],
    ticketprice: Ticketprice,
  });
  console.log("hello1");
  try {
    const matchdata = await newmatch.save();
    if (res.statusCode === 200) {
      console.log("hello");
    }
    return res.status(200).json({
      message: "Match added successfully",
      match: matchdata,
    });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.status(405).json({
        error: `${Object.keys(err.keyValue)[0]} already used!`,
      });
    } else {
      res.status(404).json({
        err,
      });
    }
  }
};

exports.editMatch = async (req, res) => {};

exports.getMatch = async (req, res) => {};

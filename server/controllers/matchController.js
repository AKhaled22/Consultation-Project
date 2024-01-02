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
  const findmatch = await Match.findOne({
    stadium: avenue,
    date: date,
    time: time,
  });
  const findmatch1 = await Match.findOne({
    $or: [{ referee: main }, { "linesmen.0": main }, { "linesmen.1": main }],
    date: date,
    time: time,
  });
  const findmatch2 = await Match.findOne({
    $or: [{ referee: line1 }, { "linesmen.0": line1 }, { "linesmen.1": line1 }],
    date: date,
    time: time,
  });
  const findmatch3 = await Match.findOne({
    $or: [{ referee: line2 }, { "linesmen.0": line2 }, { "linesmen.1": line2 }],
    date: date,
    time: time,
  });
  const findmatch4 = await Match.findOne({
    $or: [{ hometeam: home }, { awayteam: home }],
    date: date,
    time: time,
  });
  const findmatch5 = await Match.findOne({
    $or: [{ hometeam: away }, { awayteam: away }],
    date: date,
    time: time,
  });

  if (
    !findmatch &&
    !findmatch1 &&
    !findmatch2 &&
    !findmatch3 &&
    !findmatch4 &&
    !findmatch5
  ) {
    try {
      const matchdata = await newmatch.save();
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
          error: err.message,
        });
      }
    }
  } else {
    return res.status(405).json({
      error: findmatch
        ? `Error: Another match already exists in this venue on the same date and time!`
        : findmatch1
        ? `Error: Main Referee is already assigned to another match on the same date and time!`
        : findmatch2
        ? `Error: Linesman 1 is already assigned to another match on the same date and time!`
        : findmatch3
        ? `Error: Linesman 2 is already assigned to another match on the same date and time!`
        : findmatch4
        ? `Error: Home team '${HomeTeam}' is already assigned to another match on the same date and time!`
        : findmatch5
        ? `Error: Away team '${AwayTeam}' is already assigned to another match on the same date and time!`
        : `Error: Match not added successfully`,
    });
  }
};

exports.editMatch = async (req, res) => {
  try {
    console.log("fi edit match");
    console.log(req.params.matchID);
    const match = await Match.findById(req.params.matchID);

    if (!match) {
      res.status(401).json({
        error: "match not found!",
      });
    } else {
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
      match.hometeam = home;
      match.awayteam = away;
      match.stadium = avenue;
      match.date = date;
      match.time = time;
      match.referee = main;
      match.linesmen = [line1, line2];
      match.ticketprice = Ticketprice;
      console.log("hello1");
      const findmatch = await Match.findOne({
        _id: { $ne: req.params.matchID },
        stadium: avenue,
        date: date,
        time: time,
      });
      const findmatch1 = await Match.findOne({
        _id: { $ne: req.params.matchID },
        $or: [
          { referee: main },
          { "linesmen.0": main },
          { "linesmen.1": main },
        ],
        date: date,
        time: time,
      });
      const findmatch2 = await Match.findOne({
        _id: { $ne: req.params.matchID },
        $or: [
          { referee: line1 },
          { "linesmen.0": line1 },
          { "linesmen.1": line1 },
        ],
        date: date,
        time: time,
      });
      const findmatch3 = await Match.findOne({
        _id: { $ne: req.params.matchID },
        $or: [
          { referee: line2 },
          { "linesmen.0": line2 },
          { "linesmen.1": line2 },
        ],
        date: date,
        time: time,
      });
      const findmatch4 = await Match.findOne({
        _id: { $ne: req.params.matchID },
        $or: [{ hometeam: home }, { awayteam: home }],
        date: date,
        time: time,
      });
      const findmatch5 = await Match.findOne({
        _id: { $ne: req.params.matchID },
        $or: [{ hometeam: away }, { awayteam: away }],
        date: date,
        time: time,
      });
      if (
        !findmatch &&
        !findmatch1 &&
        !findmatch2 &&
        !findmatch3 &&
        !findmatch4 &&
        !findmatch5
      ) {
        try {
          await match.save();
          res.status(200).json({
            message: "match Updated Successfully!",
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
      } else {
        return res.status(405).json({
          error: findmatch
            ? `Error: Another match already exists in this venue on the same date and time!`
            : findmatch1
            ? `Error: Main Referee is already assigned to another match on the same date and time!`
            : findmatch2
            ? `Error: Linesman 1 is already assigned to another match on the same date and time!`
            : findmatch3
            ? `Error: Linesman 2 is already assigned to another match on the same date and time!`
            : findmatch4
            ? `Error: Home team '${HomeTeam}' is already assigned to another match on the same date and time!`
            : findmatch5
            ? `Error: Away team '${AwayTeam}' is already assigned to another match on the same date and time!`
            : `Error: Match not added successfully`,
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      error: "match not found!",
    });
  }
};

exports.getMatch = async (req, res) => {
  //const { authorization } = req.headers; //AAO
  //if (authorization != undefined) {
  console.log("HENA PARAMS");
  console.log(req.params.matchID);
  try {
    //var decoded = jwt.verify(authorization, key);
    const match = await Match.findById(req.params.matchID);
    console.log("MATCH HENAAA", match);
    if (!match) {
      res.status(401).json({
        error: "match not found!",
      });
    } else {
      console.log("ANA HENA match");
      console.log(match);
      const matchVals = {
        matchID: match._id,
        hometeam: (await Team.findOne({ _id: match.hometeam })).name,
        awayteam: (await Team.findOne({ _id: match.awayteam })).name,
        stadium: (await Stadium.findOne({ _id: match.stadium })).name,
        date: match.date,
        time: match.time,
        referee: (await Ref.findOne({ _id: match.referee })).name,
        linesman1: (await Ref.findOne({ _id: match.linesmen[0] })).name,
        linesman2: (await Ref.findOne({ _id: match.linesmen[1] })).name,
        ticketprice: match.ticketprice,
      };
      res.status(200).json({
        match: matchVals,
      });
      console.log("ANA HENA match");
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      error: "Error:Match not found!",
    });
  }
  // } else {
  //   res.status(401).json({
  //     error: "User not found!",
  //   });
  //}
};

const Match = require("../models/matchModel");
const Referee = require("../models/refreeModel")
const Stadium = require("../models/stadiumModel")
const Team = require("../models/teamModel")
const User = require("../models/userModel")
const Ticket = require("../models/ticketModel")
const jwt = require("jsonwebtoken")
const key = "jndskjnwkjniefhwbnfvhbef";


exports.viewMatches = async (req, res) => {
  const matches = await Match.find();
  console.log(matches);
  res.status(200).json({
    matches: matches,
  });
};



exports.getMatch = async (req, res) => {
  const matchId = req.params.matchId
  console.log("matchid", matchId);
  try{
    const match = await Match.findById(matchId)
    const mainRef = await Referee.findById(match.referee)
    const sideRef1 = await Referee.findById(match.linesmen[0])
    const sideRef2 = await Referee.findById(match.linesmen[1])
    const stad = await Stadium.findById(match.stadium)
    const homeTeam = await Team.findById(match.hometeam)
    const awayTeam = await Team.findById(match.awayteam)
    console.log(match)
    res.status(200).json({
      "match": {
        homeTeam: homeTeam.name,
        homeTeamLogo: "ManchesterUnitedLogo",
        awayTeam: awayTeam.name,
        awayTeamLogo: "LiverpoolLogo",
        stadium: stad.name,
        date: match.date,
        Time: match.time,
        mainReferee: mainRef.name,
        linesman1: sideRef1.name,
        linesman2: sideRef2.name,
        reservedSeats: match.reservedseats,
        ticketPrice: match.ticketprice,
        rows:stad.seatsrowcapcity,
        cols: stad.seatscolcapcity
      }
    })

  }catch(err){
    res.status(404).json({ error: "Error in retrieving match!" })

  }

  

}


exports.reserveTickets = async (req , res) => {
  const matchId = req.params.matchId
  const {authorization} = req.headers
  const selectedSeatsArr = req.body
  console.log("matchId" , matchId)
  console.log("authorization" , authorization)
  console.log("selectedSeatsArr" , selectedSeatsArr)

  try{
    const decoded = jwt.verify(authorization,key)
    const user = await User.findById(decoded.data);
    if(user.role != "F"){
      throw("Unauthorized User!")
    }else{

      const match = await Match.findById(matchId)
      for(let i=0 ; i<selectedSeatsArr.length;i++){
        const newTicket = new Ticket({
          match: matchId,
          seat:selectedSeatsArr[i],
          user:user.id

        })

        await newTicket.save()

        console.log(match.reservedseats , match.reservedSeats)
        const updatingSeats = await Match.updateOne({_id:matchId} , {reservedseats: [...match.reservedseats, ...selectedSeatsArr]})
  
        console.log(updatingSeats)
        res.status(200).json({
          reservedSeats:  [...match.reservedseats, ...selectedSeatsArr]
        })
        
      }







    }



  }catch(err){

    console.log(err)
    res.status(404).json({error:"Unauthorized User!"})
  }


}

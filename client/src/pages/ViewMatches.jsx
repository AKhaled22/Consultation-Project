import React, { useEffect, useState } from "react";
import MatchDetails from "../components/MatchDetails";
import Header from "../components/Header";
import ManchesterUnitedLogo from "../assets/Manchester_United_FC_crest.svg.png";
import LiverpoolLogo from "../assets/Liverpool_FC.svg.png";
import ZamalekLogo from "../assets/ZamalekSC.png";
import AlAhlyLogo from "../assets/AlAhly.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../features/pageSlice";
// const teamLogoMapping = [
//   ManchesterUnitedLogo,
//   LiverpoolLogo,
//   ZamalekLogo,
//   AlAhlyLogo,
// ];
const ViewMatches = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    dispatch(setActivePage("viewmatches")); //A
    const getMatches = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/match/viewMatches"
        );

        if (res.status === 200) {
          setMatches(res.data.matches);
          // console.log("MATCHES", matches);
          // console.log(res.data.matches);
        }
      } catch (err) {
        console.log(err);
        navigate("/home");
      }
    };
    getMatches();
  }, []);

  return (
    <div>
      <Header />
      <h2 className="match-details-title">Matches</h2>
      {matches.length > 0 ? (
        matches.map((match) => (
          /* console.log("TEAM MAP", teamLogoMapping[match.homeTeamLogo]),
            (match.homeTeamLogo = teamLogoMapping[match.homeTeamLogo]), */
          /* console.log(match.homeTeamLogo),
            console.log(match),
            (console.log("STARTT"),
            console.log("Match Object:", match),
            console.log(match.homeTeamLogo),
            console.log(match.homeTeam),
            console.log(match.awayTeamLogo),
            console.log(match.awayTeam),
            console.log(match.stadium),
            console.log(match.date),
            console.log(match.time),
            console.log(match.mainReferee),
            console.log(match.linesman1),
            console.log(match.linesman2),
            console.log("END"), */
          <MatchDetails
            homeTeamLogo={match.homeTeamLogo}
            homeTeam={match.homeTeam}
            awayTeamLogo={match.awayTeamLogo}
            awayTeam={match.awayTeam}
            stadium={match.stadium}
            date={match.date}
            Time={match.time}
            mainReferee={match.mainReferee}
            linesman1={match.linesman1}
            linesman2={match.linesman2}
          />
        ))
      ) : (
        <p>No matches available</p>
      )}
    </div>
  );
};

export default ViewMatches;

import React, { useEffect } from "react";
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

const ViewMatches = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setActivePage("viewmatches"));
    const getMatches = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/match/viewMatches"
        );

        if (res.status === 200) {
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
        navigate("/home");
      }
    };
    getMatches();
  }, []);

  const matches = [
    {
      homeTeam: "Manchester United",
      homeTeamLogo: ManchesterUnitedLogo,
      awayTeam: "Manchester City",
      awayTeamLogo: LiverpoolLogo,
      stadium: "Old Trafford",
      date: "2021-10-24",
      Time: "12:10",
      mainReferee: "Michael Oliver",
      linesman1: "Stuart Burt",
      linesman2: "Simon Bennett",
    },
    {
      homeTeam: "Zamalek",
      homeTeamLogo: ZamalekLogo,
      awayTeam: "Al Ahly",
      awayTeamLogo: AlAhlyLogo,
      stadium: "Cairo Stadium",
      date: "2021-10-24",
      Time: "00:20",
      mainReferee: "Mohamed Farouk",
      linesman1: "Ahmed Samir",
      linesman2: "Mohamed Ahmed",
    },
    {
      homeTeam: "Zamalek",
      homeTeamLogo: ZamalekLogo,
      awayTeam: "Al Ahly",
      awayTeamLogo: AlAhlyLogo,
      stadium: "Cairo Stadium",
      date: "2021-10-24",
      Time: "00:20",
      mainReferee: "Mohamed Farouk",
      linesman1: "Ahmed Samir",
      linesman2: "Mohamed Ahmed",
    },
    {
      homeTeam: "Zamalek",
      homeTeamLogo: ZamalekLogo,
      awayTeam: "Al Ahly",
      awayTeamLogo: AlAhlyLogo,
      stadium: "Cairo Stadium",
      date: "2021-10-24",
      Time: "00:20",
      mainReferee: "Mohamed Farouk",
      linesman1: "Ahmed Samir",
      linesman2: "Mohamed Ahmed",
    },
  ];
  return (
    <div>
      <Header />
      <h2 className="match-details-title">Matches</h2>
      {matches.map((match) => {
        return (
          <MatchDetails
            homeTeamLogo={match.homeTeamLogo}
            homeTeam={match.homeTeam}
            awayTeamLogo={match.awayTeamLogo}
            awayTeam={match.awayTeam}
            stadium={match.stadium}
            date={match.date}
            Time={match.Time}
            mainReferee={match.mainReferee}
            linesman1={match.linesman1}
            linesman2={match.linesman2}
          />
        );
      })}
      ;
    </div>
  );
};

export default ViewMatches;

import React, { useState, useEffect } from "react";
import sponsors from "../assets/sponsors.png";
import MatchDetails from "../components/MatchDetails";
import ZamalekLogo from "../assets/ZamalekSC.png";
import AlAhlyLogo from "../assets/AlAhly.png";
import PyramidsLogo from "../assets/Pyramids_FC.png";
import Ceramica from "../assets/CCFC.png";
import Future from "../assets/FutureFc.png";
import Masry from "../assets/Al_Masry_SC.png";
import Bank from "../assets/NBA.png";

import Mok from "../assets/Mok.png";
import TalGeesh from "../assets/TalGeesh.png";
import Alex from "../assets/Alex.png";
import Phar from "../assets/Phar.png";
import Smouha from "../assets/Smo.png";
import Enp from "../assets/Enp.png";
import Zed from "../assets/ZED.png";
import Ismaily from "../assets/Ism.png";
import Mahla from "../assets/Bald.png";
import Dakh from "../assets/Dakh.png";
import Gouna from "../assets/Go.png";
import stadLogo from "../assets/stad.png";
import whistle from "../assets/whistle.png";
import sideRefLogo from "../assets/sideRefLogo.png";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../features/pageSlice";
import { setUserType } from "../features/userSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    // dispatch(setActivePage("home")); //AAO
    const getRole = async () => {
      try {
        console.log(localStorage.getItem("Token"));
        const res = await axios.get("http://localhost:3001/api/user/getRole", {
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        });
        console.log(res);
        if (res.status === 200) {
          dispatch(setUserType(res.data.Role));
          // localStorage.setItem("Role", res.data.Role);
        }
      } catch (err) {
        console.log(err);
        // localStorage.setItem("Role", "G");
        dispatch(setUserType("G"));
      }
    };
    const getMatches = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/match/viewMatches"
        );

        if (res.status === 200) {
          setMatches(res.data.matches);
          console.log("MATCHES", matches);
          console.log(res.data.matches);
        }
      } catch (err) {
        console.log(err);
        // navigate("/home");
      }
    };
    getMatches();
    getRole();
  }, []);

  const [activePage, setActivePage] = useState(1); //kont 3amlha 2 leh ya mido AAO
  const pageSize = 2;

  const handleOnClick = (i) => {
    if (i == 0) {
      if (activePage > 1) {
        setActivePage(activePage - 1);
      }
    } else if (i == numOfPages + 1) {
      if (activePage < numOfPages) {
        setActivePage(activePage + 1);
      }
    } else {
      setActivePage(i);
    }
    console.log(activePage);
  };
  const numOfPages = Math.ceil(matches.length / pageSize);
  let items = [];
  items.push(
    <Pagination.Prev
      onClick={() => {
        handleOnClick(0);
      }}
    />
  );
  for (let i = 1; i <= numOfPages; i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={activePage == i}
        onClick={() => {
          handleOnClick(i);
        }}
      >
        {i}
      </Pagination.Item>
    );
  }
  items.push(
    <Pagination.Next
      onClick={() => {
        handleOnClick(numOfPages + 1);
      }}
    />
  );

  const matchesToShow = matches.slice(
    (activePage - 1) * pageSize,
    (activePage - 1) * pageSize + pageSize
  );

  return (
    <>
      <div className="loginHeader">
        <img src={sponsors} width="100%" height="auto" />
      </div>
      {/* <div className='homepage-container'> */}
      <div className="homepage-container">
        {/* <div> */}

        <div className="matchdetails-home">
          <div className="matchdetailscards-home">
            {matches.length > 0 ? (
              matchesToShow.map((match) => {
                return (
                  <MatchDetails
                    matchID={match.matchID}
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
                    stadLogo={stadLogo}
                    whistle={whistle}
                    sideRefLogo={sideRefLogo}
                    hideButton={true}
                  />
                );
              })
            ) : (
              <p>No matches available</p>
            )}
          </div>
          <Pagination>{items}</Pagination>
        </div>

        <div className="meet-the-teams">
          {/* <h3>Meet the Teams</h3> */}
          <div className="image-slider">
            <img className="logos-sidebar" src={ZamalekLogo} />
            <img className="logos-sidebar" src={AlAhlyLogo} />
            <img className="logos-sidebar" src={PyramidsLogo} />
            <img className="logos-sidebar" src={Ceramica} />
            <img className="logos-sidebar" src={Future} />
            <img className="logos-sidebar" src={Masry} />
            <img className="logos-sidebar" src={Bank} />
            <img className="logos-sidebar" src={Mok} />
            <img className="logos-sidebar" src={TalGeesh} />
            <img className="logos-sidebar" src={Alex} />
            <img className="logos-sidebar" src={Phar} />
            <img className="logos-sidebar" src={Smouha} />
            <img className="logos-sidebar" src={Enp} />
            <img className="logos-sidebar" src={Zed} />
            <img className="logos-sidebar" src={Ismaily} />
            <img className="logos-sidebar" src={Mahla} />
            <img className="logos-sidebar" src={Dakh} />
            <img className="logos-sidebar" src={Gouna} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

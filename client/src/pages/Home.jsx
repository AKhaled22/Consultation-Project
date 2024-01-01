import React, { useState, useEffect } from "react";
import sponsors from "../assets/sponsors.png";
import MatchDetails from "../components/MatchDetails";
import ManchesterUnitedLogo from "../assets/Manchester_United_FC_crest.svg.png";
import LiverpoolLogo from "../assets/Liverpool_FC.svg.png";
import ZamalekLogo from "../assets/ZamalekSC.png";
import AlAhlyLogo from "../assets/AlAhly.png";
import stadLogo from "../assets/stad.png";
import whistle from "../assets/whistle.png";
import sideRefLogo from "../assets/sideRefLogo.png";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch , useSelector } from "react-redux";
import { setActivePage } from "../features/pageSlice";
import { setUserType } from "../features/userSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();


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
          dispatch(setUserType(res.data.Role))
          // localStorage.setItem("Role", res.data.Role);
        }
      } catch (err) {
        console.log(err);
        // localStorage.setItem("Role", "G");
        dispatch(setUserType("G"))

      }
    };
    getRole();
  }, []);

  const [activePage, setActivePage] = useState(2);
  const pageSize = 2;
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
            {matches &&
              matchesToShow.map((match) => {
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
                    stadLogo={stadLogo}
                    whistle={whistle}
                    sideRefLogo={sideRefLogo}
                    hideButton={true}
                  />
                );
              })}
          </div>
          <Pagination>{items}</Pagination>
        </div>

        <div className="meet-the-teams">
          {/* <h3>Meet the Teams</h3> */}
          <div className="image-slider">
            <img className="logos-sidebar" src={AlAhlyLogo} />
            <img className="logos-sidebar" src={ZamalekLogo} />
            <img className="logos-sidebar" src={ManchesterUnitedLogo} />
            <img className="logos-sidebar" src={LiverpoolLogo} />
            <img className="logos-sidebar" src={LiverpoolLogo} />
            <img className="logos-sidebar" src={LiverpoolLogo} />
            <img className="logos-sidebar" src={LiverpoolLogo} />
            <img className="logos-sidebar" src={LiverpoolLogo} />
            <img className="logos-sidebar" src={LiverpoolLogo} />
            <img className="logos-sidebar" src={LiverpoolLogo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

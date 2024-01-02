import React, { useEffect, useState } from "react";
import MyForm from "../components/MyForm";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import SidebarData from "../assets/Data/ManagerSideBarData";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../features/pageSlice";
import moment from 'moment';


const CreateMatch = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState(null);

  const [referee, setreferee] = useState([]);

  const [values, setValues] = useState({});
  let match = {};
  useEffect(() => {
    const getmatchdetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/match/getMatch"
        //   {
        //     headers: {
        //       Authorization: localStorage.getItem("Token"),
        //     },
        //   }
        );
        console.log(res.data.match);
        match = res.data.match;

        const date = new Date(match.date);
        const formattedDate = moment(date).format("YYYY-MM-DD");
        setValues({
            HomeTeam: match.hometeam,
            AwayTeam: match.awayteam,
            MatchVenue: match.stadium,
            date: formattedDate,
            time: match.time,
            MainReferee: match.referee,
            Linesman1: match.linesmen[0],
            Linesman2: match.linesmen[1],
            Ticketprice: match.ticketprice,
        });
        // console.log("INPCITY", match.city);
        console.log(values);
        console.log(match);
        // match = res.data.match;
        // console.log("HAAHAHHAHAHAHAHAHAHAHAHA");
        // console.log(match.username);
      } catch (err) {
        console.log(err);
      }
    };

    dispatch(setActivePage("editmatch"));
    getmatchdetails();
  }, []);


  useEffect(() => {
    const getreferees = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/match/viewReferee"
        );

        if (res.status === 200) {
          setreferee(res.data.refreesname);
          console.log(res.data.refreesname);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getreferees();
    console.log(referee);
  }, []);
 
  const [team, setteam] = useState([]);

  useEffect(() => {
    const getteam = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/match/viewTeam");

        if (res.status === 200) {
          setteam(res.data.teamsname);
          console.log(res.data.teamsname);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getteam();
    console.log(team);
  }, []);

  const [stadium, setstadium] = useState([]);

  useEffect(() => {
    const getstadium = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/match/viewStadium"
        );

        if (res.status === 200) {
          setstadium(res.data.stadiumname);
          console.log(res.data.stadiumname);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getstadium();
    console.log(stadium);
  }, []);

  const inputArr = [
    {
      type: "dropdown",
      label: "Home Team",
      placeholder: "Al Ahly",
      name: "HomeTeam",
      optionsArr: team,
      disable: false,
    },
    {
      type: "dropdown",
      label: "Away Team",
      placeholder: "Zamalek",
      name: "AwayTeam",
      optionsArr: team,
      disable: false,
    },
    {
      type: "dropdown",
      label: "Match Venue",
      placeholder: "Egyptian Army Stadium",
      name: "MatchVenue",
      optionsArr: stadium,
      disable: false,
    },
    {
      type: "date",
      label: "Date",
      placeholder: "",
      name: "date",
      disable: false,
    },
    {
      type: "time",
      label: "Time",
      placeholder: "",
      name: "time",
      disable: false,
    },
    {
      type: "dropdown",
      label: "Main Referee",
      placeholder: "Mohamed Adel",
      name: "MainReferee",
      optionsArr: referee,
      disable: false,
    },
    {
      type: "dropdown",
      label: "Linesman 1",
      placeholder: "",
      name: "Linesman1",
      optionsArr: referee,
      disable: false,
    },
    {
      type: "dropdown",
      label: "Linesman 2",
      placeholder: "",
      name: "Linesman2",
      optionsArr: referee,
      disable: false,
    },
    {
      type: "number",
      label: "Ticket Price",
      placeholder: "Ex: 100",
      name: "Ticketprice",
      disable: false,
    },
  ];

  useEffect(() => {
    dispatch(setActivePage("creatematch"));
  }, []);
  const handleAddMatch = async (values, errors) => {
    if (Object.keys(errors).length === 0) {
      try {
        const res = await axios.post(
          "http://localhost:3001/api/match/creatematch",
          values
        );
        setMessage("Match updated successfully");
        console.log(res);
      } catch (err) {
        setMessage("Error adding Match");
        console.log(err);
      }
    }
  };

  return (
    <div>
      <Header />
      {values.HomeTeam !== undefined ? (
        <>
          <h2 className="match-details-title">Edit Match Details</h2>
          <MyForm
            inputArr={inputArr}
            type="editDetails"
            title="Edit Match"
            buttText="Confirm Edit"
            initVal={values}
            //handleSub={handleOnSubmit}
            edit="true"
          />
        </>
      ) : (
        <h2 className="match-details-title">Edit Details</h2>
      )}
    </div>
  );
};

export default CreateMatch;

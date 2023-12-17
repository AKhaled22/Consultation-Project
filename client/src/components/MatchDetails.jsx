import React from "react";
import Button from "./Button";

const MatchDetails = ({
  homeTeamLogo,
  homeTeam,
  awayTeamLogo,
  awayTeam,
  stadium,
  date,
  Time,
  mainReferee,
  linesman1,
  linesman2,
  stadLogo,
  whistle,
  sideRefLogo,
}) => {
  return (
    <div className="match-details-container">
      <div className="upper-match-div">
        {new Date(date).toLocaleDateString("en-US", { weekday: "long" })}{" "}
        {new Date(date).toLocaleDateString()}
      </div>
      <div className="main-match-div">
        <div className="home-team-pack">
          <img
            src={homeTeamLogo}
            alt={homeTeam}
            className="team-logo home-logo"
          />
          <div>{homeTeam} (H)</div>
        </div>
        <div className="time-container">
          {(() => {
            const [hours, minutes] = Time.split(":").map(Number);
            const formattedHours =
              hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
            const amPm = hours >= 12 ? "PM" : "AM";
            return `${formattedHours}:${minutes
              .toString()
              .padStart(2, "0")} ${amPm}`;
          })()}
        </div>

        <div className="away-team-pack">
          <img
            src={awayTeamLogo}
            alt={awayTeam}
            className="team-logo away-logo"
          />
          <div>{awayTeam} (A)</div>
        </div>
      </div>

      <div className="match-info">
        <div className="stadPack">
          <img src={stadLogo} alt={stadium} className="stadLogo" />
          <div className="stadName">{stadium}</div>
        </div>
      </div>
      <div className="allRefPack">
        <div className="refPack">
          <img src={whistle} alt={mainReferee} className="refLogo" />
          <div className="refName">{mainReferee}</div>
        </div>
        <div className="sideRefPack">
          <img src={sideRefLogo} alt={linesman1} className="sideRefLogo" />
          <div className="sideRefName">
            {linesman1}
            <br />
            {linesman2}
          </div>
        </div>
      </div>
      <Button buttText={"Get Ticket"} />
    </div>
  );
};

export default MatchDetails;

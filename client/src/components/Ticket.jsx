import React from 'react'
import seat from '../assets/seat.png'
import stadLogo from "../assets/stad.png";
import whistle from "../assets/whistle.png";
import sideRefLogo from "../assets/sideRefLogo.png";
// import Button from './Button'

const Ticket = (
    {
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
       
        hideButton,
    }
) => {
    return (
        <>
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
                        <div className="home-club-name">{homeTeam} (H)</div>
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
                        <div className="away-club-name">{awayTeam} (A)</div>
                    </div>
                </div>

                <div className="your-tickets">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <img src={whistle} alt={mainReferee}  width="50px" height="auto" />
                        <div className="refName">{mainReferee}</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <img src={stadLogo} alt={stadium}  width="40px" height="auto" />
                        <div >{stadium}</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <img src={sideRefLogo} alt={linesman1}  width="30px" height="auto" />
                        <div >
                            {linesman1}
                            <br />
                            {linesman2}
                        </div>
                    </div>
                </div>
                <div className="your-tickets">
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <label>Name:</label>
                        <div className="stadName">hi</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <img src={seat} alt='chair' width="25px" height="auto" />
                        <div className="refName">hi</div>
                    </div>
                    <button className='danger-butt'>Cancel</button>
                </div>

                {/* <Button className={hideButton && "d-none"} buttText={"Get Ticket"} /> */}
            </div>
        </>
    )
}

export default Ticket

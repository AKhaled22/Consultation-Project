import React from 'react'
import footballcourt from '../assets/footballcourt.jpg'
import MatchDetails from '../components/MatchDetails'
import ManchesterUnitedLogo from '../assets/Manchester_United_FC_crest.svg.png'
import LiverpoolLogo from '../assets/Liverpool_FC.svg.png'
import stadLogo from "../assets/stad.png";
import whistle from "../assets/whistle.png";
import sideRefLogo from "../assets/sideRefLogo.png";



const Seat = ({ name, className, style, isBooked }) => {


    return (
        <>
            <input disabled={isBooked} type='checkbox' name="seatsgroup" value={name} id={name} className={`d-none`} style={style} />
            <label htmlFor={name} className={!isBooked ? "seat" : "disabled-seat"}></label>


        </>
    )
}




const TicketReservation = () => {



    const seatsRows = 5
    const seatsCols = 5


    const style = {
        // "width": `calc((100% - ${seatsCols}*5)px/${seatsCols})`,
        "grid-template-columns": `repeat(${seatsCols} , minmax(auto,50px))`,



    }
    const seatsArr = Array.from({ length: seatsRows }, (v, index) =>
        Array.from({ length: seatsCols }, (v2, index2) => ({
            name: `${index} - ${index2}`,
            booked: false,
        }))
    );

    const matches =
    {
        homeTeam: "Manchester United",
        homeTeamLogo: ManchesterUnitedLogo,
        awayTeam: "Liverpool",
        awayTeamLogo: LiverpoolLogo,
        stadium: "Old Trafford",
        date: "2021-10-24",
        Time: "12:10",
        mainReferee: "Michael Oliver",
        linesman1: "Stuart Burt",
        linesman2: "Simon Bennett",
    }

        ;




    // const handleSeatOnclick = (e) => {
    //     console.log(e.target.checked);
    //     // e.target.checked=true;



    // }

    return (
        <>
            <MatchDetails
                homeTeamLogo={matches.homeTeamLogo}
                homeTeam={matches.homeTeam}
                awayTeamLogo={matches.awayTeamLogo}
                awayTeam={matches.awayTeam}
                stadium={matches.stadium}
                date={matches.date}
                Time={matches.Time}
                mainReferee={matches.mainReferee}
                linesman1={matches.linesman1}
                linesman2={matches.linesman2}
                stadLogo={stadLogo}
                whistle={whistle}
                sideRefLogo={sideRefLogo}
                hideButton={true}
            />
            <div className='d-flex flex-column justify-content-center align-items-center m-5 gap-3'>

                {/* hetet abdallah */}

                <h2>Book a Ticket</h2>

                <div className='booking-container'>
                    <img src={footballcourt} alt='football court' width="100%" />
                    <div className='position-relative d-flex justify-content-center'>
                        <div className='index-seats-alpha'>
                            {seatsArr.map((row, rowI) =>

                                <span className='index-alpha'> {(String.fromCharCode(rowI + "A".charCodeAt(0)))}</span>

                            )}



                        </div>
                        <div className='booking-grid' style={style}>
                            {seatsArr.flatMap((row, rowIndex) =>
                                row.map((seat, colIndex) => {
                                    // console.log(String.fromCharCode(rowIndex + "A".charCodeAt(0)), colIndex);
                                    return (

                                        <Seat isBooked={seat.booked} key={`${(String.fromCharCode(rowIndex + "A".charCodeAt(0)))}-${colIndex}`} name={`${(String.fromCharCode(rowIndex + "A".charCodeAt(0)))}-${colIndex}`} rowNum={seat} />


                                    )
                                }

                                )
                            )}

                            {seatsArr[0].map((col, rowI) =>

                                <div className='index-numeric'>{rowI}</div>

                            )}


                        </div>

                        {/* <div className='index-seats-numeric' style={style}>
                            {/* {seatsArr[0].map((col,rowI) => 
                            
                            <span className='index-numeric'>{rowI}</span>
                            
                            )} */}



                        {/* </div> */} 


                    </div>

                    <div className='colorguide'>
                        <div className='onecolorguide'>
                            <div className='dot bg-secondary'></div>
                            <span>Available Seats</span>
                        </div>
                        <div className='onecolorguide' >
                            <div className='dot bg-danger'></div>
                            <span>Booked Seats</span>
                        </div>
                        <div className='onecolorguide'>
                            <div className='dot bg-success'></div>
                            <span>Selected Seats</span>
                        </div>



                    </div>


                </div>




            </div>
        </>

    )
}

export default TicketReservation
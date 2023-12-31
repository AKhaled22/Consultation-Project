import React, { useEffect } from 'react'
import seat from '../assets/seat.png'
// import Button from '../components/Button'
import Ticket from '../components/Ticket'

import Header from "../components/Header";
import ManchesterUnitedLogo from "../assets/Manchester_United_FC_crest.svg.png";
import LiverpoolLogo from "../assets/Liverpool_FC.svg.png";
import ZamalekLogo from "../assets/ZamalekSC.png";
import AlAhlyLogo from "../assets/AlAhly.png";

import { useDispatch } from 'react-redux'
import { setActivePage } from '../features/pageSlice'
const YourTickets = () => {


    const dispatch = useDispatch()

    useEffect(() => {


        dispatch(setActivePage("yourtickets"))

    }, [])


    const tickets = [
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
            <h2 className="match-details-title">Tickets</h2>
            {tickets.map((match) => {
                return (
                    <Ticket
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
    )
}

export default YourTickets

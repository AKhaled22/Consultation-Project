import React from 'react'
import sponsors from '../assets/sponsors.png'
import MatchDetails from '../components/MatchDetails'
import ManchesterUnitedLogo from "../assets/Manchester_United_FC_crest.svg.png";
import LiverpoolLogo from "../assets/Liverpool_FC.svg.png";
import ZamalekLogo from "../assets/ZamalekSC.png";
import AlAhlyLogo from "../assets/AlAhly.png";
import stadLogo from "../assets/stad.png";
import whistle from "../assets/whistle.png";
import sideRefLogo from "../assets/sideRefLogo.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

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
    ];
    return (
        <>
            <div className='loginHeader'>

                <img src={sponsors} width="100%" height="auto" />



            </div>
            {/* <div className='homepage-container'> */}
            <div className='homepage-container'>
                {/* <div> */}

                <div className='matchdetails-home' xs={10} >

                    {matches && matches.map((match) => {
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
                                // hideButton={true}
                            />
                        );
                    })}



                </div>

                <div className='meet-the-teams'>

                    {/* <h3>Meet the Teams</h3> */}
                    <div className='image-slider'>
                        <img className='logos-sidebar' src={AlAhlyLogo} />
                        <img className='logos-sidebar' src={ZamalekLogo} />
                        <img className='logos-sidebar' src={ManchesterUnitedLogo} />
                        <img className='logos-sidebar' src={LiverpoolLogo} />
                    </div>

                </div>
            </div>


            {/* 






            </div > */}
        </>
    )
}

export default Home
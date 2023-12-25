import React, { useRef , useState , useEffect } from 'react'
import footballcourt from '../assets/transpCourt.png'
import MatchDetails from '../components/MatchDetails'
import ManchesterUnitedLogo from '../assets/Manchester_United_FC_crest.svg.png'
import LiverpoolLogo from '../assets/Liverpool_FC.svg.png'
import stadLogo from "../assets/stad.png";
import whistle from "../assets/whistle.png";
import sideRefLogo from "../assets/sideRefLogo.png";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../features/pageSlice'














function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

// function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//         <>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch vertically centered modal
//             </Button>

           
//         </>
//     );
// }

// render(<App />);



const Seat = ({ name, className, style, isBooked, colI }) => {

    return (
        <>
            <input disabled={isBooked} type='checkbox' name="seatsgroup" value={name} id={name} className={`d-none`} style={style} />
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip"> {name} </Tooltip>}


            >
                {/* <Button variant="success"></Button> */}

                <label htmlFor={name} className={!isBooked ? "seat" : "disabled-seat"}></label>
            </OverlayTrigger>


        </>
    )
}






const TicketReservation = () => {


    const dispatch = useDispatch()

    useEffect(() => {
    
    
        dispatch(setActivePage("ticketreservation")) 
      
    }, [])

    const [modalShow, setModalShow] = useState(false);


    const seatsRef = useRef()
    let selectedSeatsArr = []

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




    const handleOnSubmit = () => {
        selectedSeatsArr = []

        if (seatsRef.current) {

            const inputs = seatsRef.current.querySelectorAll("input[type=checkbox]");
            inputs.forEach(input => {

                if (input.checked) {
                    selectedSeatsArr.push(input.id)
                }

            });

        }
        if(selectedSeatsArr.length !=0){

            setModalShow(true)
        }
        console.log(selectedSeatsArr);

    }

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
            <div className='d-flex flex-column justify-content-center align-items-center booking-page gap-3'>

                {/* hetet abdallah */}

                <h2>Book a Ticket</h2>

                <div className='booking-container'>
                    <img src={footballcourt} alt='football court' width="100%" />
                    <div className='position-relative d-flex justify-content-center'>
                        <div className='index-seats-alpha pb-md-0 '>
                            {seatsArr.map((row, rowI) =>

                                <span className='index-alpha'> {(String.fromCharCode(rowI + "A".charCodeAt(0)))}</span>

                            )}



                        </div>
                        <div ref={seatsRef} className='booking-grid' style={style}>
                            {seatsArr.flatMap((row, rowIndex) =>
                                row.map((seat, colIndex) => {
                                    // console.log(String.fromCharCode(rowIndex + "A".charCodeAt(0)), colIndex);
                                    return (


                                        <Seat colI={colIndex} isBooked={seat.booked} key={`${(String.fromCharCode(rowIndex + "A".charCodeAt(0)))}-${colIndex}`} name={`${(String.fromCharCode(rowIndex + "A".charCodeAt(0)))}-${colIndex}`} rowNum={seat} />



                                    )
                                }

                                )
                            )}

                            {/* {seatsArr[0].map((col, rowI) =>

                                <div className='index-numeric  d-none d-lg-block'>{rowI}</div>

                            )} */}


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


                    {/* <button className=''>Buy Tickets</button> */}



                </div>

                <button class="buyTickets-button type1" onClick={() => handleOnSubmit()}>
                    <span class="btn-txt">Buy Tickets</span>
                </button>




            </div>
             <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    )
}

export default TicketReservation
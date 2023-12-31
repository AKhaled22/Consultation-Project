import React, { useRef, useState, useEffect } from 'react'
import footballcourt from '../assets/transpCourt.svg'
import MatchDetails from '../components/MatchDetails'
import ManchesterUnitedLogo from '../assets/Manchester_United_FC_crest.svg.png'
import LiverpoolLogo from '../assets/Liverpool_FC.svg.png'
import stadLogo from "../assets/stad.png";
import whistle from "../assets/whistle.png";
import sideRefLogo from "../assets/sideRefLogo.png";
import Button from '../components/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../features/pageSlice'




// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';













function MyVerticallyCenteredModal(props) {

    const billingInpArr = [
        {
            type: "text",
            label: "CARDHOLDERS'S NAME",
            placeholder: "Name on Card",
            name: "cardHolderName"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },
        {
            type: "number",
            label: "CARD NUMBER",
            placeholder: "--- --- --- ---",
            name: "cardNumber"
        },


        {
            type: "date",
            label: "EXPIRY DATE",
            // placeholder: "username@gmail.com",
            name: "expiryDate"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },


        {
            type: "number",
            label: "CVV",
            placeholder: "Code",
            name: "code"
            // optionsArr:
            // radioOne:
            // radioTwo:

        },

    ]


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Checkout Bill
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='p-0'>
               
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>CARDHOLDERS'S NAME</Form.Label>
                        <Form.Control name='cardHolderName' placeholder="Name on Card" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>CARD NUMBER</Form.Label>
                        <Form.Control name='cardNumber' type='number' placeholder="--- --- --- ---" />
                    </Form.Group>
                  
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>EXPIRY DATE</Form.Label>
                            <Form.Control name='expiryDate' type="date" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control name='code' type="number" placeholder="Code" />
                        </Form.Group>
                    </Row>
               

                </Form>
            </Modal.Body>
                <button className='bg-success reservation-bill-butt' >Pay</button>
            {/* <Modal.Footer> */}
            {/* </Modal.Footer> */}
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

                <label htmlFor={name} className={!isBooked ? "seat" : "disabled-seat"}>
                    <div className='seat-content'></div>
                </label>
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

    const seatsRows = 10
    const seatsCols = 10


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
        if (selectedSeatsArr.length != 0) {

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
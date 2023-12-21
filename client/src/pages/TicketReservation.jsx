import React from 'react'
import footballcourt from '../assets/footballcourt.jpg'



const Seat = ({ rowNum, className, style }) => {


    return (
        <div className={`seat bg-secondary ${className}`} style={style}>

            {/* {rowNum} */}

        </div>

    )
}




const TicketReservation = () => {

    const seatsRows = 5
    const seatsCols = 30


    const style = {
        // "width": `calc((100% - ${seatsCols}*5)px/${seatsCols})`,
        "grid-template-columns": `repeat(${seatsCols} , minmax(auto,50px))`,



    }
    const seatsArr = Array.from({ length: seatsRows }, (v, index) => Array.from({ length: seatsCols }, (v2, index2) => `${index} - ${index2}`))
    // const generateSeats = () => {

    //     for(let i=0 ; i<seatsRows ; i++){
    //         for(let j=0 ; j<seatsCols ; j++){
    //             return(
    //             <Seat rowNum={i} colNum={j} />
    //             )
    //         }
    //     }

    // }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center m-5 gap-3'>

            {/* hetet abdallah */}

            <h1>Book a Ticket</h1>

            <div className='booking-container'>
                <img src={footballcourt} alt='football court' width="100%" />
                <div className='booking-grid' style={style}>
                    {seatsArr.flatMap((row, rowIndex) =>
                        row.map((seat, colIndex) => {
                            console.log(String.fromCharCode(rowIndex+"A".charCodeAt(0)) , colIndex);
                            return(
                            
                            <Seat key={`${(String.fromCharCode(rowIndex+"A".charCodeAt(0)))}-${colIndex}`} rowNum={seat} />
                            )
                        }
                        
                        )
                    )}


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
    )
}

export default TicketReservation
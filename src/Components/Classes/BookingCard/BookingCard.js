import React, { useState } from 'react';
import ClassForm from '../ClassForm/ClassForm';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
   
    
   
    function closeModal(){
      setIsOpen(false);
    }
    return (

        <div className="col-md-4 mb-5">
            <div className="card  p-3">
                <div className="cardstyle card-body text-center">
                    <h5 className="card-title text-brand">{booking.class}</h5>
                    <h6>{booking.time}</h6>
                    <p>{booking.space} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn  btn-brand text-uppercase">Join Class</button>
                    <ClassForm modalIsOpen={modalIsOpen} appointmentOn ={booking.subject} closeModal={closeModal} date={date}></ClassForm>
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;
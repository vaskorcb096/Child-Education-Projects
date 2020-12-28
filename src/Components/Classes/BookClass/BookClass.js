import React, { useEffect, useState } from 'react';
import BookingCard from '../BookingCard/BookingCard';
const BookClass = ({date}) => {
   
    const [cl,setClasssss] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/classss')
        .then(res => res.json())
        .then(data => setClasssss(data))
    }, [cl])

    return (
        <div className="pointer mb-5">
            <h2 className="text-center text-brand">Available Class on {date.toDateString()}</h2>
           <div className="row">
            {
                cl.map(booking =><BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)

            }
           </div>
            
        </div>
    );
};

export default BookClass;
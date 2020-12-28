import React, { useState } from 'react';
import Footer from '../Home/Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import BookClass from './BookClass/BookClass';
import ClassSchedule from './ClassSchedule/ClassSchedule';

const Classes = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    const handleDateChange=date=>{
        
        setSelectedDate(date);
      }
    return (
        <div className="classstyle">
            <Navbar></Navbar>
           
            <ClassSchedule handleDateChange={handleDateChange}></ClassSchedule>
            <BookClass date={selectedDate}></BookClass>
            <Footer></Footer>
        </div>
    );
};

export default Classes;
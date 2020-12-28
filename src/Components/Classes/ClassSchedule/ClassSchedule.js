import React from 'react';
import './ClassSchedule.css';
import images1 from '../../../images/Class/classschedule1.jpg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ClassSchedule = ({handleDateChange}) => {
   
    return (
        <main style={{height:'600px'}}className="row d-flex align-item-center">
        <div className="col-md-4 offset-md-1 center">
           
            <Calendar
                onChange={handleDateChange}
                value={new Date()} calendarClassName="responsive-calendar" 
            />
            
        </div>
        <div className="col-md-6">
            <img style={{width:"100%",height: '305px'}}src={images1} alt="" className="rrr"/>
        </div>
        </main>  
    );
};

export default ClassSchedule;
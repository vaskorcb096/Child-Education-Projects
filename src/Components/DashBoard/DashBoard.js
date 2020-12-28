import React, { useContext, useEffect, useState } from 'react';
import ClassByDate from './classByDate/ClassByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../App';
import SideBar from './SideBar/SideBar';
const containerStyle1={
    backgroundColor:'#F4FDFB',
    border: '1px solid red',
    height:'100%'
}

const DashBoard = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate,setSelectedDate]=useState(new Date());
    const [appointments,setAppointments]=useState([])
    const handleDateChange= date =>{
        
        setSelectedDate(date.toDateString());
    }

        useEffect( ()=>{
            fetch('http://localhost:5000/appointmentsByDate',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({date: selectedDate,email:loggedInUser.email})
            })
            .then(res=>res.json())
            .then(data=> setAppointments(data))
        },[selectedDate]);
    
       
    return (
        <div>
            <section>
                <div style={containerStyle1}className="row">
                    <div className="col-md-2 col-sm-12 col-lg-2">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-5 col-sm-12 col-lg-4 d-flex justify-content-center">
                    <Calendar
                onChange={handleDateChange}
                value={new Date()}
               />
                    </div>
                    <div className="col-md-5 col-sm-12 col-lg-6" >
                       
                        <ClassByDate appointments={appointments}></ClassByDate>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashBoard;
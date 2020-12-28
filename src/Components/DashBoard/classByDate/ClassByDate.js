import React from 'react';
import DataTable from '../DataTable/DataTable';
import StudentList from '../StudentList/StudentList';



const ClassByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
           <h2>Total Enroll: {appointments.length}</h2> 
           {
                appointments.length ?
                <StudentList appointments={appointments}></StudentList>
               
                :
                <div className="p-5">
                    <h4 className="lead text-center">Not Available Class for this Date</h4>
                </div>
            }
        </div>
    );
};

export default ClassByDate;
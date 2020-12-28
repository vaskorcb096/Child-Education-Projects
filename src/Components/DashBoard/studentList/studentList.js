import React, { useState } from 'react';

const StudentList = ({appointments}) => {
    const [info, setInfo] = useState({});
    const deleteProduct = e => {

        
    }
 
    
    return (
        <div>
        <table className="table table-bordered table-dark table-hover ">
        <thead>
            <tr>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Subject</th>
            
            <th className="text-secondary" scope="col">Email</th>
            <th className="text-secondary" scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {
              appointments.map((appointment, index) => 
                    
                <tr>
                    <td>{appointment.name}</td>
                    <td>{appointment.service}</td>
                    
                    <td>{appointment.email}</td>
                    <td className="text-right" >
                       <button class="btn btn-success badge-pill float-right"style={{width:"80px"}}>EDIT</button>
                       {/* <button onClick={() => this.shoot("Goal")} */}
                       <button onClick={()=>deleteProduct(appointment._id)} class="btn btn-danger badge-pill float-right"style={{width:"80px"}}>DELETE</button>
                    </td>
                </tr>
                )
            }
        </tbody>
    </table>
    </div>
    );
};

export default StudentList;
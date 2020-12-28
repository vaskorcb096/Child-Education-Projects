import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [isTeacher,setIsTeacher]=useState(false);
    useEffect( ()=>{
        fetch('http://localhost:5000/isTeacher',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsTeacher(data));
    },[])
    
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-lg-2 col-sm-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/Dashboard/appointment" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                
                   {isTeacher && <div>


 <li>
     <Link to="/addclasses" className="text-white">
         <FontAwesomeIcon icon={faUsers} /> <span>Add Class</span>
     </Link>
 </li>
 <li>
     <Link to="/details" className="text-white">
         <FontAwesomeIcon icon={faFileAlt} /> <span>Contact Review</span>
     </Link>

 </li>
 <li>
     <Link to="/addTeacher" className="text-white" >
         <FontAwesomeIcon icon={faUserPlus} /> <span>Add Teacher</span>
     </Link>
 </li>
 <li>
     <Link to="/action" className="text-white">
         <FontAwesomeIcon icon={faFileAlt} /> <span>Action</span>
     </Link>
     
 </li>
 
 
 <li>
     <Link to="/teacher/setting" className="text-white" >
         <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
     </Link>
 </li>

</div>

                   }
                
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;
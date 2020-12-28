import React, { useEffect, useState } from 'react';
import { Tabs } from 'react-bootstrap';
import './Tech.css'
import TeachersSection from '../TeachersSection/TeachersSection';

const Tech = () => {

    const [tech, setTech] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/teachers')
        .then(res => res.json())
        .then(data => setTech(data))
    }, [tech])
    return (
        <div>

   <div className="dde">Our Teachers</div>
         <div className="content-wrap">
         <div className="container">
             <div className="row">
                 {
                       tech.map(ta =><TeachersSection key={ta._id} ta={ta} />)
                 }
             </div>

         </div>
        </div>
        
        </div>
    );
};

export default Tech;
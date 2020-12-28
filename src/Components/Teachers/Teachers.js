import React, { useEffect, useState } from 'react';
import Footer from '../Home/Home/Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import './Teachers.css'
import TeachersSection from './TeachersSection/TeachersSection';
import Tech from './Tech/Tech';

const Teachers = () => {
   

    

    return (
        <div>
            <Navbar></Navbar>

            <Tech></Tech>
            <Footer></Footer>
        </div>
    );
};

export default Teachers;
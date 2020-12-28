import React from 'react';
import Footer from '../Home/Home/Footer/Footer';
import TotalCount from '../Home/Home/TotalCount/TotalCount';
import WhyAboutUs from '../Home/Home/WhyAboutUs/WhyAboutUs';
import Navbar from '../Home/Navbar/Navbar';
import Testimonial from '../Testimonial/Testimonial';
import AboutHead from './AboutHead/AboutHead';

import './AboutUs.css';

const AboutUs = () => {
    return (
        <div>
           <Navbar></Navbar>
          
           <WhyAboutUs></WhyAboutUs>
           <TotalCount></TotalCount>
           <Testimonial></Testimonial>
           <Footer></Footer>
        </div>
    );
};

export default AboutUs;
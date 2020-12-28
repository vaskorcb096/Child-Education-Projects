import React from 'react';
import Header from '../Header/Header';
import HomeIcon from './HomeIcon/HomeIcon';
import images from '../../../images/images.jpg'
import Bookshop from './Bookshop/Bookshop';
import TotalCount from './TotalCount/TotalCount';
import ClassSchedule from './ClassSchedule/ClassSchedule';
import WhyAboutUs from './WhyAboutUs/WhyAboutUs';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Event from './Event/Event';
import Footer from './Footer/Footer';


const Home = () => {
    
    return (
        <div>
           <Header></Header> 
           <HomeIcon></HomeIcon>
           <Bookshop></Bookshop>
          <TotalCount></TotalCount>
          <ClassSchedule></ClassSchedule>
          <WhyAboutUs></WhyAboutUs>
          <PhotoGallery></PhotoGallery>
          <Event></Event>
          <Footer></Footer>


        </div>
    );
};

export default Home;
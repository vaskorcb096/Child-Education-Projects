import React from 'react';
import './WhyAboutUs.css';
import images from '../../../../images/teacher-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';


const WhyAboutUs = () => {
    return (
        <section className="makeaboutus text-white bg-dark pt-5">
            <h2 className="text-center pb-5">Why About Us</h2>
          <div className="container ">
              <div className="row">
                <div className=" col-sm-12 col-md-12 col-lg-7">
                    <p className="p-2">Dolor sit amet, dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod. Dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod. Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent. Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.</p>
                    <div className="d-flex">
                       <i ><FontAwesomeIcon className="info-icon" icon={faArrowAltCircleRight}></FontAwesomeIcon></i> 
                    <p className="p-2">100% education, for your kids, consectetuer adipiscing elit, sed diam nonummy nibh euismod. Dolor sit amet, dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>

                    <div className="d-flex">
                       <i><FontAwesomeIcon className="info-icon" icon={faArrowAltCircleRight}></FontAwesomeIcon></i> 
                    <p className="p-2">More benefit nonummy nibh euismod. Lorem ipsum dolor sit amet, consectetuer adipiscing elit..</p>
                    </div>
                    <div className="d-flex">
                       <i><FontAwesomeIcon className="info-icon" icon={faArrowAltCircleRight}></FontAwesomeIcon></i> 
                    <p className="p-2">More programs activities, sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet..</p>
                    </div>
                    </div>
       
                <div className=" col-sm-12 col-md-12 col-lg-5">
                     <img src={images} alt=""/>
                </div>
              </div>
          </div>
        </section>
    );
};

export default WhyAboutUs;
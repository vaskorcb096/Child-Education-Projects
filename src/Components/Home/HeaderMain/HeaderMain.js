import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide01 from '../../../images/colorfulimage5.jpg'
import slide02 from '../../../images/video-bg-1.jpg';
import slide03 from '../../../images/pentagon.jpg'

import './HeaderMain.css';
import { Carousel } from 'react-bootstrap';


const HeaderMain = () => {
    return (
      <div  className='header'>
         
      <Carousel className="">
          <Carousel.Item interval={1000}>
              <img src={slide01} style={{'maxHeight': '80vh'}}  className="d-block w-100 "  alt="First slide" >  
              </img>
              <div class="carousel-caption text-left mb-5 pb-5 ">
                  <h2 class="display-4"><strong>Personalized learning</strong></h2>
                  <p class="lead my-4">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                  <a href="#" class="btn btn-secondary"><strong>SIGN UP TODAY</strong></a>
                </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img  src={slide02} style={{'maxHeight': '80vh'}}  className="d-block w-100 "  alt="Second slide" >  
              </img>
              <div class="carousel-caption text-left mb-5 pb-5 ">
                  <h2 class="display-4">Personalized learning</h2>
                  <p class="lead my-4">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                  <a href="#" class="btn btn-secondary"><strong>SIGN UP TODAY</strong></a>
                </div>
          </Carousel.Item>
          <Carousel.Item>
          <img  src={slide03} style={{'maxHeight': '80vh'}}  className="d-block w-100 "  alt="Third slide" >  
              </img>
              <div style={{bottom:'50px !important'}} class="carousel-caption xx text-left mb-5 pb-5 ">
                  <h2 class="display-4">Personalized learning</h2>
                  <p class="lead my-4">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
                  <a href="#" class="btn btn-secondary"><strong>SIGN UP TODAY</strong></a>
                </div>
          </Carousel.Item>
      </Carousel>
     

  </div>
        
    );
   
};

export default HeaderMain;
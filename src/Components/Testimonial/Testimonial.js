import React from 'react';
import './Testimonial.css';
import images1 from '../../images/testimonial/team-3.jpg';
import fontawesome from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';


const Testimonial = () => {
    return (
       <div>
        
        
              <Carousel className="HelloTest bg-dark text-center">
        
          <Carousel.Item interval={1000}>
          <h1 style={{ color:'white'}} class=" h1clor text-center p-5">What Parents Says</h1>     
          <div className="img-area carousel-img-5"></div>
          <div className="design carousel-caption">
              <h1>Petterson Holder</h1>
          <h3>Software Engineer</h3>
          <i><FontAwesomeIcon  className="faquote" icon={faQuoteLeft}></FontAwesomeIcon></i>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur porro vero ipsum quos quae sed distinctio quibusdam recusandae aspernatur saepe! Molestiae aliquam aperiam qui adipisci quo eum maiores. Eligendi, autem.</p>
              </div>
          </Carousel.Item>
          <Carousel.Item interval={800}>
          <h1 style={{ color:'white'}} class=" h1clor text-center p-5">What Parents Says</h1>
          <div className="img-area carousel-img-6"></div>
          <div className="design carousel-caption">
              <h1>Stifen Hawking</h1>
          <h3>BusinessMan</h3>
          <i><FontAwesomeIcon  className="faquote" icon={faQuoteLeft}></FontAwesomeIcon></i>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eum consequatur voluptates fugit quos commodi, magni atque quidem vero asperiores laborum a illum, repudiandae ad qui iusto exercitationem perferendis incidunt!</p>
              </div>
          </Carousel.Item>
          <Carousel.Item>
          <h1 style={{ color:'white'}} class=" h1clor text-center p-5">What Parents Says</h1>
          <div className="img-area carousel-img-7"></div>
              <div className="design carousel-caption">
              <h1>Rawking Samwel</h1>
          <h3>Journalist</h3>
          <i><FontAwesomeIcon  className="faquote" icon={faQuoteLeft}></FontAwesomeIcon></i>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugit, ex est earum in non doloribus magni. Delectus earum dolores, eum maiores doloribus ad explicabo quaerat, ipsam sequi commodi esse.</p>
              </div>
          
          </Carousel.Item>
      </Carousel>
      </div>
      
     

    );
};

export default Testimonial;
import React from 'react';
import './PhotoGallery.css'
import images1 from '../../../../images/gallery1.jpg';
import images2 from '../../../../images/gallery2.jpg';
import images3 from '../../../../images/gallery3.jpg';


const PhotoGallery = () => {
    return (
        <section id="gallery" class="py-5 text-center text-white" uk-lightbox>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 style={{fontSize:'32px',color: '#FD4D40',fontFamily: '"Pacifico", cursive'}}>Moment Our Child </h2>
          <p class="lead">Check out our photos</p>
        </div>
      </div>
      <div class="row py-0 py-sm-3">
        <div class="col-md-4">
          <div>
            <a href="img/image1.jpeg">
              <img src={images1} class="img-fluid" alt=""/>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <a href="img/bg1.jpeg">
              <img src={images2} class="img-fluid" alt=""/>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <a href="img/image3.jpeg">
              <img src={images3} class="img-fluid" alt=""/>
            </a>
          </div>
        </div>
      </div>
      <div class="row py-0 py-sm-2">
        <div class="col-md-4">
          <div>
            <a href="img/image4.jpeg">
              <img src="" class="img-fluid" alt=""/>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <a href="img/image5.jpeg">
              <img src="" class="img-fluid" alt=""/>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <a href="img/image6.jpeg">
              <img src="" class="img-fluid" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default PhotoGallery;
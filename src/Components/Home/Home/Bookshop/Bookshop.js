import React from 'react';
import images from '../../../../images/Bookshop.jpg'

const Bookshop = () => {
    return (
        <section id="home-info">
    <div class="container text-black">
      <div class="row py-5">
        <div class="col-md-6 align-self-center">
        <img src={images} class="img-fluid rounded my-3" alt="PC"/>
         
        </div>
        <div class="col-md-6 py-5">
        <h1>Online Bookshop</h1>
          <p class="lead my-3 ">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium perspiciatis unde omnis iste natus error sitdolor sit amet, consectetuer adipiscing maecenas loareet morbi a dosis luctus novum est praesent. Magna est consectetur interdum modest dictum.<br></br>

          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque </p>
          <a href="#" class="btn btn-dark">Shop Now</a>
         
        </div>
      </div>
    </div>
  </section>
    );
};

export default Bookshop;
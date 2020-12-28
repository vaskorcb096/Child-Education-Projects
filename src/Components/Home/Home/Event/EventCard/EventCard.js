import React from 'react';
import './EventCard.css';
const styleDescription={
    color: '#999999',
    fontFamily:"'Open Sans','sans-serif'",
    fontWeight:'400',
    fontSize:'15px',
    lineHeight: 1.5,
}

const EventCard = ({info}) => {
    console.log(info.description);
    console.log('Hello');
    return (
        
       
        
        <div className="col-md-4 bg-white media-box Schedulestyle">
    
        <div className="photo-frame">
        <img src={info.event_img} style={{borderRadius:'10px'}} className="img-fluid "alt=""/>
        </div>
      <h5><bold>{info.title}</bold></h5>
      <small className="text-success">{info.eventTime}</small>
      <br></br>
      <small style={styleDescription}>{info.description}</small>
      <div className="text-center p-5">
      <a href="#"className="btn btn-primary ">Join NOw</a>
      </div>
      
    
     </div>

               
    );
};

export default EventCard;
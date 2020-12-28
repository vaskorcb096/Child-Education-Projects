import React from 'react';
import './ClassScheduleCard.css'
const styleDescription={
    color: '#999999',
    fontFamily:"'Open Sans','sans-serif'",
    fontWeight:'400',
    fontSize:'15px',
    lineHeight: 1.5,
}

const ClassScheduleCard = ({info}) => {
    return (
        
           

    <div className="col-md-4 bg-white media-box Schedulestyle">
    
        <div className="photo-frame">
        <img src={info.classimg} style={{borderRadius:'10px'}} className="img-fluid "alt=""/>
        </div>
      <h5><bold>{info.title}</bold></h5>
      <small className="text-success">{info.classTime}</small>
      <br></br>
      <small style={styleDescription}>{info.description}</small>
    
     </div>

                
 
        
       
    );
};

export default ClassScheduleCard;
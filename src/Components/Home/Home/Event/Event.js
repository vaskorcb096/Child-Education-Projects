import React from 'react';
import './Event.css';
import images from '../../../../images/classimg.jpg';
import EventCard from './EventCard/EventCard';

const EventInfo=[
{
 event_img:images,
 title: 'English Day On Mukarjee',
  eventTime:'Open Class : 08:00 am - 10:00 am',
  description:'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
 
    },

    {

        event_img:images,
        title: 'Play & Study with Mrs. Smith',
        eventTime:'Open Class : 08:00 am - 10:00 am',
        description:'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
        
   },
   {
    event_img:images,
    title: 'Drawing at City Park',
    eventTime:'Open Class : 08:00 am - 10:00 am',
    description:'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
      
      }
    
]

const Event = () => {
    return (
        <section style={{backgroundColor:'white'}}>
            <div >
            <div style={{marginLeft:'80px',marginRight:'80px'}}className="row"id="eventCard">
            <h1 className="text-center py-5">Don't Miss Our Events</h1>
            {
                
             
                EventInfo.map(info=><EventCard info={info}></EventCard >)
            }

            </div>
        

            </div>
            
           
         
        </section>
    );
};

export default Event;
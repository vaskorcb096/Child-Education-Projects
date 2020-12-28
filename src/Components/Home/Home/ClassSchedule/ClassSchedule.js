import React from 'react';
import './ClassSchedule.css';
import ClassScheduleCard from './ClassScheduleCard/ClassScheduleCard';
import images from '../../../../images/classimg.jpg'
import images2 from '../../../../images/child-4.jpg';

import images3 from '../../../../images/gallery3.jpg';

import { useHistory } from 'react-router-dom';
const classinfo=[
    {
    classimg:images,
 
  title: 'Drawing Class',
  classTime:'Open Class : 08:00 am - 10:00 am',
  description:'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
  age: 'Age 2-5 years' 
    },

    {

        classimg:images2,
        title: 'Gaming Class',
        classTime:'Open Class : 08:00 am - 10:00 am',
        description:'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
        age: 'Age 2-5 years' 
   },
   {
    classimg:images3,
    title: 'Learning Classes',
    classTime:'Open Class : 08:00 am - 10:00 am',
    description:'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
    age: 'Age 2-5 years'  
      }
    
]



const ClassSchedule = () => {
      const history=useHistory();
    const handleGoToClasses = () => {
       history.push('/classes');
     
    }
    return (
        <section style={{backgroundColor:'white'}}>
            <div >
            <div style={{marginLeft:'80px',marginRight:'80px'}}className="row"id="classCard">
            <h1 className="text-center py-5">Popular Classes</h1>
            {
             
             classinfo.map(info=><ClassScheduleCard info={info}></ClassScheduleCard>)
            }

            </div>
            <div className="text-center py-5">
        <button onClick={handleGoToClasses} className="btn btn-primary">Join Our Class</button>
            </div>

            </div>
            
           
         
        </section>
    );
};

export default ClassSchedule;
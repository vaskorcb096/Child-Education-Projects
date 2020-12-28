import React, {useState,useEffect } from 'react';
import './ContactReview.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AdminPendingContact from '../AdminPendingContact/AdminPendingContact';
import SideBar from '../SideBar/SideBar';
import images1 from '../../../images/images (2).jpg'



const ContactReview = () => {
    let history=useHistory()
   
    
    const [contact,setContact]=useState([]);
    
    
    useEffect(()=>
    {

        fetch('http://localhost:5000/pendingContact')
        .then(res=>res.json())
        .then(data=>
            {
                setContact(data);

               
            });

      

       

    },[])
    console.log("hello",contact)
   
    
    return (
        
        
        <div>
            
            <div className="row">
                
                    <div className="col-md-2 col-sm-12 col-lg-3">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-md-10 col-sm-12 col-lg-7">
                    <h1 className="text-center">Contact Review</h1>
                    {
               
                
               
               contact.map(rv=> 
  
      <div class="card justify-content-center ">
          <div className="aligncenteer"> 
          <img  className="center img-fluid"src={images1} alt="Review" style={{width:'300px',height:'250px'}}/>
  
          </div>
     
     <div class="container">
      <h4  className="text-brand text-center"><b>Name: {rv.name}</b></h4>
      <p  className="text-brand text-center">Message: {rv.message}</p>
      <footer  className="text-brand text-center">Time:{rv.reviewDate.day}:{rv.reviewDate.month}:{rv.reviewDate.year}</footer>
    </div>
  </div>
  
               )
               
  }
 </div>
 </div>
            
           
        
          

 
        </div>
    );
};

export default ContactReview;
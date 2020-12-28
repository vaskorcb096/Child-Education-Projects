import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const TeacherUpdateInfo = () => {

    const [info, setInfo] = useState({});
    const [data,setData]=useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/teacherupdateget')
        .then(res => res.json())
        .then(data => setData(data))
    }, [data])
    
    console.log(data);

    
    



    const handleBlur = e => {

        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        
        
        
    }


    const handleSubmit = (e) => {
        let paisi;
        const email=info.email;
        console.log(data);
        
       data.map(ta =>{
           console.log(ta[email]);
              
               if(ta.email===email){
                   console.log('paisi');
                   paisi=ta._id;
               }
           
       })
      
       
    
   
   

   
        e.preventDefault();

       
        const subject=info.subject;
        const name=info.name;
        const product={email, subject,name,paisi};
        
       
         console.log(product);
       
        // console.log(val);

        
        

           fetch('http://localhost:5000/TeacherUpdateProduct',
           {
               method:'PATCH',
               headers:{'Content-Type':'application/json'},
               body: JSON.stringify(product)
           })
           .then(res=>res.json())
           .then(result=>
            {
                if(result)alert('Successfully updated');
            })

    }


    return (
        <div >
           
         
           

             <form onSubmit={handleSubmit}>
                
                <div class="form-group">
                    <label for="exampleInputid1"><b>Update a item</b></label>
                    <input onBlur={handleBlur} type="email" class="form-control" name='email' id="exampleInputid1" placeholder="Write Your Email Id" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPrice1"><b>Name</b></label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Enter Your Name" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPrice1"><b>Subject</b></label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="subject" placeholder="Enter Your Subject" />

                </div>


                <button type="submit" class="btn btn-primary" style={{marginLeft: '47%',borderRadius: '20px',marginTop:'10px',marginBottom: '20px'}}>Update</button>
            </form>

        </div>
    );
};

export default TeacherUpdateInfo;
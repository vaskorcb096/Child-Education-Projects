import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const ClassUpdateInfo= () => {

    
      
    
    const [info, setInfo] = useState({});
    const [data,setData]=useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/classupdateget')
        .then(res => res.json())
        .then(data => setData(data))
    }, [data])

    
    



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

       
        const id=info.id;
        const clas=info.class;
        const time=info.time;
        const space =info.space 
        const product={id,clas,time,space};
        
       
         console.log(product);
       
        // console.log(val);

        
        

           fetch('http://localhost:5000/ClassUpdateProduct',
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
                    <label for="exampleInputid1"><b>Update Your Class Information</b></label>
                    <input onBlur={handleBlur} type="number" class="form-control" name='classId' id="exampleInputid1" placeholder="Write Your Class Id Which You Need To Update" />
                </div>

                <div class="form-group">
                    <label for="exampleInputPrice1"><b>Class</b></label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="class" placeholder="Enter Your Class" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPrice1"><b>Time</b></label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="time" placeholder="Enter Your Class Time" />

                </div>
                <div class="form-group">
                    <label for="exampleInputPrice1"><b>Available Space</b></label>
                    <input onBlur={handleBlur} type="text" class="form-control" name="space" placeholder="Enter Available Space"/>

                </div>


                <button type="submit" class="btn btn-primary" style={{marginLeft: '47%',borderRadius: '20px',marginTop:'10px',marginBottom: '20px'}}>Update</button>
            </form>

        </div>
    );
};

export default ClassUpdateInfo;
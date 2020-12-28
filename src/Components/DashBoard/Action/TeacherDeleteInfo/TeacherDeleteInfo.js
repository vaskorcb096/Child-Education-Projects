import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const TeacherDeleteInfo = () => {

    
      
    
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

       
       
        
        const product={email,paisi};
        
       
         console.log(product);
       
        // console.log(val);

        
        

        fetch('http://localhost:5000/teacherdelete/'+product.email,{
            method: 'DELETE'
           
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data)

                if(data)alert('succuessfully deleted');
            })
            .catch(error => {
                console.error(error)
            })
    

    }


    return (
        <div >
           
         
           

             <form onSubmit={handleSubmit}>
                
                <div class="form-group">
                    <label for="exampleInputid1"><b>Delete A Teacher Information</b></label>
                    <input onBlur={handleBlur} type="email" class="form-control" name='email' id="exampleInputid1" placeholder="Write Your Email Id" />
                </div>
                <button type="submit" class="btn btn-primary" style={{marginLeft: '47%',borderRadius: '20px',marginTop:'10px',marginBottom: '20px'}}>Delete</button>
            </form>

        </div>
    );
};

export default TeacherDeleteInfo; 
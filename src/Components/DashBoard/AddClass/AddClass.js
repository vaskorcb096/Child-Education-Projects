import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
const AddClass = () => {
    const [info, setInfo] = useState({});
   
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        
        formData.append('class', info.class);
        formData.append('time', info.time);
        formData.append('space', info.space);

        fetch('http://localhost:5000/addAClass', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
          
           <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Class</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Class</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="class" placeholder="Enter Class" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Time</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="time" placeholder="Class Time" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Available Space</label>
                        <input onBlur={handleBlur} type="number" className="form-control" name="space" placeholder="Available Space" />
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddClass;
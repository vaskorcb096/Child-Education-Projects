import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import images01 from '../../../images/awsome.jpg';
import SideBar from '../SideBar/SideBar';
import './Action.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Action = () => {
   
    return (
  <div className="fx">
    {/* insert */}
 <h1 className="text-center text-brand">Insert</h1>
  <div className="d-flex mb-5">
  <div id="wrapper">
  <Link to="/addTeacher" class="my-super-cool-btn">
    <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <span>Teacher</span>
  </Link>
</div>
<div id="wrapper">
  <Link to="/addclasses" class="my-super-cool-btn">
    <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <span>Class</span>
  </Link>
</div>

 </div>

{/* update */}

 <h1 style={{bottom:'500px'}}className="dd text-center text-brand">Update</h1>
  <div className="d-flex">
  <div style={{bottom:'650px'}}  id="wrapper">
  <Link to="/UpdateTeacher" class="my-super-cool-btn">
    <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <span>Teacher</span>
  </Link>
</div>
<div style={{bottom:'650px'}}  id="wrapper">
  <Link to="/updateClass" class="my-super-cool-btn">
    <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <span>Class</span>
  </Link>
</div>

 </div>
 {/* delete */}
 <h1 style={{bottom:'800px'}}className="dd text-center text-brand">Delete </h1>
  <div className="d-flex">
  <div style={{bottom:'1000px'}}  id="wrapper">
  <Link to="/deleteTeacher" class="my-super-cool-btn">
    <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <span>Teacher</span>
  </Link>
</div>
<div style={{bottom:'1000px'}}  id="wrapper">
  <Link to="#" class="my-super-cool-btn">
    <div class="dots-container">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <span>Student</span>
  </Link>
</div>

 </div>
 

  </div>
  
      
    );
};

export default Action;
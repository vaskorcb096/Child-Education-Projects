import React, { useContext } from 'react';
import { Button, Nav, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import icon2 from '../../../images/icon/icon2.png'
import './Navbar.css';

const Navbar = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  
 
    return (
      <div>
        <nav id="navbarNav" class="navbar navbar-expand-lg navbar-light bg-light " uk-sticky="top: 200; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
  <div class="container container-fluid">
    <img style={{height:'50px',width:'50px'}} src={icon2} alt=""/>
    <Link style={{color:'#FD4D40'}}class="navbar-brand" to="/home">CHILD EDUCATION</Link>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav justify-content-end ml-auto  mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/aboutus">ABOUT US</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/classes">CLASSES</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/teachers">TEACHERS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Dashboard/appointment">DASHBOARD</Link>
        </li>
       
        <li  class="nav-item">
          <a class="nav-link btn btn-primary" href="/contactus">CONTACT US</a>
        </li>
        <Button onClick={()=>setLoggedInUser({})}>Sign Out</Button>
        
      </ul>
      
     
    </div>
  </div>
</nav>

      </div>
      
      
    );
};
export default Navbar;
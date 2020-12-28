import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import ContactForm from './Components/ContactForm/ContactForm';
import AboutUs from './Components/AboutUs/AboutUs';
import Classes from './Components/Classes/Classes';
import Teachers from './Components/Teachers/Teachers';
import Login from './Components/Login/SignUP';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard';
import AddTeacher from './Components/DashBoard/AddTeacher/AddTeacher';
import ContactReview from './Components/DashBoard/ContactReview/ContactReview';
import AddClass from './Components/DashBoard/AddClass/AddClass';
import Action from './Components/DashBoard/Action/Action';
import TeacherUpdateInfo from './Components/DashBoard/Action/TeacherUpdateInfo/TeacherUpdateInfo';
import SignUP from './Components/Login/SignUP';
import LogIn from './Components/Login/LogIn/LogIn';
import ClassUpdateInfo from './Components/DashBoard/Action/ClassUpdateInfo/ClassUpdateInfo';
import TeacherDeleteInfo from './Components/DashBoard/Action/TeacherDeleteInfo/TeacherDeleteInfo';


export const UserContext=createContext();



function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
    <Router >
     <Switch>
     
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/aboutus">
         <AboutUs></AboutUs>
        
       </Route>
       <Route exact path="/contactus">
        <ContactForm></ContactForm>
       </Route>
       
       <PrivateRoute exact path="/classes"> 
        <Classes></Classes> 
        </PrivateRoute> 
       <Route exact path="/login">
       <SignUP></SignUP>
       </Route> 
       <Route exact path="/login2">
         <LogIn></LogIn>
       </Route>
       <Route exact path="/deleteTeacher">
        <TeacherDeleteInfo></TeacherDeleteInfo>
       </Route>
       
       
       <PrivateRoute exact path="/Dashboard/appointment">
        <DashBoard></DashBoard> 
        </PrivateRoute> 
        <Route exact path="/addTeacher"> 
        <AddTeacher></AddTeacher> 
        </Route> 
       
        <Route exact path="/addclasses"> 
        <AddClass></AddClass>
        </Route>
        <Route exact path="/updateclass"> 
        <ClassUpdateInfo></ClassUpdateInfo>
        </Route>

        <Route exact path="/UpdateTeacher"> 
        <TeacherUpdateInfo></TeacherUpdateInfo>
        </Route>
        
        <Route exact path="/action"> 
        <Action></Action>
        </Route>
        <Route exact path="/student"> 
        <Classes></Classes>
        </Route>
        <Route exact path="/details"> 
        <ContactReview></ContactReview>
        </Route>  
        <PrivateRoute exact path="/teachers"> 
        <Teachers></Teachers> 
        </PrivateRoute> 
     </Switch>
    </Router>
    
    </UserContext.Provider>
  );
}

export default App;

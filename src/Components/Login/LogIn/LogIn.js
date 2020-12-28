import React, { useContext, useState } from 'react';
import './LogIn.css'
import firebaseConfig from '../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);


const LogIn= () => {
    const [newUser,setNewUser]=useState(false);
    const  [user,setUser]=useState({
        isSignedIn:false,
        first_name:'',
        last_name:'',
        email:'',
        password:'',
        photo:'',

    });
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
   const history=useHistory();
   const location=useLocation();
   let {from}=location.state|| {from:{pathname:"/"}};

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleSignIn=() => {
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {firstName,lastName,photoURL,email}=res.user;
            console.log(res);
            const signedInUser={
             isSignedIn:true,
             first_name:firstName,
             last_name:lastName,
             email:email,
             photo:photoURL,
            }
            setUser(signedInUser);
        })
        .catch(err => {
            var errorCode = err.code;
            var errorMessage = err.message;
            var email = err.email;
            var credential = err.credential;
           
          });

    }
    const handleFbSignIn=()=>{
        firebase.auth().signInWithPopup(fbProvider)
        .then(res=> {
            
           
            
            var user = res.user;
            console.log('fb User aftr Sign In',user);
            
          }).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    const handleSignOut = () =>{
        firebase.auth().signOut()
        .then(res => {
            // Sign-out successful.

            const signedOutuser={
            isSignedIn:false,

            first_name:'',
            last_name:'',
            photo:'',
            email:'',
            password:'',
            error:'',
            success:false,
            }
            setUser(signedOutuser);
          })
          .catch(err => {
            // An error happened.
          });

    }
    const handleBlur =(event)=>{
       
        let isFormValid=true;
      console.log(event.target.name , event.target.value);
      if(event.target.name === 'email') {
        isFormValid=/\S+@\S+\.\S+/.test(event.target.value);

      }
     if(event.target.name === 'password') {
         const isPasswordValid=event.target.value.length>6
         const passwordHasNumber=/\d{1}/.test(event.target.value);
         isFormValid=isPasswordValid && passwordHasNumber;
      }
      if(isFormValid) {
          const newUserInfo={...user};
          newUserInfo[event.target.name]=event.target.value;
          setUser(newUserInfo);
      }

    }
    const handleSubmit=(event)=>{
        console.log(user);
       
        if(user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
               .then(res => {
                const newUserInfo={...user};
                newUserInfo.error='';
                newUserInfo.success=true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
                
                 })
                .catch((error) => {
                    const newUserInfo={...user};
                    newUserInfo.error=error.message;
                    newUserInfo.success=false;
                    setUser(newUserInfo);
                 });
        }
       
        event.preventDefault();

    }
    return (
        
        <div class="formm form">
      
      <ul class="tab-group">
        <li class="tab active"><Link className='ax' to="/login">Sign Up</Link></li>
        <li class="tab"><Link className='ax' to="/login2">Log In</Link></li>
      </ul>
        <div id="login">   
          <h1  class="h1x">CHILD EDUCATION!</h1>
          <div className="d-flex justify-content-evenly">
          {
              user.isSignedIn?<button className="btn btn-success"  onClick={handleSignOut}>Google Sign Out</button>:
               <button className="btn btn-success"  onClick={handleSignIn}>Google Sign In</button>
          }
          
          <button className="btn btn-success"   onClick={handleFbSignIn}>Facebook Sign In</button>
          </div>
          
         
          
          <form onSubmit={handleSubmit} action="/" method="post">
          
            <div class="field-wrap">
            <input onBlur={handleBlur} type="email"name="email" placeholder="Email Address"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
           
            <input onBlur={handleBlur} type="password"name="password"placeholder="Password"required autocomplete="off"/>
          </div>
          
          <p class="forgot"><a className='ax' href="#">Forgot Password?</a></p>
          
          
          <input class="button button-block" type="submit" value='Sign In'/>
          
          </form>
          <p style={{color:'red'}}>{user.error}</p>
          {
              user.success && <p style={{color:'green'}}>Logged In Succesfully</p>
          }

        </div>
        
      </div>
    
      
       
    );
};

export default LogIn;
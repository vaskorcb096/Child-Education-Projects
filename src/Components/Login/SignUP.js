import React, { useContext, useState } from 'react';
import './SignUp.css'
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);


const SignUP = () => {
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
          
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((user) => {
                const newUserInfo={...user};
                newUserInfo.error='';
                newUserInfo.success=true;
                setUser(newUserInfo);
                updateUserName(user.first_name,user.last_name);
               
                
              
            })
            .catch((error) => {
                const newUserInfo={...user};
                newUserInfo.error=error.message;
                newUserInfo.success=false;
                setUser(newUserInfo);
            
            
              
            });

        }
       
        const updateUserName=(name1,name2)=>{
            const user = firebase.auth().currentUser;

            user.updateProfile({
              firstName:name1,
              lastName: name2,
            
            }).then(function() {
            // Update successful.
            }).catch(function(error) {
            // An error happened.
            });


        }
        event.preventDefault();

    }
    return (
        <div class="formm form">
      
      <ul class="tab-group">
      
        
        <li class="tab active "><Link name="newUser"   onChange={()=>setNewUser(!newUser)} className='ax btn-brannnnd' to="/login">Sign Up</Link></li>
        <li class="tab "><Link className='ax ' to="/login2">Log In</Link></li>
      </ul>
      
      <div class="tab-content">
        <div id="signup">   
          <h1 class="h1x">Child Education</h1>
          
          <form onSubmit={handleSubmit} action="/" method="post">
          
          <div class="top-row">
            <div class="field-wrap">
              
              <input name="first_name"onBlur={handleBlur} type="text" placeholder="First Name"  />
            </div>
        
            <div class="field-wrap">
              
              <input name="last_name"onBlur={handleBlur} placeholder="Last Name" type="text"/>
            </div>
          </div>

          <div class="field-wrap">
            
            <input onBlur={handleBlur} name="email" placeholder="Email Address" type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            
            <input onBlur={handleBlur}  name="password" placeholder="Set A Password" type="password"required autocomplete="off"/>
          </div>
          
          
          <input type="submit" class="button btn-brannnnd button-block" value='Sign Up'/>
          
          </form>
          <p style={{color:'red'}}>{user.error}</p>
          {
              user.success && <p style={{color:'green'}}>Created Succesfully</p>
          }

        </div>
        
        <div id="login">   
          <h1  class="h1x">Welcome Back!</h1>
          
          <form action="/" method="post">
          
            <div class="field-wrap">
            <label className="labelx">
              Email Address<span class="req">*</span>
            </label>
            <input type="email"required autocomplete="off"/>
          </div>
          
          <div class="field-wrap">
            <label className="labelx">
              Password<span class="req">*</span>
            </label>
            <input type="password"required autocomplete="off"/>
          </div>
          
          <p class="forgot"><a className='ax' href="#">Forgot Password?</a></p>
          
          <button class="button button-block">Log In</button>
          
          </form>

        </div>
        
      </div>
    </div>
      
       
    );
};

export default SignUP;
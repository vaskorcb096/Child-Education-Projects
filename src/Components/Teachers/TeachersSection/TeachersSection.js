import React from 'react';
import './TeachersSection.css';
import images01 from '../../../images/Teachers/teacher_01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
const TeachersSection = ({ta}) => {

    return (


        <div className="col-md-4 col-sm-6 text-center">
              <div className="rs-team-1">

              {
            ta.image ? <img className="img-fluid mb-3" style={{height: '200px'}} src={`data:image/png;base64,${ta.image.img}`}/>
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://salty-plateau-71286.herokuapp.com/${ta.img}`} alt=""/>
        }
       <div style={{color:'#FD4D40',fontSize:'30px'}}className="title">{ta.name}</div>
       <div className="text-success position">{ta.subject}</div>
       <p>Dolor sit amet, dolor gravida, placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.</p>


        <div className="body">
                                       
                                    
                                    <div className="sosmed-icon d-inline-flex mb-5">
                                    <a href="https://www.facebook.com/"className="fb">
                                    <i><FontAwesomeIcon className="fontSizeChanging" icon={faFacebook}></FontAwesomeIcon></i>
                                    </a>
                                    <a href="https://twitter.com/" className="tw">
                                    <i><FontAwesomeIcon className="fontSizeChanging" icon={faTwitter}></FontAwesomeIcon></i>
                                    </a>
                                    <a href="www.instagram.com" className="ig">
                                    <i><FontAwesomeIcon className="fontSizeChanging" icon={faInstagram}></FontAwesomeIcon></i>
                                    </a>
                                    <a href="www.linkedin.com" className="in">
                                    <i><FontAwesomeIcon className="fontSizeChanging" icon={faLinkedin}></FontAwesomeIcon></i>
                                    </a>
                                    </div>
                                </div>

              </div>
        

            
        </div>
    
    );
};

export default TeachersSection;
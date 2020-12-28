import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDungeon, faHome, faSchool, faTrophy } from '@fortawesome/free-solid-svg-icons'
import './HomeIcon.css';

const HomeIcon = () => {
    return (
        <div>

<section id="home-icon" class="text-center">
    <div class="content-wrap pb-3">

    </div>
    <div class="container text-center">
      <div class="row">
        <div id="box-1"class="box col-md-4 ">
        <div class="circle ">
        <i><FontAwesomeIcon className="info-icon"icon={faSchool}></FontAwesomeIcon></i>
        </div>
         
          <h3 class="my-2">Personalized learning</h3>
          <p class="lead mb-0">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
          <a href="#" class="btn btnColor-1 mt-4">LEARN MORE</a>
        </div>
        <div id="box-2" class="box  col-md-4">
        <div class="circle2 ">
        <i><FontAwesomeIcon className="info-icon" icon={faDungeon}></FontAwesomeIcon></i>
        </div>
          <h3 class="my-2">Trusted content</h3>
          <p class="lead mb-0">Created by experts, Child Education library of trusted practice and lessons covers math, science, and more.</p>
          <a href="#" class="btn btnColor-2 mt-4">LEARN MORE</a>
        </div>
        <div id="box-3"class="box  col-md-4">
        <div class="circle3 ">
        <i><FontAwesomeIcon className="info-icon" icon={faTrophy} ></FontAwesomeIcon></i>
        </div>
          <h3 class="my-2">Tools to empower teachers</h3>
          <p class="lead mb-0">With Child Education, teachers can identify gaps in their students and meet the needs of every student.</p>
          <a href="#" class="btn btnColor-3 mt-4">LEARN MORE</a>
        </div>
      </div>
    </div>
  
  </section>
            
        </div>
    );
};

export default HomeIcon;
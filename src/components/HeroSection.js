import React, {useEffect} from 'react';
import '../App.css';

import './HeroSection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function HeroSection(props) {

  useEffect(()=>{
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration:2000});
  },[])

  useEffect(()=>{
    let prevScrollpos = window.pageYOffset;
    let downArrow = document.querySelector(".down-arrow");
    let menuBtns=document.querySelector(".menu-btns")
   
  
    window.onscroll = function() {
      if ( menuBtns === null){
return 
      }
    let currentScrollPos = window.pageYOffset;
      if ( currentScrollPos === 0) {
        
          if(window.screen.width < 760){
            downArrow.style.top = "302px";
            menuBtns.style.top = "474px";
  
          }else{
            downArrow.style.top = "250px";
            menuBtns.style.top = "81%";
          }
      
      } else {
        downArrow.style.top = "-60%";
        menuBtns.style.top = "-60%";
      }
      prevScrollpos = currentScrollPos;
    }
  
  
  
  
  
  
  },[])


  return (
    <div className='hero-container' style={{background:props.backgroundImg}}  id={props.id}>
       <svg class="top-svg" width="100%"  viewBox="0 0 1200 250">
                 <path id="divider"  d="M -1 3 C 551 113 173 37 764 154 L 1328 10 V 0 H 1150 C 1100 0 1000 0 900 0 C 800 0 700 0 600 0 C 500 0 400 0 300 0 C 200 0 100 0 50 0 H 0 V 5 Z" fill="currentColor"></path>
        </svg>
      <video src={props.bgVideo} autoPlay loop muted />

      <div 
        className="hero-text "
        data-aos="fade-up"
      >
        <h1>{props.title}</h1>

        <p>{props.para}</p>
     
      </div>

      <i className="fas fa-chevron-down down-arrow bounce2"
       ></i>
      
      
    </div>
  );
}

export default HeroSection;

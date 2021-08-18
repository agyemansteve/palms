import React, { useEffect } from 'react';
import './Divider.css';
// import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';


export function Divider(props) {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])

  return (
   
    <div className='divider' style={{background: props.bg }} >
        <div data-aos="zoom-in"
              >
         {props.children}   
        </div>
        
    </div>
   
  );
}
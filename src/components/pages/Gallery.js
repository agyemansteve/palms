import React from 'react';
import '../../App.css';
// import Cards from "../Cards"
import SlideShow from '../SlideShow';

export default function Gallery (props) {

 



  
  return (
    <div className="Gallery">


  
   
        <SlideShow slides={props.slides }/>
    {/* <Cards images={props.slides  } /> */}
    

    </div>
    );
}

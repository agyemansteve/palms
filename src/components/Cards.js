import React, {useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards(props) {

  useEffect(()=>{
    AOS.init({duration:1000,});
  },[])
   
  return (
    <div >
                    <CardItem
                     images={props.images}
                     
                      
                    /> 
    </div>
  );
}

export default Cards;

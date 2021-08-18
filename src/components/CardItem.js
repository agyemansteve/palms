import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function CardItem(props) {
  useEffect(()=>{
    AOS.init({duration:100,});
  },[])


  const images = props.images;
 

  const list = images.map((image)=>{
    
   return ( <div className="cards-wrapper">
    <div className='card-item'
     data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-anchor-placement="top-bottom"
   >
      <Link className='card-link' to={image.media_url}>
      
          <img
            className='card-img'
            loading="lazy"
            alt={image.media_type}
            key={image.id}
             
            src={image.media_url}
          />
       
       
      </Link>
    </div>
  </div>)
  })

  return (

     <div className='cards-container' >
        {list}
     </div>
  );
}

export default CardItem;

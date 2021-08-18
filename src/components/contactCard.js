import React, {useEffect} from "react"

import AOS from 'aos';
import 'aos/dist/aos.css';
import './contactCard.css';


//  <a

// className='social-icon-link youtube'
// href='/'
// target='_blank'
// aria-label='Youtube'
// >
// <i className='fab fa-youtube' />
// </a>





export default function ContactCard (props){

    useEffect(()=>{
        AOS.init({duration:1500});
      },[])


return ( 
<div data-aos="zoom-in" className="contact-card-links">
    <a
    className="contact-card-links"
     href={props.href}
    //  target='_blank'
    //  rel="noopener noreferrer"
      aria-label={props.label}
    
    >
        <i className={`fas contact-card-item ${props.icon}`}> </i>
        <p className="contact-card-item">{`${props.action}: ${props.to}`}</p>
    </a>
  
    

    {/* <div className="contact-card-item"><i class="fas contact-svg fa-phone-square-alt"></i> Phone: + 0550643560</div>
    <div className="contact-card-item"><i class="fas contact-svg fa-map-marked-alt"> </i>Address: 5 ET Akonor St, Madina, Ghana</div> */}

</div>


)


}
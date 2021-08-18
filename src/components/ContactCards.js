import React from "react"
import ContactCard from './contactCard';
import '../../src/App.css';
// import './Content.css';
// import Content from "./Content";




export default function ContactCards(){



    return (


     <div className="contact-cards">
               <ContactCard  
               href="mailto:someone@example.com"
                icon=" fa-envelope-square"
                action="Email" 
                to="somthing@somthing.com"
                label="email"
                />
                <ContactCard  
                icon=" fa-phone-square-alt"
                href="tel:+0550643560"
                label="Phone"
                action="Phone" 
                to={`+ 0550643560`} 
                />
                  <ContactCard  
                icon=" fa-map-marked-alt"
                action="Address" 

                label="address"
                href="https://www.google.com/maps/dir//House+of+Alkebulan,+citydia,+Opposite,+E+Legon+-+Trasacco+Estate+Rd,+Accra,+Ghana/@5.6505721,-0.1315608,17.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0xfdf839b074ae0d3:0xf9fa94f4afbe8ea0!2m2!1d-0.1315887!2d5.6494177"
                to={`5 ET Akonor St, Madina, Ghana`}
                />

     </div>
  
   
    )
}
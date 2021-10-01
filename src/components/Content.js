import React, {useEffect} from 'react';
import './Content.css';
import '../../src/App.css';
import { Button } from './Button';
// import heroImg from "../../public/images/images/bg1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';




function Content (props){


    useEffect(()=>{
        AOS.init({
            duration:3500,
            offset:'-500px' ,
           
        });
      },[])


return (
    <div className="content" id={props.id} data-aos={props.contentAnime} style={{background: props.mainBg, flexDirection:props.flexDirection }}>

   
    
<     img className="content-image" id="image" data-aos={props.imgAnime}  src={props.src} alt=""/>

    
     
  
                <div className="content-text"  style={{background: props.textBg }} >
                                        <h1 data-aos={props.tittleAnime} >{props.title}</h1>
                                      
                                       
                                        <i className='fas fa-feather-alt content-logo'  />
                                        <br/>
                                        <p data-aos={props.paraAnime} > {props.para}</p>
                                        <br/>
                                        <Button 
                                                display = {props.btnDisplay}
                                                buttonStyle={props.buttonStyle}
                                                buttonSize={props.buttonSize}
                                                children={props.buttonChild}
                                                to={props.btnTo}
                                                onClick={props.btnOnClick}
                                                />




                                                {/* Learn More */}
                                        
                                        {/* </ScrollLinkButton>  */}



                </div>



              
                   
    

       
   


    </div>
)
}


export default Content
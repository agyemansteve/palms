import React, { useEffect, } from 'react';
import '../../App.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import HeroSection from '../HeroSection';
// import Footer from '../Footer';

import Content from '../Content';
import { ScrollLinkButton } from '../ScrollLinkButton';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '../Button';
import useWindowDimensions from '../useWindowDimensions';


 



 const Home=(props)=> {

    const {  width } = useWindowDimensions();

    useEffect(()=>{
      AOS.init({
        startEvent: 'DOMContentLoaded',
        duration:1000});
    },[])

 
  return (
    <div id="home"
   
     >
      
      <HeroSection
      // title="AKWAABA"
      bgVideo='/videos/video-1.mp4'
      />

 
<div className="menu-btns" >
        <Button 
        to="/contact"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        >
          CONTACT US
        </Button>


        <ScrollLinkButton
         to="aboutUs"
         buttonSize="btn--large"
          >
          OUR STORY
        </ScrollLinkButton>


      </div>
{/* 
      <Divider  bg="#000000cc" />
      <Divider  bg="#a47d5a94" /> */}

      <Content
          contentAnime="fade-up"
            mainBg= "#000000cc" 
            textBg= "#331b1800"
            tittleAnime="fade-up"
            paraAnime="fade-up"
            buttonStyle='btn--outline'
            buttonSize='btn--medium'
            buttonChild= "Reservations"
            btnTo="/contact"
            // btnOnClick={}
            imgAnime="fade-right"
            flexDirection="column-reverse"
            title="AKWAABA"
            para = {` PALMS LOUNGE & BAR : Tuesday - Sunday From 2pm to late.`}
            // src="images/img5.jpg"
            id = "welcome"
              /> 



          
<Content
// navbar.style.backgroundImage="url(/images/kente.jpg)"
//  mainBg= {`url(/images/kente.jpg)`} 

mainBg= {   width <= 796 ? `black` : `url(/images/img4.jpg) center fixed`} 
      textBg= "black"
  
      tittleAnime="fade-right"
      paraAnime="fade-down"
      // imgAnime="zoom-out"
      // btnDisplay="none"
      flexDirection="row"
      buttonStyle='btn--primary'
       title="KITCHEN"
       buttonChild= "MENU"
       btnTo="/menu"
       para = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
       src="images/fd2.jpg"
       id = "kitchen"
        /> 



<Content
          // contentAnime="fade-up"
            mainBg= "#000000cc" 
            textBg= "#331b1800"
            tittleAnime="fade-up"
            paraAnime="fade-up"
            buttonStyle='btn--outline'
            buttonSize='btn--medium'
            buttonChild= "UPCOMING EVENTS"
            btnTo="/events"
            // btnOnClick={}
            imgAnime="fade-right"
            flexDirection="column-reverse"
            title="PRIVATE EVENTS"
            // para = {"Lorem isum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            // // src="images/img5.jpg"
            // id = " "
              /> 


<Content
// mainBg="black"
mainBg= "#1b0a08d9"
      // mainBg= {`url(/images/img3.jpg) no-repeat left top ,url(/images/img1.jpg)  no-repeat right top  `} 
      textBg= "#00000094"
      tittleAnime="fade-right"
      paraAnime="fade-up"
      imgAnime="fade-down-left"
      // btnDisplay="none"
      flexDirection="row"
      // buttonStyle='btn--outline'
      buttonChild="MENU"
      btnTo="/menu"
       title="BAR"
       para = {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
       src="images/fd7.jpg"
       id = "bar"
        /> 


                                    

          
      <Content
      
          // mainBg= "#331b18"
          mainBg = "#1b0a08"
          // textBg= " black"
          tittleAnime="fade-up"
          paraAnime="fade-down-left"
          imgAnime="fade-down-right"
          title="About Us"
            // btnDisplay="none"
            buttonStyle='btn--outline'
            buttonSize='btn--medium'
            buttonChild= "Learn more"
            btnTo="/about"
          para = {` "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          src="images/bg1x.jpg"
          flexDirection="row-reverse"
          id = "aboutUs"
          /> 


 
 
      
    </div>
  );
}

export default Home;

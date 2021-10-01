  import React from 'react';
  import '../../App.css';
  // import {useWindowDimensions} from "../useWindowDimensions"
  import Content from '../Content';
  import HeroSection from '../HeroSection';
  import { Button } from '../Button';
  import { ScrollLinkButton } from '../ScrollLinkButton';
  import useWindowDimensions from '../useWindowDimensions';


  export default function Menu() {


    const {  width } = useWindowDimensions();


  const hero = 
  <HeroSection
    
      backgroundImg={` no-repeat url(/images/mnu2.jpg) center fixed`}
      id="menu"
      // para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      scrollBtnDisplay="none"
      btnDisplay="none"
      // title= {`MENU`}    
  />


  const section =   <Content
  contentAnime="fade-up"
    // mainBg= "#000000cc" 
    textBg= "#1b0a08a3"
    id="menu"
    tittleAnime="fade-up"
    paraAnime="fade-up"
    buttonStyle='btn--outline'
    buttonSize='btn--medium'
    buttonChild= "DOWNLOAD"
    btnDisplay="none"
    // to="/images/mnu2.jpg"
    // btnOnClick={ ()=>{
    //  return <a  style={{textDecoration: "none"}} href="/images/mnu2.jpg" download> </a>
    // }}
    imgAnime="fade-right"
    flexDirection="column-reverse"
    title="MENU"



    para = {   <a  style={{textDecoration: "none", color:"white" }} href="/images/mnu2.jpg" download> -Click to Here to Download- </a>}
    // src="images/img5.jpg"
    
      />
          
        
      





    return (
    <div>  
      

    <HeroSection
        bgVideo='/videos/video-4.mp4'
        // para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      
        title= {`MENU`}    
    />

    
  <div className="menu-btns" >

        {/* <Button 
        to="/menu"
        buttonStyle="btn"
        buttonSize="btn--medium"
        >
          MENU
        </Button> */}

          <ScrollLinkButton 
          to="menu"
          buttonSize="btn--medium"

          
          >
            MENU
          </ScrollLinkButton>


          <ScrollLinkButton
          to="upcoming"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
            >
            UPCOMING EVENTS
          </ScrollLinkButton>


        </div>


        {/* <a  style={{textDecoration: "none"}} href="/images/mnu2.jpg" download> */}


        

        {width < 768 ? section : hero  }


            {/* </a> */}
      
    



  <Content
          mainBg= "#000000cc" 
            // mainBg= "black"
            // textBg= "white"
            tittleAnime="fade-up"
            paraAnime="fade-down-right"
            imgAnime="fade-down-left"
            flexDirection="row-reverse"
            title="UPCOMING EVENTS"
            para = {"- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"}
            src="images/mobilebg.jpg"
              btnDisplay="none"
            id = "upcoming"
              /> 



                <Content
            // contentAnime="fade-up"
              // mainBg= "#000000cc" 
              mainBg= {` url(/images/img7.jpg) center fixed`} 
              textBg= "#000000cc"
              tittleAnime="fade-up"
              paraAnime="fade-up"
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
              buttonChild= "Learn more"
              btnTo="/contact"
              // btnOnClick={}
              imgAnime="fade-right"
              flexDirection="column-reverse"
              title="BOOK US FOR PRIVATE EVENT"
              para = {"Lorem isum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              // src="images/img5.jpg"
              // id = " "
                /> 


            <Content
            // contentAnime="fade-up"
              mainBg= "#000000cc" 
              textBg= "#331b1800"
              tittleAnime="fade-up"
              paraAnime="fade-up"
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
              buttonChild= "Contact"
              btnTo="/contact"
              // btnOnClick={}
              imgAnime="fade-right"
              flexDirection="column-reverse"
              title="CATHERING"
              para = {"Lorem isum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              // src="images/img5.jpg"
              // id = " "
                /> 



          


      
      
    </div>
    );
  }

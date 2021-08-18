import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import Menu from './components/pages/Menu';
import Contact from './components/pages/Contact';
import ScrollToTop from './ScrollToTop';
import Footer from "./components/Footer"
import Content from './components/Content';
import HeroSection from './components/HeroSection';




const SliderData = [
  {
    image:
      'images/img3.jpg'
  },
  {
    image:
    'images/img1.jpg'
  },
  {
    image:
    'images/img2.jpg'  },
  {
    image:
    'images/img4.jpg' },
  {
    image:
    'images/img5.jpg' },
    
    {
      image:
      'images/img7.jpg'  },
    {
      image:
      'images/bg1.jpg' },
    {
      image:
      'images/bg2.jpg' },
      {
        image:
        'images/bg3.jpg' },
      {
        image:
        'images/bg4.jpg' },
        {
          image:
          'images/img7.jpg'  },
        {
          image:
          'images/fd1.jpg' },
        {
          image:
          'images/fd2.jpg' },
          {
            image:
            'images/fd3.jpg' },
          {
            image:
            'images/fd4.jpg' },
            {
              image:
              'images/fd5.jpg' },
              {
                image:
                'images/fd6.jpg' },
              {
                image:
                'images/fd7.jpg' }
];





function App() {



  // const [images, setImages]= useState([])

 

   const getData = async()=>{     
              const  url = `http://localhost:5000/getfetch/`;
            try {
                const response = await fetch(url,{
              // mode: 'no-cors',
             
            });

            const data = await response.json()
              console.log(data)
  //          setImages(data.data)
           
            }catch(err){
            console.log(err)
             
             //  handle errror later
           }       
  }

  

const handleScroll =()=>{


  
  let heroContainer = document.querySelector(".hero-container");

   if(heroContainer===null){
     return
   }

  
  
  
  
  const optionTop = {
    root: null,
    threshold: 0,
    rootMargin: "0px",
  
  };
  
  const topObserver = new IntersectionObserver(function (entries,topObserver){
  
  
      entries.forEach(entry=>{


        const navbar = document.querySelector(".navbar");
        const navMenu= document.querySelector(".nav-menu")
        
  
        if(!entry.isIntersecting){
           
        
          // navbar.style.backgroundImage="url(/images/kente.jpg)"
          navbar.style.backgroundColor="#1b0a08"


          if(window.innerWidth <= 796){
            navMenu.style.width="100vw"
          }else{
          navMenu.style.width="28vw"
        }
           navbar.style.height="57px"
         

          
         }else{

          
          
          navbar.style.backgroundColor="#ffffff00"
          
          // navbar.style.backgroundImage="url()"
        
          navbar.style.height="80px"
          if(window.innerWidth <= 796){
            navMenu.style.width="100vw"
          }else{
              navMenu.style.width="60vw"
          }
        
      
         }
      // topObserver.unobserve(entry.target)
    });
  
  },optionTop);
  
  topObserver.observe(heroContainer);


}


  useEffect(()=>{
    // getData()
    handleScroll()
    
 },[])







  return (
    <div>
      <Router>
      <ScrollToTop />
        <Navbar  />
        
     
        <Switch>
             

              <Route path='/menu'  >
                <Menu />
              </Route> 

              <Route path='/about' > 
                  <Gallery slides={SliderData } />
                      
                            <Content
                            
                            // mainBg= "#331b18"
                            mainBg = "black"
                            // textBg= " black"
                            tittleAnime="fade-up"
                            paraAnime="fade-down-left"
                            imgAnime="fade-down-right"
                            title="OUR STORY"
                              btnDisplay="none"
                            para = {` "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                            src="images/bg1x.jpg"
                            flexDirection="row"
                            //  to="/menu"
                            /> 

                 
              </Route >

              <Route path='/events'>
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
                                // id = "upcoming"
                    /> 

              </Route>
            
              <Route path='/contact'  > 



                                  <HeroSection
                                  backgroundImg={` url(/images/fd7.jpg) center`} 
                          title="CONTACT US"
                          // bgVideo='/videos/video-1.mp4'
                          />
                              
                                  <Contact /> 
                                  
                                  
                                  
                                  
                                  
                            <Content
                              // contentAnime="fade-up"
                               mainBg= {`url(/images/bg3.jpg) center fixed`} 
                                // mainBg= "#1b0a08" 
                                // textBg= "#331b1800"
                                btnDisplay="none"
                                tittleAnime="fade-up"
                                paraAnime="fade-up"
                                // buttonStyle='btn--outline'
                                // buttonSize='btn--medium'
                                // buttonChild= "Contact"
                                btnTo="/contact"
                                // btnOnClick={}
                                imgAnime="fade-right"
                                flexDirection="column-reverse"
                                title="We Loook Foward to hearing from you"
                                // para = {"Lorem isum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                                // src="images/img5.jpg"
                                // id = " "
                                  /> 





              </Route>


               <Route exact path='/'   >
             
                <Home 

                //  images={images}
                 
                 />

               
              </Route>
        </Switch>
        
      <Footer />
      </Router>
    </div>
  );
}

export default App;

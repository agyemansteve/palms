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

    

      // const getData = async()=>{     
      //             const  url = `http://localhost:5000/getfetch/`;
      //           try {
      //               const response = await fetch(url,{
      //             // mode: 'no-cors',
                
      //           });

      //           const data = await response.json()
      //             console.log(data)
      // //          setImages(data.data)
              
      //           }catch(err){
      //           console.log(err)
                
      //           //  handle errror later
      //         }       
      // }

      

    const handleScroll =()=>{


      
      

      // const topSvg = document.querySelector(".top-svg");
      const downArrow = document.querySelector(".down-arrow");

      if(downArrow===null){
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
            const navMenu= document.querySelector(".nav-menu");
            const midSvg = document.querySelector("#divider-mid");
            const welcome =document.querySelector("#welcome");
            
      
            if(!entry.isIntersecting){
              
            
              // navbar.style.backgroundImage="url(/images/kente.jpg)"
              navbar.style.background=` transparent`;
              // "#f5f2f2"
              navbar.style.top="auto"
              navbar.style.bottom="0"
              midSvg.style.color="black";
              midSvg.style.display="block"


              welcome.style.background=`linear-gradient(
                182deg, rgb(0, 0, 0), rgba(0, 0, 0, 0.88)) transparent`;


              welcome.firstChild.nextSibling.style.backgroundColor="none"


              if(window.innerWidth <= 796){
                navMenu.style.width="100vw"
                navbar.style.background=`black`;
              }else{
              navMenu.style.width="30vw"
              // navbar.style.background=`#fcfef7`;
            }
              navbar.style.height="80px"
            

              
            }else{

              
              navbar.style.top="0"
              navbar.style.bottom="auto"
              navbar.style.background="#ffffff00"
              midSvg.style.display="none"
             
              welcome.style.background="black"
              welcome.firstChild.nextSibling.style.background="none"
             
             
              
              // navbar.style.backgroundImage="url()"
            
              navMenu.style.width="40vw"
              if(window.innerWidth <= 796){
                navMenu.style.width="100vw"
              }else{
                  navMenu.style.width="32vw"
              }
            
          
            }
          // topObserver.unobserve(entry.target)
        });
      
      },optionTop);
      
      topObserver.observe(downArrow);


    }


      useEffect(()=>{
        // getData()
        handleScroll()
        
    },[])







      return (
        <div>
          <Router>
          <ScrollToTop />
          {/* <svg class="top-svg" width="100%"  viewBox="0 0 1200 250">
                  <path id="divider" d="M 0 108.306 L 156 74 C 158 76 154 74 245 105 C 620 228 624 232 628 228 L 1200 180.51 V -0 H 1150 C 1100 -0 1000 -0 900 -0 C 800 -0 700 -0 600 -0 C 500 -0 400 -0 300 -0 C 200 -0 100 -0 50 -0 H 0 V 108.306 Z" fill="currentColor"></path>
          </svg> */}
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
                                    title="EVENTS"
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

import React, {  useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';
// import {Link as LINK} from 'react-scroll'
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux'
import {toggleClick, setClick} from "../redux/clickSlice"

function Navbar(props) {
  
  const click = useSelector((state)=> state.click.value)
  const dispatch = useDispatch()
   const handleClick = () => dispatch(toggleClick());
  const closeMobileMenu = () => dispatch(setClick(false));

  const ScrollToTop = ()=>{
    window.scrollTo({top: 0, behavior:"smooth"})
  }

 

 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      dispatch(setClick(false))
      
    } else {
      dispatch(setClick(true))
      
    }
  };


  useEffect(() => {
    showButton();
  }, []);

 

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className='navbar'>
      {/* <svg class="top-svg" width="100%"  viewBox="0 0 1200 250">
                 <path id="divider" d="M 0 108.306 L 156 74 C 158 76 154 74 245 105 C 620 228 624 232 628 228 L 1200 180.51 V -0 H 1150 C 1100 -0 1000 -0 900 -0 C 800 -0 700 -0 600 -0 C 500 -0 400 -0 300 -0 C 200 -0 100 -0 50 -0 H 0 V 108.306 Z" fill="currentColor"></path>
        </svg> */}
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo logo-mobile bounce ' onClick={ScrollToTop}>
          <div onClick={()=>{

                    setTimeout(()=>{
                      window.location.reload(true);
                    },900)

                    }}>
                        THE PALMS
            <i className='fas fa-feather-alt leaf' />
    
                    </div>
           
          </Link>
          <div className='menu-icon' onClick={ ()=>{
            const navbar = document.querySelector(".navbar");
            // const bigScreenLogo = document.querySelector(".navbar-logo");

            // if(bigScreenLogo.style.display==="block"){
            //   bigScreenLogo.style.display="none"
            // }else{
            //   bigScreenLogo.style.display="block"
            // }

            if(navbar.style.top === "auto"){

              navbar.style.top="0"

            }else{
              navbar.style.top="auto"
            }

                  handleClick() 


                
         
         }   }>
            <i className={click ? 'fas fa-times ' : 'fas fa-bars '} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link to='/' className='navbar-logo logo-web bounce ' onClick={ScrollToTop}>
          <div onClick={()=>{

                    setTimeout(()=>{
                      window.location.reload(true);
                    },900)

                    }}>
                        THE PALMS
            <i className='fas fa-feather-alt leaf' />
    
                    </div>
           
          </Link>


            <li className='nav-item' onClick={ScrollToTop} >
              <NavLink to='/'   className='nav-links ' onClick={closeMobileMenu}>
            
                  Home
              
              </NavLink>
            </li>
            <li className='nav-item'  onClick={ScrollToTop}>
              <NavLink
                to='/menu'
                activeClassName="active-link"
                className='nav-links '
                onClick={closeMobileMenu}
              >
               
                      Menu
                   
                                
              </NavLink>
            </li>
            <li className='nav-item'  onClick={ScrollToTop}>
              <NavLink
                to='/about'
                activeClassName="active-link"
                className='nav-links '
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            
            

            <li  onClick={ScrollToTop}>
              <NavLink
                to='/contact'
                activeClassName="active-link"
                className='nav-links-mobile '
                onClick={closeMobileMenu}
              >
               Contact
              </NavLink>
            </li>
          </ul>
          {/* {click && <Button to="null" buttonStyle='btn--primary'>Contact</Button>} */}
        </div>


        
      </nav>
    </div>
  );
}

export default Navbar;

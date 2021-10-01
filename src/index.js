import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux'



// console.log("testing")

window.addEventListener('load', function() {
  
this.setTimeout(()=>{
  const app = document.querySelector(".app")
  const preloader = document.querySelector(".preloader")
  preloader.style.display="none"
  app.style.display = "block"
  // app.style.opacity = "1"
  
}, 5000)
  




})


ReactDOM.render(
    <Provider store={store}>

      <div > 
       <div className="preloader" > 
       <div>
                                  THE PALMS
                              <i className='fas fa-feather-alt leaf' />

                    </div>
          <div className="lds-facebook"> 
                    {/* <div>
                                  THE PALMS
                              <i className='fas fa-feather-alt leaf' />

                    </div> */}


              <div></div>
              <div></div>
              <div></div>
          </div>
       </div>
      <App /> 

        </div>
      
    </Provider> ,
    document.getElementById('root')
 );

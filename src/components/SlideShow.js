import React, {useEffect, useState} from 'react';
import "./SlideShow.css"





export default function SlideShow (props){



     
        const {slides}=props;
        const [current, setCurrent] = useState(0);
        const length = props.slides.length;
        // console.log(length)

  if (!Array.isArray(props.slides) || length <= 0) {
                return null;
              } 

        const nextSlide = () => {
                setCurrent(current === length - 1 ? 0 : current + 1);
              };
            
        const prevSlide = () => {
                setCurrent(current === 0 ? length - 1 : current - 1);
              };

        const autoSlide =()=>{

               let counter = 0;
               

               const interval1 = setInterval(

                        ()=>{
                                setCurrent(counter)
                                console.log(counter)
                                counter ++;
                                if(counter === length-1){
                                counter = 0
                                }
                        },8000)
        
                }




        useEffect(()=>{
                // autoSlide()
        
        },[])

//        const {slides}=props;


    return (
        <div className="slideShow" >
                        <a className="left-arrow" onClick={prevSlide}>&#10094;</a>
                       
                        `{slides.map((slide, index) => {

                                                return (

                                                        
                                                <div
                                                className={index === current ? 'slide active fade' : 'slide'}
                                                style={{backgroundImage:`url(${slide.image})`}}
                                                key={index}
                                                >
                                                {index === current && (
                                                <img src={slide.image} alt='bar pictures' className='slide-image' />
                                                
                                                )}
                                                </div>
                                                );
                                         })}   


                        
                        <a className="right-arrow"  onClick={nextSlide}>&#10095;</a>


        </div>
    )

}



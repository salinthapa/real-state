import {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import "./slider.css";
import { sliderData } from './SliderData';

const Slider = () => {   
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 10000;


    const nextSlide = () => {
        setCurrentSlide( currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    };

    const prevSlide = () => {
        setCurrentSlide( currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    };

    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(()=>{
        setCurrentSlide(0)
    },[])

    useEffect(()=>{
        if (autoScroll){
            auto()
        }
    },[currentSlide])

  return (
    <div className='slider'>
      <AiOutlineArrowLeft className="arrow prev" onClick= {prevSlide}/>
      <AiOutlineArrowRight className="arrow next" onClick= {nextSlide}/>

      {sliderData.map((slide, index) =>{
        return(
            <div className={index === currentSlide ? "slide current": "slide"} key={index}>
                {index === currentSlide && (
                    <div>
                    <img src={slide.image} alt="slide"/>
                    <div className='content'>
                        <h2>{slide.heading} </h2>
                        <p>{slide.desc}</p>
                        <hr/>
                        <button className='btn1'>Get Started</button>   
                    </div>
                    </div>
                )}
            </div> 
        )
      })}
    </div>
  )
}

export default Slider

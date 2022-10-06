import React from 'react';
import cetagories from './ItemData';
import {motion} from 'framer-motion';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useEffect,useState,useRef  } from 'react';
import './slider.css'

export default function Motion() {
    const [ slideWidth, SetSlideWidth ] = useState(0);
    const Carousel =useRef();
     useEffect(()=> {
     console.log("Value is", Carousel.current.scrollWidth,"and ",  Carousel.current.offsetWidth);
      SetSlideWidth(Carousel.current.scrollWidth- Carousel.current.offsetWidth )
    },[]);

  const nextSlide =(e) =>{
    console.log("NEXT");
    e.preventDefault();
    console.log(Carousel.current.offsetWidth);
    Carousel.current.scrollLeft -= Carousel.current.offsetWidth/2;

  };

const prevSlide =(e) =>{
  console.log("PREVIOUS");
  if (Carousel.current.scrollWidth != Carousel.current.offsetWidth){
    Carousel.current.scrollLeft += Carousel.current.offsetWidth/2;  
  }
  
} 


  return (
    <section className='container'>
      <div className='Container-M'>
        <div className='arrow arrowL' onClick={prevSlide}><AiOutlineLeft/> </div>
        <div className='Container2-M'>
            <motion.div  ref= {Carousel} className='Container2-M'>
                <motion.div drag="x" dragConstraints={{ right:0, left:-slideWidth/1.5 }} className='Box-M'>
                    {cetagories.map((cetagories) => {
                            const { id,name,price,image } = cetagories;
                            return (
                              <div className='back-box' key={id}>
                                <div className='img-box'>
                                  <img src={image}></img>
                                  <span className='img-name'><a href='#'>{name}</a></span>                   
                                </div>
                              </div>
                              );
                            })}
                </motion.div>
            </motion.div>
          </div>
          <div className='arrow arrowR' onClick={nextSlide}><AiOutlineRight/> </div>
      </div>
    </section>
  )
}

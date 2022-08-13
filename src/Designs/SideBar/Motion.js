import React from 'react';
import cetagories from './ItemData';
import {motion} from 'framer-motion';
import { useEffect,useState,useRef  } from 'react';
import './slider.css'

export default function Motion() {
    const [ slideWidth, SetSlideWidth ] = useState(0);
    const Carousel =useRef();
     useEffect(()=> {
     console.log("Value is", Carousel.current.scrollWidth,"and ",  Carousel.current.offsetWidth);
      SetSlideWidth(Carousel.current.scrollWidth- Carousel.current.offsetWidth )
    },[]);


  return (
    <section>
    <motion.div  ref= {Carousel} className='Container-M'>
        <motion.div drag="x" dragConstraints={{ right:0, left:-slideWidth }} className='Box-M'>
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
    </section>
  )
}

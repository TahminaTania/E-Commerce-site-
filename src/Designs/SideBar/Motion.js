import React from 'react';
import cetagories from './ItemData';
import {motion} from 'framer-motion';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Link , NavLink } from 'react-router-dom';
import { useEffect,useState,useRef  } from 'react';
import classes from './Slider.module.css'

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
  // if (Carousel.current.scrollWidth != Carousel.current.offsetWidth){
   Carousel.current.scrollLeft += Carousel.current.offsetWidth/2;  
  // }
  
} 


  return (
    <section >
      <div className={classes.ContainerM}>
        <div className={classes.arrowL} onClick={prevSlide}><AiOutlineLeft/></div>
        <div className={classes.Container2M}>
            <motion.div  ref= {Carousel} className={classes.Container2M}>
                <motion.div drag="x" dragConstraints={{ right:0, left:-slideWidth/1.5 }} className={classes.BoxM}>
                    {cetagories.map((cetagories) => {
                            const { id,name,url,image } = cetagories;
                            return (
                              <div className={classes.backBox} key={id}>
                                <div className={classes.imgBox}>
                                  <img src={image}></img>
                                  <span className={classes.imgName}><Link to={url}>{name}</Link></span>                   
                                </div>
                              </div>
                            
                              );
                            })}
                </motion.div>
            </motion.div>
          </div>
          <div className={classes.arrowR} onClick={nextSlide}><AiOutlineRight/> </div>
      </div>
    </section>
  )
}

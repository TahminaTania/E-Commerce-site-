import React from 'react';
import { Rated, Rated2 ,Rated3,Typed} from './LTRdata';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import './LTR.css'
import Carousel from './Carousel';
import { motion } from "framer-motion";
import { useEffect,useState,useRef  } from 'react';
import { slidesOnLeft } from 'react-slick/lib/utils/innerSliderUtils';


export default function LTRproducts() {
  // const [index,setCutternIndex] =useState(0);  
  // const [ Boxwidth, SetBoxWidth ] = useState(0);
  // const Container =useRef();

  //  useEffect(()=> {
  //   SetBoxWidth(Container.current.scrollWidth- Container.current.offsetWidth )
  // },[]);

  // const prevSlide =() =>{
  //   console.log("Previous");
  //   const isFirstSlide =index=== Rated.length-1;
  //   const newIndex = isFirstSlide ? 0 : index+1;
  //   setCutternIndex(newIndex)

  //   }

  //   const nextSlide =() =>{
  //     console.log("Next");
  //     const isFirstSlide =index===0
  //     const newIndex = isFirstSlide ? Rated.length-1 : index-1
  //     setCutternIndex(newIndex)
        
  //   }


  return (

    <section>
      <div className='container ltr'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
                {Typed.map((typed) => {
                    const { id,title} =typed;
                    return (
                      <div className='col-md-4 typed' key={id}> 
                                <div>
                                  <h3> {title}</h3>
                                </div>
                                <div className='arrows'>
                                  <span onClick={''}><AiOutlineLeft/></span>
                                  <span onClick={''}><AiOutlineRight/></span>
                                </div>                       
                                 
                      </div>
                      
                      );
                    })}
            </div>
            {/* Letest Row */}
          </div>
        </div>
      </div>
    </section>
  )
}

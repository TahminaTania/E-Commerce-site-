import React from 'react';
import { Rated, Rated2 ,Rated3,Typed} from './LTRdata';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import './LTR.css'
import Carousel from './Carousel';
import TopRated from './TopRated';
import Reviewed from './Reviewed'
import { motion } from "framer-motion";
import { useEffect,useState,useRef  } from 'react';
import { slidesOnLeft } from 'react-slick/lib/utils/innerSliderUtils';


export default function LTRproducts() {
  
  return (

    <section>
      <div className='container ltr'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-4'><Carousel/></div>
              <div className='col-md-4'><TopRated/></div>
              <div className='col-md-4'><Reviewed/></div>      
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

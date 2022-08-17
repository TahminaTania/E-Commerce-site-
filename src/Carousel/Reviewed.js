import React from 'react';
import { Review1, Review2, Review3} from './LTRdata';
import './LTR.css';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { motion } from "framer-motion";
import { useEffect,useState,useRef  } from 'react';

export default function Carousel() {
  const [ Boxwidth, SetBoxWidth ] = useState(0);
  const [slide,SetSlide]=useState(0);
  const Container =useRef();
  const carousel =useRef(null);

   useEffect(()=> {
    SetBoxWidth(Container.current.scrollWidth- Container.current.offsetWidth )
  },[]);

  const nextSlide =(e) =>{
        console.log("NEXT");
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        Container.current.scrollLeft -= Container.current.offsetWidth;

      };

  const prevSlide =(e) =>{
    console.log("PREVIOUS");
    Container.current.scrollLeft += Container.current.offsetWidth;   
  }    

  return (
    <div>
      
      
                   <div className='typed'> 
                                <div>
                                  <h3>Review Products</h3>
                                </div>
                                <div className='arrows'>
                                  <span onClick={nextSlide}><AiOutlineLeft/></span>
                                  <span onClick={prevSlide}><AiOutlineRight/></span>
                                </div>                       
                                 
                      </div>

                    <motion.div  className='L-product'> 
                       <motion.div  ref={Container} className="letest-container" >
                          <motion.div   drag="x" dragConstraints={{ right:0, left: -Boxwidth }} className='col-md-12'> 
                           <div ref={carousel} className='letestP'>
                                {Review1.map((rate) => {
                                const { id,title,img,price} =rate;
                                return (
                                  <motion.div  className='latest-box' key={id}>
                                    <div className="rated-img">
                                      <img src={img}></img>
                                      </div>
                                    <div className='rated-info'>
                                      <div className="titleL">{title}</div>
                                      <div className="priceL">${price}</div>
                                    </div>            
                                  </motion.div>
                                  );
                                })} 
                              </div>
                              <div className='letestP'>
                                {Review2.map((rate) => {
                                const { id,title,img,price} =rate;
                                return (
                                  <motion.div  className='latest-box' key={id}>
                                    <div className="rated-img">
                                      <img src={img}></img>
                                      </div>
                                    <div className='rated-info'>
                                      <div className="titleL">{title}</div>
                                      <div className="priceL">${price}</div>
                                    </div>            
                                  </motion.div>
                                  );
                                })} 
                              </div>  
                              <div className='letestP'>
                                {Review3.map((rate) => {
                                const { id,title,img,price} =rate;
                                return (
                                  <motion.div  className='latest-box' key={id}>
                                    <div className="rated-img">
                                      <img src={img}></img>
                                      </div>
                                    <div className='rated-info'>
                                      <div className="titleL">{title}</div>
                                      <div className="priceL">${price}</div>
                                    </div>            
                                  </motion.div>
                                  );
                                })} 
                              </div> 
                          </motion.div> 
                        </motion.div> 
                    </motion.div>
                 

    </div>
  )
}

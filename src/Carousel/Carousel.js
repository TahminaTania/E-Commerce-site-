import React from 'react';
import { Rated, Rated2 ,Rated3,Typed} from './LTRdata';
import LTRproducts from './LTRproducts';
import { motion } from "framer-motion";
import { useEffect,useState,useRef  } from 'react';

export default function Carousel() {
  const [ Boxwidth, SetBoxWidth ] = useState(0);
  const Container =useRef();

   useEffect(()=> {
    SetBoxWidth(Container.current.scrollWidth- Container.current.offsetWidth )
  },[]);

  return (
    <div>
      
       <div className="row" >
                <div className="col-md-12">
                  <div className="row ">
                    <motion.div   className="col-md-4" > 
                       <motion.div  ref={Container} className="letest-container" >
                          <motion.div  drag="x" dragConstraints={{ right:0, left: -Boxwidth }} className='col-md-12'> 
                           <div className='letestP'>
                                {Rated.map((rate) => {
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
                                {Rated2.map((rate) => {
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
                                {Rated3.map((rate) => {
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

                </div>
              </div>
          

    </div>
  )
}

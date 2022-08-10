import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {FaArrowAltCircleLeft , FaArrowAltCircleRight} from 'react-icons/fa';
import cetagories from './ItemData';
import {motion} from 'framer-motion'



const Container=styled.div`
    width:100%;
    height:50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#d1c6c6;
    position: relative;
    overflow:hidden;
`;

const Arrow =styled.div`
    height: 50px;
    width: 30px;
    font-size:40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    left : ${props=> props.direction ==="left" && "10px"};
    right : ${props=> props.direction ==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity:0.5;
    z-index:2;
`;
const ImageCont=styled.div`
    height:0%;
    margin:15px;
`;
const Image=styled.div`
height:50px;
width:50px;
`;

const Price= styled.p`
padding: 0 20px;

`;
const Name= styled.h6`
font-size: larger;
font-weight: bolder;
padding: 10px 20px;
background-color:white;

`;

export default function Slider() {
  const [slideIndex,SetSlideIndex]=useState(0);
  const [slideWidth,SetSlideWidth]=useState(0);
  const wrapperArea =useRef();
  useEffect(()=> {
    console.log("Value is", wrapperArea.current.scrollWidth,"and ",  wrapperArea.current.offsetWidth);
    SetSlideWidth(wrapperArea.current.scrollWidth - wrapperArea.current.offsetWidth )
  },[]);

  const handleClick=()=>{


  }
  return (
      <Container>
          <Arrow direction="left">
            <FaArrowAltCircleLeft onClick={()=>handleClick()}/>
          </Arrow>
          <motion.div ref={wrapperArea} className='wrapperArea'>
            <motion.div drag="x" dragConstraints={{ right:500, left:-500 }}  className='Wrapper' slideIndex={slideIndex}>
              {cetagories.map((cetagories) => {
                    const { id,name,price,image } = cetagories;
                    return (
                      <motion.div className='ContBox' key={id}>
                        <motion.div className='ImageCont types'>
                          <img src={image}></img>
                        </motion.div>
                        <motion.div className=' InfoCont'>
                          <Name onClick={''}>{name}</Name>
                          <Price>{price}</Price>
                        </motion.div>
                      </motion.div>
                      );
                    })}
            </motion.div>
          </motion.div>
          <Arrow direction="right"> 
            <FaArrowAltCircleRight onClick={()=>handleClick()}/> 
          </Arrow>
      </Container>
  )
}




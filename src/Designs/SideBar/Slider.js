import React, { useState } from 'react';
import styled from 'styled-components';
import {FaArrowAltCircleLeft , FaArrowAltCircleRight} from 'react-icons/fa';
import Fish from './ItemData';
import { Slide } from '@mui/material';
import { width } from '@mui/system';


const Container=styled.div`
    width:100%;
    height:40vh;
    display: flex;
    background-color:#d1c6c6;
    position: relative;
    overflow:hidden;
`;

const Arrow =styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;
    border-radius:50%;
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
const Wrapper=styled.div`
    height:100%;
    width:100%;
    display:flex;
    transform: translateX(${props => props.slideIndex * -40}vw);
    `;

const FishCont=styled.div`
    width:100vw;
    height:100%;
    // display:flex;
    align-items:center;
    background-color:white;
    margin:10px;

`;
const ImageCont=styled.div`
    height:100%;
    margin:15px;

`;
const Image=styled.div`
height:50px;
width:50px;
`;
const InfoCont=styled.div`
width:100%;
display:flex;

`;

const Price= styled.p`
padding: 0 20px;

`;
const Name= styled.h6`
`;

export default function Slider() {
  const [slideIndex,SetSlideIndex]=useState(0);
  const handleClick=(direction)=>{
    if(direction ==='left'){
      SetSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    } else {
      SetSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }

  }
  return (
      <Container>
          <Arrow direction="left">
            <FaArrowAltCircleLeft onClick={()=>handleClick('left')}/>
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {Fish.map((fish) => {
                  const { id,name,price,image } = fish;
                  return (
                    <FishCont key={id}>
                      <ImageCont className='fishimg'>
                        <img src={image}></img>
                      </ImageCont>
                      <InfoCont>
                        <Name >{name}</Name>
                        <Price>{price}</Price>
                      </InfoCont>
                    </FishCont>
                    );
                  })}
          </Wrapper>
          <Arrow direction="right"> 
            <FaArrowAltCircleRight onClick={()=>handleClick('right')}/> 
          </Arrow>
      </Container>
  )
}



// <ul className=''>
// {Fish.map((fish) => {
//     const { id,name,price, image } = fish;
//     return (
//     <li key={id}>
//       <div><img src={image}></img></div>
//       <div>{price}</div>
//       <div>{name}</div>
//     </li>
// ); 
// })}
// </ul>
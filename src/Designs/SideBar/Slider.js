import React, { useState } from 'react';
import styled from 'styled-components';
import {FaArrowAltCircleLeft , FaArrowAltCircleRight} from 'react-icons/fa';
import cetagories from './ItemData';



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
    // z-index:2;
`;
const Wrapper=styled.div`
    // height:60%;
    width:100%;
    display:flex;
    transform: translateX(${props => props.slideIndex * -40}vw);

    `;

const ContBox=styled.div`
    width:100vw;
    height:80%;
    // display:flex;
    align-items:center;
    background-color:#d1c6c6;
    margin:10px;

`;
const ImageCont=styled.div`
    height:0%;
    margin:15px;
`;
const Image=styled.div`
height:50px;
width:50px;
`;
const InfoCont=styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
background-color:#d1c6c6;
margin:10px;
opacity:1;

`;

const Price= styled.p`
padding: 0 20px;

`;
const Name= styled.h6`
font-size: larger;
font-weight: bolder;
padding: 10px 20px;
background-color:white;
cursor: pointer;

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
            {cetagories.map((cetagories) => {
                  const { id,name,price,image } = cetagories;
                  return (
                    <ContBox key={id}>
                      <ImageCont className='types'>
                        <img src={image}></img>
                      </ImageCont>
                      <InfoCont>
                        <Name onClick={''}>{name}</Name>
                        <Price>{price}</Price>
                      </InfoCont>
                    </ContBox>
                    );
                  })}
          </Wrapper>
          <Arrow direction="right"> 
            <FaArrowAltCircleRight onClick={()=>handleClick('right')}/> 
          </Arrow>
      </Container>
  )
}




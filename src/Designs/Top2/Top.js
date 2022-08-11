import React from 'react'
import styled from 'styled-components';
import { AiFillMail} from 'react-icons/ai';
import {FaFacebookF, FaTwitter , FaLinkedin , FaPinterestP, FaUserAlt} from 'react-icons/fa';
import { social } from './top2Data';
import './top.css'

export default function() {
    const Container =styled.div`
    height:50px;
    Background:hsl(212, 33%, 89%);
    `;
    const Wrapper =styled.div`
    padding:10px;
    display:flex;
    justify-content:space-between;
    `;

    const Left=styled.div`
    width:50%;
    `;
    const Right=styled.div`
   
    `;
    const Center=styled.div`
    width:20%;
    `;
    

  return (
    <Container>
        <Wrapper>
            <Left>
                <ul>
                <li className='header-mail'> <AiFillMail/> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
                </ul>

            </Left>
            <Center>
             <ul className='social-icons'>
                        {social.map((socialIcon) => {
                            const { id, url, icon } = socialIcon;
                            return (
                            <li key={id}>
                            <a href={url}>{icon}</a>
                            </li>
                        ); 
                        })}
                    </ul>
            </Center>
            
            <Right>
                  <ul>
                    <li>
                        <select class="">
                                <option selected>Language</option>
                                <option value="1">English</option>
                                <option value="2">Bangla</option>
                        </select>
                    </li>
                    <li className='logIn'>
                        <FaUserAlt/> Log in
                    </li>
                  </ul>  
                    
            </Right>
        </Wrapper>
        
    </Container>
  )
}


// Using style componend instead of using CSS
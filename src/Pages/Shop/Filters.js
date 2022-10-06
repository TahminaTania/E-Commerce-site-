import React from 'react'
import Carousel from '../../Carousel/Carousel';
import Color from './Color';

import Size from './Size';
import { useState } from 'react';

export default function Filters() {
  // const [Bcolor,setColor]=useState("");

    const options=['Fresh Meat','Vegetables','Fruit & Nut Gifts','Fresh Berries','Ocean Foods','Butter & Eggs','Fastfood','Fresh Onion','Papayaya & Crisps','Oatmeal','Fresh Bananas'];
  return (
    <section className='shop-page-dept'>
        <div className='Departments'>
                <h3 className='mb-4'>Departments</h3>
                {options.map((option) =>(
                    <div className='filtr-optn'><a href='#'>{option}</a></div>
                ))}
        </div>
          
    </section>
  )
}

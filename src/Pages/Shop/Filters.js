import React from 'react'
import Carousel from '../../Carousel/Carousel';
import Color from './Color';
import MultiSliderRange from './MultiSliderRange';
import Size from './Size';

export default function Filters() {

    const options=['Fresh Meat','Vegetables','Fruit & Nut Gifts','Fresh Berries','Ocean Foods','Butter & Eggs','Fastfood','Fresh Onion','Papayaya & Crisps','Oatmeal','Fresh Bananas'];
  return (
    <section>
        <div className='Departments'>
                <h3 className='mb-4'>Departments</h3>
                {options.map((option) =>(
                    <div className='filtr-optn'><a href='#'>{option}</a></div>
                ))}
        </div>
        <MultiSliderRange/>

        <Color/>
        <Size/>
        <div className='mt-5'>
        <Carousel/>
        </div>
        {/* How to pass data between react components
         */}
      
         
    </section>
  )
}

import React from 'react'
import MultiSliderRange from './MultiSliderRange';

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

    </section>
  )
}
